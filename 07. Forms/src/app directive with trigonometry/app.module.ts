import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TrigonometryDirective } from './trigonometry.directive';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TrigonometryDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
