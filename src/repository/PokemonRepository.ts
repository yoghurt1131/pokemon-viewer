import { Pokemon } from "../domain/Pokemon";
import axios from 'axios';
import { PokemonDetail } from "../domain/PokemonDetail";

export class PokemonRepository {

    async get(id: number): Promise<Pokemon> {
        const pokemon = await axios.get<PokemonDetail>(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return new Pokemon(pokemon.data.id, pokemon.data.name, 
            pokemon.data.sprites.front_default,
            pokemon.data.sprites.back_default,
            pokemon.data.sprites.front_shiny,
            pokemon.data.sprites.back_shiny,
        );
    }

}