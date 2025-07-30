import { CLICommand } from "./registry.js"

export function commandHelp(commands: Record<string, CLICommand>) {
    console.log("Welcome to the Pokedex! \nUsage: \n\n")
    for (let cmd in commands) {
        console.log(`${cmd}: ${commands[cmd].description}`)
    }
};

