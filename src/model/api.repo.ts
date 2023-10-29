import { Poke } from "../data/pokemon";

export class ApiRepo {
  apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';

  async getPoke(): Promise<Poke[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }


}
