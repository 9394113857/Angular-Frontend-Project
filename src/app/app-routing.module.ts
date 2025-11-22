import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FakestoreComponent } from './components/fakestore/fakestore.component';
import { JavaSpringBootComponent } from './components/java-spring-boot/java-spring-boot.component';
import { FlaskRestApiComponent } from './components/flask-rest-api/flask-rest-api.component';
import { DotnetRestapiComponent } from './components/dotnet-restapi/dotnet-restapi.component';
import { DjangoRestapiComponent } from './components/django-restapi/django-restapi.component';

const routes: Routes = [
  {
    path: '',component:FakestoreComponent
  },
  {
    path: 'java-spring-boot',component:JavaSpringBootComponent
  },
  {
    path: 'flask-rest-api',component:FlaskRestApiComponent
  },
  {
    path: 'django-restapi',component:DjangoRestapiComponent
  },
  {
    path: 'dotnet-restapi',component:DotnetRestapiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
