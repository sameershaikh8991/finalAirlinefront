import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddflightComponent } from './addflight/addflight.component';
import { HttpClientModule } from '@angular/common/http';
import { AllflightComponent } from './allflight/allflight.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';
import { SearchflightComponent } from './searchflight/searchflight.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormGroup, FormControl,Validator, Validators } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AddflightComponent,
    AllflightComponent,
    UpdateflightComponent,
    SearchflightComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  
    
    
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
