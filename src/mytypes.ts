import { Images } from "./data/PokemonDetail";

export const Generations = {
    GenerationI: 'generation-i' ,
    GenerationII: 'generation-ii' ,
    GenerationIII: 'generation-iii' ,
    GenerationIV: 'generation-iv' ,
    GenerationV: 'generation-v' ,
    GenerationVI: 'generation-vi' ,
    GenerationVII: 'generation-vii' ,
    GenerationVIII: 'generation-viii'
} as const;

export type Generation = typeof Generations[keyof typeof Generations];

export function isGeneration(x: any): x is Generation {
   return  Object.values(Generations).includes(x);
}
export class VersionImage {
    generation: Generation
    images: Images
    constructor(generation: Generation, images: Images) {
        this.generation = generation;
        this.images = images;
    }
}
