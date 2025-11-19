import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FakestoreComponent } from './components/fakestore/fakestore.component';

const routes: Routes = [
  {
    path: '',component:FakestoreComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
