import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
// Delete the HEROES import, because you won't need this anymore
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero = 'Windstorm';
  // Refactor property to of type Hero and initialize it with an id of 1
  // Changed from a string to an object
  // hero : Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // define a component properly called heroes to expose
  // HEROES array for binding.
  // heroes = HEROES;

  // Replace the definition of the heroes property with a simple declaration.
  heroes: Hero[];

  // method which assigns the clicked her from the template
  // to the component's selectedHero.
  // selectedHero: Hero;

  // Add a private heroService parameter of type HeroService to the constructor.
  constructor(private heroService: HeroService) {}

  // Create a function to retrieve the heroes from the service.
  // >>>Original
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  // Call getHeroes() inside lifecycle hook and let Angular call this at an appropriate time
  // after constructing a HeroesComponent instance.
  ngOnInit() {
    this.getHeroes();
  }

  // >>>Observable
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
