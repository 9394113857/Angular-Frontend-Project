// src/app/app.module.ts
// what thse file does:-
// This file defines the root module of the Angular application, importing necessary modules and declaring components used in the app.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Module Imports:-
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Additional Imports:-
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Component Imports:-
import { FakestoreComponent } from './components/fakestore/fakestore.component';
import { FlaskRestApiComponent } from './components/flask-rest-api/flask-rest-api.component';
import { DjangoRestapiComponent } from './components/django-restapi/django-restapi.component';
import { JavaSpringBootComponent } from './components/java-spring-boot/java-spring-boot.component';
import { DotnetRestapiComponent } from './components/dotnet-restapi/dotnet-restapi.component';

// NgModule Declaration:-
@NgModule({
  declarations: [
    AppComponent,
    FakestoreComponent,
    JavaSpringBootComponent,
    FlaskRestApiComponent,
    DotnetRestapiComponent,
    DjangoRestapiComponent
  ], 

  // Module Imports:-
  imports: [  
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule
  ],

  // Providers and Bootstrap:-
  providers: [],
  bootstrap: [AppComponent]
})

// AppModule Class Definition:-
export class AppModule { }
