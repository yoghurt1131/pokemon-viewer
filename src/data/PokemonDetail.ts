
interface PokemonDetail {
  abilities: Ability2[];
  base_experience: number;
  forms: Ability[];
  game_indices: Gameindex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  species: Ability;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

interface Type {
  slot: number;
  type: Ability;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: Ability;
}

interface Images {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
}

interface SpritesFields {
  other: Other;
  versions: Versions;
}

type Sprites = Images & SpritesFields

interface Versions {
  'generation-i'?: Generationi;
  'generation-ii'?: Generationii;
  'generation-iii'?: Generationiii;
  'generation-iv'?: Generationiv;
  'generation-v'?: Generationv;
  'generation-vi'?: Generationvi;
  'generation-vii'?: Generationvii;
  'generation-viii'?: Generationviii;
}

interface Generationviii {
  icons: Images;
}

interface Generationvii {
  icons: Images;
  'ultra-sun-ultra-moon': Images;
}

interface Generationvi {
  'omegaruby-alphasapphire': Images;
  'x-y': Images;
}

interface Generationv {
  'black-white': BlackwhiteImages;
}

type BlackwhiteImages = Images & {
  animated: Images;
}

interface Generationiv {
  'diamond-pearl': Images;
  'heartgold-soulsilver': Images;
  platinum: Images;
}

interface Generationiii {
  emerald: Images;
  'firered-leafgreen': Images;
  'ruby-sapphire': Images;
}

interface Generationii {
  crystal: Images;
  gold: Images;
  silver: Images;
}

interface Generationi {
  'red-blue': Images;
  yellow: Images;
}

interface Other {
  dream_world: Images;
  'official-artwork': Officialartwork;
}

interface Officialartwork {
  front_default: string;
}

interface Move {
  move: Ability;
  version_group_details: Versiongroupdetail[];
}

interface Versiongroupdetail {
  level_learned_at: number;
  move_learn_method: Ability;
  version_group: Ability;
}

interface Gameindex {
  game_index: number;
  version: Ability;
}

interface Ability2 {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

interface Ability {
  name: string;
  url: string;
}

export type { PokemonDetail, Versions, Images }