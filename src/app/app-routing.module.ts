import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { FormCarComponent } from './cars/form-car/form-car.component';
import { ListCarComponent } from './cars/list-car/list-car.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { RentalComponent } from './rental/rental.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'add-car', component: FormCarComponent },
      { path: 'list-car', component: ListCarComponent },
      { path: 'expenses', component: ExpensesComponent },
      { path: 'rental', component: RentalComponent },
    ],
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
