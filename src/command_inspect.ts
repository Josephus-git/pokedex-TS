import { State } from './state.js';
import { PokemonDetails } from './pokemonapi.js';

export async function commandInspect(state: State, ...args: string[]): Promise<void> {
    let pokemon: PokemonDetails;
    if (args.length === 0) {
        console.log("usage: inspect <pokemon>");
        return;
    }
    const pokemonName = args[0];
    
    const caughtPokemon = state.pokedex.get(pokemonName);
    if (caughtPokemon) {
        pokemon = caughtPokemon;
    } else {
        console.log(`you have not caught ${pokemonName}`)
        return
    }
    console.log(`Name: ${pokemon.name}`)
    console.log(`Height: ${pokemon.height}`)
    console.log(`Weight: ${pokemon.weight}`)
    console.log(`Stats:`)
    for (const stat of pokemon.stats) {
        console.log(`  - ${stat.stat.name}: ${stat.base_stat}`)
    }
    console.log("Types:")
    for (const type of pokemon.types) {
        console.log(`  - ${type.type.name}`)
    }
}