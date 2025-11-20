import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FakestoreComponent } from './components/fakestore/fakestore.component';
import { JavaSpringBootComponent } from './components/java-spring-boot/java-spring-boot.component';
import { FlaskRestApiComponent } from './components/flask-rest-api/flask-rest-api.component';

const routes: Routes = [
  {
    path: '',component:FakestoreComponent
  },
  {
    path: 'java-spring-boot',component:JavaSpringBootComponent
  },
  {
    path: 'flask-rest-api',component:FlaskRestApiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
