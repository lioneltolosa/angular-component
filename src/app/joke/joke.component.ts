import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Joke} from '../joke';

@Component({
    selector: 'app-joke',
    templateUrl: './joke.component.html',
    styleUrls: ['./joke.component.scss']
})

export class JokeComponent implements OnInit {

    @Input('joke') data: Joke;
    @Output() jokeDeleted = new EventEmitter<Joke>();
  
    deleteItem() {
      this.jokeDeleted.emit(this.data);
    }

    constructor() {
    }

    ngOnInit() {

    }
}