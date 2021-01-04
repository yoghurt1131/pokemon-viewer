import { Images } from "./data/PokemonDetail";

export type Generation = 'generation-i' | 'generation-ii' | 'generation-iii' 
                | 'generation-iv' | 'generation-v' | 'generation-vi' | 'generation-vii' | 'generation-vii';
    
export function isGeneration(x: any): x is Generation {
    return  (
            x === 'generation-i' ||
            x === 'generation-ii' ||
            x === 'generation-iii' ||
            x === 'generation-iv' ||
            x === 'generation-v'  ||
            x === 'generation-vi' ||
            x === 'generation-vii' ||
            x === 'generation-viii');

}

export type PackageTitle = 'red-blue' | 'yellow' | 'gold' | 'silver' | 'crystal' |
                        'ruby-sapphire' | 'firered-leafgreen' | 'emerald' | 'diamond-pearl' |
                        'heartgold-soulsilver' | 'platinum' | 'black-white';

export function isPackageTitle(x: any): x is PackageTitle {
    return (
        x === 'red-blue' ||
        x === 'yellow' ||
        x === 'gold' ||
        x === 'silver' ||
        x === 'crystal' ||
        x === 'ruby-sapphire' ||
        x === 'firered-leafgreen' ||
        x === 'emerald' ||
        x === 'diamond-pearl' ||
        x === 'heartgold-soulsilver' ||
        x === 'platinum' ||
        x === 'black-white'
    );
}

export class VersionImage {
    generation: Generation
    images: Images
    constructor(generation: Generation, images: Images) {
        this.generation = generation;
        this.images = images;
    }
}
