import { exit } from 'node:process'
import { State } from './state.js';

export function commandExit(state: State) {
    console.log("Closing the Pokedex... Goodbye!")
    state.interface.close()
    exit(0);
};

