import { type State } from "./state.js"
import { type ShallowLocations } from "./pokeapi.js";

export async function commandMap(state: State): Promise<void> {
    let locations: ShallowLocations;
    if (state.pokeCache.get(state.nextLocationsURL)) {
        locations = (await state.pokeCache.get(state.nextLocationsURL)) as ShallowLocations
    } else{
        locations = await state.pokeAPI.fetchLocations(state.nextLocationsURL || undefined)
        state.pokeCache.add(state.nextLocationsURL, locations)
    }  

    for (const location of locations.results) {
        console.log(location.name)
    }

    state.nextLocationsURL = locations.next ?? ""
    state.prevLocationsURL = locations.previous ?? ""
}