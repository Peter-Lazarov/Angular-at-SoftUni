import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule)}
];

@NgModule({
  //imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})], //this will load all modules at start
  //imports: [RouterModule.forRoot(routes, {enableTracing: true})], //show routing path for debuging
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
