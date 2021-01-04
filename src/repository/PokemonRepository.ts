import { Pokemon } from "../data/Pokemon";
import axios from 'axios';
import { Images, PokemonDetail } from "../data/PokemonDetail";

export class PokemonRepository {

    async get(id: number): Promise<Pokemon> {
        const pokemon = await axios.get<PokemonDetail>(`https://pokeapi.co/api/v2/pokemon/${id}`);

        const images: Images = {
            front_default: pokemon.data.sprites.front_default,
            back_default: pokemon.data.sprites.back_default,
            front_shiny: pokemon.data.sprites.front_shiny,
            back_shiny: pokemon.data.sprites.back_shiny,
        }
        const versions = pokemon.data.sprites.versions;

        return new Pokemon(
            pokemon.data.id, 
            pokemon.data.name, 
            images,
            versions,
        );
    }

}