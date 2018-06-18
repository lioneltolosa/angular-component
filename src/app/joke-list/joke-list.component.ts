import {Component, OnInit} from '@angular/core';
import {Joke} from '../joke';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})


export class JokeListComponent implements OnInit {

  jokes: Joke[];
  constructor() {
    this.jokes = [
        new Joke('Es hora de que investiges por tu cuenta', 'lio1'),
        new Joke('Este es el curso de angular, Vamos a subirle unos gradillos al aire', 'lio1'),
        new Joke('Esta harcodeado, Esta harcodeado, Esta Harcodeado', 'lio1'),
        ];
    }

    addJoke(joke) {
        this.jokes.unshift(joke);
    }

    deleteJoke(joke) {
      const indexToDelete = this.jokes.indexOf(joke);
      if (indexToDelete !== -1) {
        this.jokes.splice(indexToDelete, 1);
      }
    }

  ngOnInit() {
  }

}
