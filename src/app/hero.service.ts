import { Injectable } from '@angular/core';
// Observable RxJS library
import { Observable, of } from 'rxjs'; 

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
// Import MessageService
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // Replace this method
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // ^with this one
  // getHeroes(): Observable<Hero[]> {
  //   return of(HEROES);
  // }

  // Modify the getHeroes method to send a message when the heroes are fetched.
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}
