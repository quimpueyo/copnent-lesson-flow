import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  pokemonIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  getPokemonImageUrl(id: number): string {
    const paddedId = id.toString().padStart(3, '0');
    return `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${paddedId}.png`;
  }

  isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
}