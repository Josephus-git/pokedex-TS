import { State } from './state.js';
import { PokemonDetails } from './pokemonapi.js';

export async function commandCatch(state: State, ...args: string[]): Promise<void> {
    let pokemon: PokemonDetails;
    if (args.length === 0) {
        console.log("usage: catch <pokemon>");
        return;
    }
    const pokemonName = args[0];
    console.log(`Throwing a Pokeball at ${pokemonName}...`)
    const cachedPokemon = state.pokeCache.get<PokemonDetails>(pokemonName);
    if (cachedPokemon) {
        pokemon = cachedPokemon;
    } else {
        pokemon = await state.pokeAPI.fetchPokemon(pokemonName);
        state.pokeCache.add(pokemonName, pokemon);
    }
    const chance = Math.random() * pokemon.base_experience
    
    if (chance < 100) {
        console.log(`${pokemonName} was caught!`);
        state.pokedex.set(pokemonName, pokemon);
    } else {
        console.log(`${pokemonName} escaped!`);
    }

}