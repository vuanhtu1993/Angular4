import {Injectable} from '@angular/core';
import {Hero} from './hero';

@Injectable()
export class HeroService {
  arrayHero: Hero[] = [
    // new Hero('red', 'He is the team leader of super men', 'fire'),
    // new Hero('green', 'He is represent for nature', 'plant'),
    // new Hero('gray', 'He is combination between men and wolf', 'plant'),
    {name: 'red', description: 'He is the team leader of super men', element: 'fire'},
    {name: 'green', description: 'He is represent for nature', element: 'plant'},
    {name: 'gray', description: 'He is combination between men and wolf', element: 'rock'},
  ];

  constructor() {
  }

  addHero(hero: Hero) {
    this.arrayHero.push(hero);
  }

  deleteHero(index) {
    console.log(index);
    this.arrayHero.splice(index, 1);
  }
}
