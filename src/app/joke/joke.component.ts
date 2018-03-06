import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'app-joke',
    template: `
  <h1>{{ setup}}</h1>
  <p> {{ punchline }}</p>
`,
    styleUrls: ['./joke.component.scss']
})

export class JokeComponent implements OnInit {
    setup: string;
    punchline: string;
    
    constructor() {
        this.setup = "What did the cheese say when it looked in the mirror?"
        this.punchline = "Halloumi (Hello Me)"
    }

    ngOnInit() {

    }

}

let joke = new JokeComponent();
console.log(joke.setup);
console.log(joke.punchline);

@NgModule({
    imports: [BrowserModule],
    declarations: [JokeComponent],
    bootstrap: [JokeComponent]
})

export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);
