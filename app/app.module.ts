import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RecordsComponent } from './components/records/records.component';
import { RegisterPatientComponent } from './components/register-patient/register-patient.component';
import {HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, Router } from '@angular/router';

const router: Routes = [
  { path: '', component: LoginComponent },
  { path: 'RegisterPatient', component: RegisterPatientComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Records', component: RecordsComponent },
  { path: 'Login', component: LoginComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RecordsComponent,
    RegisterPatientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
