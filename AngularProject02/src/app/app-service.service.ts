import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor() { }

  messageAlert(){
    alert("thanks for subscribing")
  }
}
