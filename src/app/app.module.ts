import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FakestoreComponent } from './components/fakestore/fakestore.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JavaSpringBootComponent } from './components/java-spring-boot/java-spring-boot.component';
import { FlaskRestApiComponent } from './components/flask-rest-api/flask-rest-api.component';
import { DotnetRestapiComponent } from './components/dotnet-restapi/dotnet-restapi.component';

@NgModule({
  declarations: [
    AppComponent,
    FakestoreComponent,
    JavaSpringBootComponent,
    FlaskRestApiComponent,
    DotnetRestapiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
