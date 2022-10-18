import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component'; // <-- NgModel lives here (step 4 Two-way binding)

// Step 15 http service
import { HttpClientModule } from '@angular/common/http'; 
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  declarations: [
    HeroSearchComponent,
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    //這些是用CLI指令產生heroes時，自動加進來的！但注意說…先後的次序有差別！    
  ],
  imports: [
    HttpClientModule,// step 15
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    
    BrowserModule,
    FormsModule,  // <-- (step 4 Two-way binding)
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
  
export class AppModule { }



