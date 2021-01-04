import { Pokemon } from "../data/Pokemon";
import axios from 'axios';
import { Images, PokemonDetail } from "../data/PokemonDetail";
import { VersionImage } from "../mytypes";
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
        versionImages.push(new VersionImage('generation-i', versions['generation-i']['red-blue']));
        versionImages.push(new VersionImage('generation-ii', versions['generation-ii']['gold']));
        versionImages.push(new VersionImage('generation-iii', versions['generation-iii']['ruby-sapphire']));
        versionImages.push(new VersionImage('generation-iv', versions['generation-iv']['diamond-pearl']));
        versionImages.push(new VersionImage('generation-v', versions['generation-v']['black-white']))
        versionImages.push(new VersionImage('generation-vi', versions['generation-vi']['x-y']));
        versionImages.push(new VersionImage('generation-vii', versions['generation-vii']['ultra-sun-ultra-moon']));

        return new Pokemon(
            pokemon.data.id, 
            pokemon.data.name, 
            images,
            versionImages
        );
    }

}
