export const Generations = {
    RedBlue: 'Red-Blue' ,
    GoldSilver: 'Gold-Silver' ,
    RubySapphire: 'Ruby-Sapphire' ,
    FireredLeafgreen: 'Firered-Leafgreen' ,
    DiamondPearl: 'Diamond-Pearl' ,
    HeartgoldSoulsilver: 'Heartgold-Soulsilver' ,
    BlackWhite: 'Black-White' ,
    OmegarubyAlphasapphire: 'Omegaruby-Alphasapphire',
    XY: 'X-Y',
    UltrasunUltraMoon: 'Ultrasun-Ultramoon'
} as const;

export type Generation = typeof Generations[keyof typeof Generations];

export function isGeneration(x: any): x is Generation {
   return  Object.values(Generations).includes(x);
}
