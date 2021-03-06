import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { PreHeaderComponent } from './pre-header/pre-header.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { TabsResponsiveComponent } from './tabs-responsive/tabs-responsive.component';
import { SearchComponent } from './search/search.component';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { SliderComponent } from './slider/slider.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { NgbootstrapComponent } from './ngbootstrap/ngbootstrap.component';
import { CheckboxsPersonalizadosComponent } from './checkboxs-personalizados/checkboxs-personalizados.component';
import { FormsComponent } from './forms/forms.component';
import { InputsDinamicsSizeMixinsSassComponent } from './inputs-dinamics-size-mixins-sass/inputs-dinamics-size-mixins-sass.component';
import { AddItemComponent } from './add-item/add-item.component';


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
    JokeFormComponent,
    NgbootstrapComponent,
    CheckboxsPersonalizadosComponent,
    FormsComponent,
    InputsDinamicsSizeMixinsSassComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
