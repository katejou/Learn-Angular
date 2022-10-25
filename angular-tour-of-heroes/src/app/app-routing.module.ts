import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';//加這行
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { Step5Component } from './step5/step5.component';
import { Step6Component } from './step6/step6.component';
import { Step7Component } from './step7/step7.component';
import { Step8Component } from './step8/step8.component';
import { Step9Component } from './step9/step9.component';
import { Step10Component } from './step10/step10.component';
import { Step11Component } from './step11/step11.component';
import { Step12Component } from './step12/step12.component';
import { Step13Component } from './step13/step13.component';
import { Step14Component } from './step14/step14.component';
import { SmallDetailComponent } from './small-detail/small-detail.component';
import { LargeDetailComponent } from './large-detail/large-detail.component';
import { HeroFormComponent } from './hero-form/hero-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/step1', pathMatch: 'full' }, //一開始空的，預設轉到step1
  { path: 'step1', component: Step1Component },
  { path: 'step2', component: Step2Component },
  { path: 'step3', component: Step3Component },
  { path: 'step4', component: Step4Component },
  { path: 'step5', component: Step5Component },
  { path: 'step6', component: Step6Component },
  { path: 'step7', component: Step7Component },
  { path: 'step8', component: Step8Component },
  { path: 'step9', component: Step9Component },
  { path: 'step10', component: Step10Component },
  { path: 'step11', component: Step11Component },
  { path: 'step12', component: Step12Component },
  { path: 'step13', component: Step13Component },
  { path: 'step14', component: Step14Component },
  { path: 'small-detail/:id', component: SmallDetailComponent },
  { path: 'large-detail/:id', component: LargeDetailComponent },
  { path: 'detail/:id', component: HeroDetailComponent },//path 中的冒號（:）表示 :id 是一個佔位符
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroform', component: HeroFormComponent }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


