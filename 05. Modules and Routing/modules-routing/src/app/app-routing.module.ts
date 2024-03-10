import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserGuard } from './user/user-details/user-detail.guard';

const routes: Routes = [
  { path: 'todo', component: TodoListComponent },
  { path: 'users', component: UserListComponent },
  { 
    path: 'user/:id/details', component: UserDetailsComponent,
    canActivate: [UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
