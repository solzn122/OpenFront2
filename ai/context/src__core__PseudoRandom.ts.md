# src/core/PseudoRandom.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 2050 bytes
- Dependencies: seedrandom
- Public interfaces: PseudoRandom
- Important implementation details: Classes: PseudoRandom Functions/methods: PseudoRandom.constructor, PseudoRandom.next, PseudoRandom.nextInt, PseudoRandom.nextFloat, PseudoRandom.nextID, PseudoRandom.randElement, PseudoRandom.randFromSet, PseudoRandom.chance, PseudoRandom.shuffleArray Content notes: import seedrandom from "seedrandom"; export class PseudoRandom { private rng: seedrandom.PRNG; private static readonly POW36_8 = Math.pow(36, 8); // Pre-compute 36^8 constructor(seed: number) { this.rng = seedrandom(String(seed)); } next(): number {

