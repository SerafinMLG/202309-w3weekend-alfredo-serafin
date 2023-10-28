import { Poke } from "../data/pokemon";

export class ApiRepo {
  apiUrl  = 'https://pokeapi.co/api/v2/pokemon';

  async getPoke(): Promise<Poke[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }


  // Aasync createPoke(newPoke: Partial<Poke>): Promise<Poke> {
  //   const response = await fetch(this.apiUrl, {
  //     method: 'POST',
  //     body: JSON.stringify(newPoke),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   if (!response.ok)
  //     throw new Error(response.status + ' ' + response.statusText);
  //   return response.json();

  // }

}
