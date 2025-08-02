import { State } from './state.js';
import { Location } from './pokeapi.js';

export async function commandExplore(state: State, ...args: string[]): Promise<void> {
    let location: Location;
    if (args.length === 0) {
        console.log("usage: explore <location>");
        return;
    }
    const locationName = args[0]
    if (state.pokeCache.get(locationName)) {
        location = (await state.pokeCache.get(locationName)) as Location;
    } else {
        location = await state.pokeAPI.fetchLocation(locationName);
        state.pokeCache.add(locationName, location);
    }

    for (const pokemonEncounter of location.pokemon_encounters) {
        console.log(pokemonEncounter.pokemon.name)
    }
};

