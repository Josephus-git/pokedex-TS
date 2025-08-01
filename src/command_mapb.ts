import { type State } from "./state.js"
import { ShallowLocations } from "./pokeapi.js";

export async function commandMapb(state: State): Promise<void> {
    if (!state.prevLocationsURL) {
        console.log("You are on the first page of locations.")
        return
    }
    let locations: ShallowLocations;
        if (state.pokeCache.get(state.prevLocationsURL)) {
            locations = (await state.pokeCache.get(state.prevLocationsURL)) as ShallowLocations
        } else{
            locations = await state.pokeAPI.fetchLocations(state.prevLocationsURL || undefined)
            state.pokeCache.add(state.prevLocationsURL, locations)
        } 

    for (const location of locations.results) {
        console.log(location.name)
    }

    state.nextLocationsURL = locations.next ?? ""
    state.prevLocationsURL = locations.previous ?? ""
}