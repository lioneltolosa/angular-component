import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-joke',
  template: `
  <h1>What did the cheese say when it looked in the mirror?</h1>
  <p>Halloumi (Hello Me)</p>
`,
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@NgModule({
    imports: [BrowserModule],
    declarations: [JokeComponent],
    bootstrap: [JokeComponent]
})

export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);
