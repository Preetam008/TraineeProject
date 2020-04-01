import { Component, OnInit } from '@angular/core';
import{AppServiceService} from 'src/app/app-service.service'

@Component({
  selector: 'app-cart1',
  templateUrl: './cart1.component.html',
  styleUrls: ['./cart1.component.css']
})
export class Cart1Component implements OnInit {

  constructor(private _msg:AppServiceService) { }

  ngOnInit(): void {
  }

  //  code for use service
  // onClick(){
  //   const msg=new AppServiceService();
  //   msg.messageAlert();
  // }
//using dependency injection
  onClick(){
       
      this._msg.messageAlert();
   }

}

