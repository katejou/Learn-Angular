import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here (step 4 Two-way binding)

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent //<-- 這個是用CLI指令產生heroes時，自動加進來的！
  ],
  imports: [
    BrowserModule,
    FormsModule,  // <-- (step 4 Two-way binding)
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
