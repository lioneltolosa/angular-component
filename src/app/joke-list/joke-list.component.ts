
import {Component, OnInit} from '@angular/core';

class joke {
    public setup: string;
    public punchline: string;
    public hide: boolean;

    constructor (setup: string, punchline: string) {
        this.setup = setup;
        this.punchline = punchline;
        this.hide = true;
    }

    toggle() {
        this.hide = !this.hide;
    }
}

@Component({
  selector: 'app-joke-list',
  template: `
  <div class="card card-block"
      *ngFor="let joke of jokes">
      <h4 class="card-title">{{joke.setup}}</h4>
      <p class="card-text" [hidden]="joke.hide">{{joke.punchline}}</p>
      <a class="btn btn-primary" 
         (click)="joke.toggle()">Tell Me</a>
  </div>
`,
})


export class JokeListComponent implements OnInit {
  jokes: joke[];
  
  constructor() {
    this.jokes = [
            new joke("Hola1", "Lio1"),
            new joke("Hola2", "Lio2"),
            new joke("Hola3", "Lio3"),
        ];
    }   
    
    toggle(joke) {
        joke.hide = !joke.hide;
    }

  ngOnInit() {
  }

}
