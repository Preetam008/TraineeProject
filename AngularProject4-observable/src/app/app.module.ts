import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api'
import {TestData}from './test';
import {EmployeeService} from './employee.service'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(TestData)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
