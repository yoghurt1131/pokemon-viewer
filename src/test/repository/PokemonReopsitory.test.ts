import { PokemonRepository } from "../../main/repository/PokemonRepository";
import data from "../data/response.json";
import axios from "axios";
jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>

describe('PokemonReository', () => {

  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({data: data});
  });

  it('get() returns bulbasaur', async () => {
    const target = new PokemonRepository();
    let actual = await target.get(1);
    expect(actual.id).toBe(1);
    expect(actual.name).toBe('bulbasaur');
    expect(actual.images.front_default).toBe("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png")
    expect(actual.versions[0].generation).toBe('Red-Blue');
    expect(actual.versions[0].images.front_default).toBe("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/1.png");
  });
});