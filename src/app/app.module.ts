import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PreHeaderComponent } from './pre-header/pre-header.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { TabsResponsiveComponent } from './tabs-responsive/tabs-responsive.component';
import { SearchComponent } from './search/search.component';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { SliderComponent } from './slider/slider.component';
import { CheckboxComponent } from './checkbox/checkbox.component';


@NgModule({
  declarations: [
    AppComponent,
    PreHeaderComponent,
    HeaderComponent,
    ContentComponent,
    TabsResponsiveComponent,
    SearchComponent,
    JokeComponent,
    JokeListComponent,
    SliderComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
