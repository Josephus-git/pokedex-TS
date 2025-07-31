import { createInterface, type Interface } from "readline";
import { getCommands } from './registry.js';
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export type State = {
    interface: Interface;
    commands: Record<string, CLICommand>;
    pokeAPI: PokeAPI;
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
        nextLocationsURL: "",
        prevLocationsURL: "",
    }
}