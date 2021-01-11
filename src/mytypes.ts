import { Images } from "./data/PokemonDetail";

const generations = ['generation-i' , 'generation-ii' ,'generation-iii' ,'generation-iv' ,
    'generation-v' ,'generation-vi' ,'generation-vii' ,'generation-viii'] as const;

export type Generation = typeof generations[number];

export function isGeneration(x: any): x is Generation {
    return  generations.includes(x);
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
