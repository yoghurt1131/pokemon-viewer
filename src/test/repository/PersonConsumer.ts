import axios from "axios";
import { Person } from "./Person";

export class PersonConsumer {
    
    async get(): Promise<Person> {
        return (await axios.get<Person>('https://hoge.com')).data;
    }
}