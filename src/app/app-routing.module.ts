import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TodosComponent } from './pages/todos/todos.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { CanActivateLogin } from './shared/guards/login.guard';
import { UnsavedChangesGuard } from './shared/guards/unsaved-changes.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'todos',
    component: TodosComponent,
    canActivate: [CanActivateLogin],
    canDeactivate: [UnsavedChangesGuard],
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [CanActivateLogin],
    canDeactivate: [UnsavedChangesGuard],
  },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
