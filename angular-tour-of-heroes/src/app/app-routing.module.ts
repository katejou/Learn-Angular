import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';//加這行
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


const routes: Routes = [
   
    { path: 'detail/:id', component: HeroDetailComponent },//path 中的冒號（:）表示 :id 是一個佔位符
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //空的，也預設轉到dashborad
    { path: 'dashboard', component: DashboardComponent },
    { path: 'heroes', component: HeroesComponent } //加這行
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


