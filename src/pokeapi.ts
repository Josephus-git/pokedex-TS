import { PokemonDetails } from "./pokemonapi";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL || `${PokeAPI.baseURL}/location-area`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch locations: ${response.status}`);
    }
    const json = await response.json();
    return json as ShallowLocations;
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch location ${locationName}: ${response.status}`);
    }
    const json = await response.json();
    return json as Location;
  }

  async fetchPokemon(pokemonName: string) : Promise<PokemonDetails> {
    const url = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch pokemon ${pokemonName}: ${response.status}`)
    }
    const json = await response.json();
    return json as PokemonDetails;
  }
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};


 
export interface Location {
  id: number
  name: string
  game_index: number
  encounter_method_rates: EncounterMethodRate[]
  location: Location
  names: Name[]
  pokemon_encounters: PokemonEncounter[]
}

export interface EncounterMethodRate {
  encounter_method: EncounterMethod
  version_details: VersionDetail[]
}

export interface EncounterMethod {
  name: string
  url: string
}

export interface VersionDetail {
  rate: number
  version: Version
}

export interface Version {
  name: string
  url: string
}

export interface Location {
  name: string
  url: string
}

export interface Name {
  name: string
  language: Language
}

export interface Language {
  name: string
  url: string
}

export interface PokemonEncounter {
  pokemon: Pokemon
  version_details: VersionDetail2[]
}

export interface Pokemon {
  name: string
  url: string
}

export interface VersionDetail2 {
  version: Version2
  max_chance: number
  encounter_details: EncounterDetail[]
}

export interface Version2 {
  name: string
  url: string
}

export interface EncounterDetail {
  min_level: number
  max_level: number
  condition_values: any[]
  chance: number
  method: Method
}

export interface Method {
  name: string
  url: string
}

