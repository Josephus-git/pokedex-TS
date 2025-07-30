import { createInterface } from 'node:readline';
import { getCommands } from './registry.js';

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

export function startREPL() {
    // Create the readline interface
    const rl = createInterface({ 
    input: process.stdin,
    output: process.stdout,
    prompt: 'Pokedex > '
    });

    // get commands
    const commands = getCommands()

    // Display the initial prompt
    rl.prompt();

    // Listen for line input
    rl.on('line', (line:string) => {
        const words = cleanInput(line);

        if (words.length === 0) {
            // If input is empty, re-prompt and exit callback
            rl.prompt();
            return;
        }

        const commandName = words[0]
        if (commands[commandName]) {
            commands[commandName].callback(commands)
        } else {
            console.log("command not available");
        }
            

        // Re-prompt to allow for another command
        rl.prompt();
    });
}