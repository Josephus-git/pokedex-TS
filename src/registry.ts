import { commandExit } from './command_exit.js';
import { commandHelp } from './command_help.js';
import { commandMap } from './command_map.js';
import { commandMapb } from './command_mapb.js';
import { commandExplore } from './command_explore.js';
import { commandCatch } from './command_catch.js';
import { CLICommand } from './state.js';
import { commandInspect } from './command_inspect.js';
import { commandPokedex } from './command_pokedex.js';


export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
        name: "help",
        description: "Displays a help message",
        callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Displays the names of 20 location areas",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Displays the previous 20 location areas",
      callback: commandMapb,
    },
    explore: {
      name: "explore",
      description: "Displays a list of pokemons for a particular locaion",
      callback: commandExplore,
    },
    catch: {
      name: "catch",
      description: "Catches the selected pokemon depending on ease of catching the pokemon",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "inspects a caught pokemon",
      callback: commandInspect,
    },
    pokedex: {
      name: "pokedex",
      description: "displays a list of all caught pokemon",
      callback: commandPokedex,
    },
    // can add more commands here
  };
}