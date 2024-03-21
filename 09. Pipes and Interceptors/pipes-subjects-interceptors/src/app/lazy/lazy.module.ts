import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnDemandComponent } from './on-demand/on-demand.component';
import { LazyRoutingModule } from './lazy-routing.module';



@NgModule({
  declarations: [
    OnDemandComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
