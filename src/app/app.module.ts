import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { FormCarComponent } from './cars/form-car/form-car.component';
import { ListCarComponent } from './cars/list-car/list-car.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { RentalComponent } from './rental/rental.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    TopbarComponent,
    FooterComponent,
    LoginComponent,
    FormCarComponent,
    ListCarComponent,
    ExpensesComponent,
    RentalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
