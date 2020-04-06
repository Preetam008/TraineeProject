import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getMessage(): Promise<string> {
    let mesage = "Hello Sahosoft";
    return new Promise(resolve => {
      //Delay 3 se3cond
      setTimeout(() => resolve(mesage), 3000);
    });
  }

  // getMessage(): Promise<string> {
  //   let mesage = "Hello Sahosoft";
  //   return new Promise(resolve => { resolve(mesage)});
  // }

    personData = [
    { name: "Ajeet", MobileNo: "12345676879" },
    { name: "Chandan", MobileNo: "233432" },
    { name: "deepak", MobileNo: "97868767" },
    { name: "Ajay", MobileNo: "7787878" },
    { name: "Ram", MobileNo: "95656" }
  ];

  getAllPerson(): Promise<any>
  {
    return new Promise (resolve => resolve(this.personData));
  }

}
