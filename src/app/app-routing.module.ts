// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component Imports:-
import { FakestoreComponent } from './components/fakestore/fakestore.component';
import { FlaskRestApiComponent } from './components/flask-rest-api/flask-rest-api.component';
import { DjangoRestapiComponent } from './components/django-restapi/django-restapi.component';
import { JavaSpringBootComponent } from './components/java-spring-boot/java-spring-boot.component';
import { DotnetRestapiComponent } from './components/dotnet-restapi/dotnet-restapi.component';

// Configuring Routes:-
const routes: Routes = [
  {
    path: '',component:FakestoreComponent
  },
  {
    path: 'flask-rest-api',component:FlaskRestApiComponent
  },
  {
    path: 'django-restapi',component:DjangoRestapiComponent
  },
  {
    path: 'java-spring-boot',component:JavaSpringBootComponent
  },
  {
    path: 'dotnet-restapi',component:DotnetRestapiComponent
  }  
  
];

// NgModule Declaration:-
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// AppRoutingModule Class Definition:-
export class AppRoutingModule { }
