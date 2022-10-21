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

const routes: Routes = [
  { path: '', redirectTo: '/step1', pathMatch: 'full' }, //一開始空的，預設轉到step1
  { path: 'step1', component: Step1Component },
  { path: 'step2', component: Step2Component },
  { path: 'step3', component: Step3Component },
  { path: 'step4', component: Step4Component },
  { path: 'step5', component: Step5Component },
  { path: 'step6', component: Step6Component },
  { path: 'step7', component: Step7Component },
  { path: 'detail/:id', component: HeroDetailComponent },//path 中的冒號（:）表示 :id 是一個佔位符
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent } //加這行
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


