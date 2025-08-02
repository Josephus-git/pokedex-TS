import { createInterface, type Interface } from "readline";
import { getCommands } from './registry.js';
import { PokeAPI } from "./pokeapi.js";
import { Cache } from "./pokecache.js";
import { PokemonDetails } from "./pokemonapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
    interface: Interface;
    commands: Record<string, CLICommand>;
    pokeAPI: PokeAPI;
    pokeCache: Cache;
    pokedex: Map<string, PokemonDetails>;
    nextLocationsURL: string;
    prevLocationsURL: string;
}

export function initState(): State {
    // Create the readline interface
        const rl = createInterface({ 
        input: process.stdin,
        output: process.stdout,
        prompt: 'Pokedex > '
        });

    // get commands
    const commands = getCommands()

    return {
        interface: rl,
        commands: commands,
        pokeAPI: new PokeAPI,
        pokeCache: new Cache(1000 * 180),
        pokedex: new Map<string, PokemonDetails>(),
        nextLocationsURL: "",
        prevLocationsURL: "",
    }
}