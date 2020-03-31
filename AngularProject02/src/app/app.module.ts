import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { TelVsonComponent } from './products/tel-vson/tel-vson.component';
import { SoundSystemComponent } from './products/sound-system/sound-system.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { LaptopComponent } from './products/laptop/laptop.component';

const appRoutes:Routes=[
{path:'Home',    component:HomeComponent},
{path:'Contact', component:ContactComponent},
{path:'About',   component:AboutComponent},
{path:'Product',  children:[
  {path:'',component:TelVsonComponent},
  {path:'TV',component:TelVsonComponent},
  {path:'SS',component:SoundSystemComponent},
  {path:'MOB',component:MobileComponent},
  {path:'LAP',component:LaptopComponent}
]}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
