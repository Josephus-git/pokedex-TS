import { type State } from "./state.js"

export async function commandHelp(state: State) {
    console.log("Welcome to the Pokedex! \nUsage: \n\n")
    for (let cmd in state.commands) {
        console.log(`${cmd}: ${state.commands[cmd].description}`)
    }
};

