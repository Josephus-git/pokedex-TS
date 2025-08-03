import { type State } from "./state.js"

export async function commandPokedex(state: State): Promise<void> {
    console.log("Your Pokedex:")
    for (const [_, pokemon] of state.pokedex) {
        console.log(`   - ${pokemon.name}`)
    }
}