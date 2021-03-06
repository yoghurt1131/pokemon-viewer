import { Pokemon, VersionImage } from "../data/Pokemon";
import axios from 'axios';
import { Images, PokemonDetail } from "../data/PokemonDetail";
import { Generations } from "../data/Generation";
export class PokemonRepository {

    async get(id: number): Promise<Pokemon> {
        const pokemon = await axios.get<PokemonDetail>(`https://pokeapi.co/api/v2/pokemon/${id}`);

        const images: Images = {
            front_default: pokemon.data.sprites.front_default,
            back_default: pokemon.data.sprites.back_default,
            front_shiny: pokemon.data.sprites.front_shiny,
            back_shiny: pokemon.data.sprites.back_shiny,
        }
        let versionImages: VersionImage[] = [];
        const versions = pokemon.data.sprites.versions;

        versionImages.push(new VersionImage(Generations.RedBlue, versions['generation-i']['red-blue']));
        versionImages.push(new VersionImage(Generations.GoldSilver, versions['generation-ii']['gold']));
        versionImages.push(new VersionImage(Generations.RubySapphire, versions['generation-iii']['ruby-sapphire']));
        versionImages.push(new VersionImage(Generations.FireredLeafgreen, versions['generation-iii']['firered-leafgreen']));
        versionImages.push(new VersionImage(Generations.DiamondPearl, versions['generation-iv']['diamond-pearl']));
        versionImages.push(new VersionImage(Generations.HeartgoldSoulsilver, versions['generation-iv']['heartgold-soulsilver']));
        versionImages.push(new VersionImage(Generations.BlackWhite, versions['generation-v']['black-white']))
        versionImages.push(new VersionImage(Generations.OmegarubyAlphasapphire, versions['generation-vi']['omegaruby-alphasapphire']))
        versionImages.push(new VersionImage(Generations.XY, versions['generation-vi']['x-y']));
        versionImages.push(new VersionImage(Generations.UltrasunUltraMoon, versions['generation-vii']['ultra-sun-ultra-moon']));

        return new Pokemon(
            pokemon.data.id, 
            pokemon.data.name, 
            images,
            versionImages
        );
    }

}
