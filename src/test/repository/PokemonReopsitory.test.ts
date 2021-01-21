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
  });
});