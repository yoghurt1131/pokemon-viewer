import { Generation, VersionImage } from "../mytypes";
import { Images } from "./PokemonDetail";

const NoImage = require('../assets/images/noimage.png').default;
export class Pokemon {
    id: number;
    name: string;
    images: Images;
    versions: VersionImage[];

    constructor(id: number, name: string, 
        images: Images = { front_default: NoImage }, versions: VersionImage[]) {
        this.id = id;
        this.name = name;
        this.images = images;
        this.versions = versions;
    }

    getImageUrl(front: boolean, shiny: boolean, generation?: Generation): string {
        if(generation) {
            return this.getImageUrlFromGen(front, shiny, generation);
        }

        if(front && !shiny) {
            return this.images.front_default || NoImage;
        } else if(front && shiny) {
            return this.images.front_shiny || NoImage;
        } else if (!front && !shiny) {
            return this.images.back_default || NoImage;
        } else {
            return this.images.back_shiny || NoImage;
        }
    }

    private getImageUrlFromGen(front: boolean, shiny: boolean, generation: Generation): string {
        let version = this.versions.find((version) => version.generation === generation);
        if(!version) {
            return NoImage;
        }

        if(front && !shiny) {
            return version.images.front_default || NoImage;
        } else if(front && shiny) {
            return version.images.front_shiny || NoImage;
        } else if (!front && !shiny) {
            return version.images.back_default || NoImage;
        } else {
            return version.images.back_shiny || NoImage;
        }
    }
}
