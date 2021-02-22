import axios from "axios";
import data from "../data/data.json";
import { PersonConsumer } from "./PersonConsumer";
jest.mock('axios');

describe('PersonConsumer', () => {

    it('return person from api', async () => {
        const mockedAxios = axios as jest.Mocked<typeof axios>
        mockedAxios.get.mockResolvedValue({data: data});

        const target = new PersonConsumer();
        const actual = await target.get();
        expect(actual.name).toBe('Taro');
        expect(actual.age).toBe(20);
    });

});