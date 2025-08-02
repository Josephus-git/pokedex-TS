import { initState } from "./state.js";

export function cleanInput(input: string): string[] {
    const textList = input.toLowerCase().split(" ");
    const result: string[] = [];
    for (let word of textList) {
        if (word === '') {
            continue
        }
        result.push(word)
    }
    return result
}

export async function startREPL() {
    const newState = initState()
    const rl = newState.interface
    const commands = newState.commands
    
    // Display the initial prompt
    rl.prompt();

    // Listen for line input
    rl.on('line', async (line:string) => {
        const words = cleanInput(line);

        if (words.length === 0) {
            // If input is empty, re-prompt and exit callback
            rl.prompt();
            return;
        }

        const commandName = words[0];
        const command = commands[commandName];
        if (command) {
            try {
                await command.callback(newState, ...words.slice(1));
            } catch (error) {
                console.log(`something went wrong: ${error}`);
            }
        } else {
            console.log("command not available");
        }

        // Re-prompt to allow for another command
        rl.prompt();
    });
}