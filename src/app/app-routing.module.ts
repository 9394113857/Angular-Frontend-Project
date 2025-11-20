import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FakestoreComponent } from './components/fakestore/fakestore.component';
import { JavaSpringBootComponent } from './components/java-spring-boot/java-spring-boot.component';

const routes: Routes = [
  {
    path: '',component:FakestoreComponent
  },
  {
    path: 'java-spring-boot',component:JavaSpringBootComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
