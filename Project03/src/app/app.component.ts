import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 private number:number=1234;
 name:string ="preetam";
 isVisible:boolean=true
 visiblity(){
   this.isVisible =false;
 }
 user={
   name:"jitu"
 }
 upDateValue(){
   this.user .name="kumar"
 }

  get counter(){
     return this.number;
  }
  set counter(value){

    this.number=value;
  }
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
  }

