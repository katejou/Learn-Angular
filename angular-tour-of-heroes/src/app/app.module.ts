import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component'; // <-- NgModel lives here (step 4 Two-way binding)

// Step 14 http service
import { HttpClientModule } from '@angular/common/http'; 
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';

// Step 15
import { HeroSearchComponent } from './hero-search/hero-search.component';

import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { Step5Component } from './step5/step5.component';
import { Step6Component } from './step6/step6.component';
import { Step7Component } from './step7/step7.component';
import { Step8Component } from './step8/step8.component';
import { LittleDetailComponent } from './little-detail/little-detail.component';
import { Step9Component } from './step9/step9.component';
import { Step10Component } from './step10/step10.component';
import { Step11Component } from './step11/step11.component';
import { Step12Component } from './step12/step12.component';
import { Step13Component } from './step13/step13.component';
import { SmallDetailComponent } from './small-detail/small-detail.component';
import { Step14Component } from './step14/step14.component';
import { LargeDetailComponent } from './large-detail/large-detail.component';


@NgModule({
  declarations: [
    HeroSearchComponent,
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    Step6Component,
    Step7Component,
    Step8Component,
    Step9Component,
    Step10Component,
    LittleDetailComponent,
    Step11Component,
    Step12Component,
    Step13Component,
    SmallDetailComponent,
    Step14Component,
    LargeDetailComponent
    //這些是用CLI指令產生Component時，自動加進來的！但注意說…先後的次序有差別！    
  ],
  imports: [

    // step 14
    HttpClientModule,
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



