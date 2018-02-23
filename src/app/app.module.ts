import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PreHeaderComponent } from './pre-header/pre-header.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { TabsResponsiveComponent } from './tabs-responsive/tabs-responsive.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    PreHeaderComponent,
    HeaderComponent,
    ContentComponent,
    TabsResponsiveComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
