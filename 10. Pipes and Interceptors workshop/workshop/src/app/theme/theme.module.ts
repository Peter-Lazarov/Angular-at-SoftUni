import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeCurrentComponent } from './theme-current/theme-current.component';
import { ThemeAddComponent } from './theme-add/theme-add.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { RouterModule } from '@angular/router';
import { ThemeOveralViewComponent } from './theme-overal-view/theme-overal-view.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { SharedModule } from '../shared/shared.module';
import { PostListComponent } from './post-list/post-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ThemeOveralViewComponent,
    ThemeListComponent,
    ThemeAddComponent,
    ThemeCurrentComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ThemeModule { }
