import { Images, Versions } from "./PokemonDetail";

const noImages: Images = {};
const noVersions: Versions = {};

export const NoImage = 'noimage';
export class Pokemon {
    id: number;
    name: string;
    images: Images;
    versions: Versions

    constructor(id: number, name: string, 
        images: Images = noImages, versions: Versions = noVersions) {
        this.id = id;
        this.name = name;
        this.images = images
        this.versions = versions;
    }

    getImageUrl(front: boolean, shiny: boolean): string {
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
}
