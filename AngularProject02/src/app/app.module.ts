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
import { CommonComponentComponent } from './common-component/common-component.component';
import { ParentComponent } from './parent/parent.component';
import { Cart1Component } from './cart1/cart1.component';

import { AppServiceService } from './app-service.service';


const appRoutes:Routes=[
{path:'buy',     component:ParentComponent},
{path:'Home',    component:HomeComponent},
{path:'Contact', component:ContactComponent},
{path:'About',   component:AboutComponent},

{path:'Product', children:[
  {path:'',component:ProductsComponent},
  {path:'LAP',component:LaptopComponent},
  {path:'MOB',component:MobileComponent},
  {path:'TV',component:TelVsonComponent},
  {path:'SS',component:SoundSystemComponent}
]}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ProductsComponent,
    CommonComponentComponent,
    ParentComponent,
    Cart1Component,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
