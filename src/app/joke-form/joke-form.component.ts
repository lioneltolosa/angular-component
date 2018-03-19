import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.scss']
})
export class JokeFormComponent implements OnInit {
  // @Output() jokeCreate = new EventEmitter<joke>();

  constructor() { }

  ngOnInit() {
  }

  // createJoke() {
  //   this.jokeCreate.emit(new Joke ("A setup", "A puchline"));
  // }

}
