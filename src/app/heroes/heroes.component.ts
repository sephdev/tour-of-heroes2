import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

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
  heroes = HEROES;

  // method which assigns the clicked her from the template
  // to the component's selectedHero.
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit() {
  }

}
