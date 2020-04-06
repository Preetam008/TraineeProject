import { Component } from '@angular/core';
import {User} from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForm01';
 topicError=true;
  topics=['angular','java' ,'oracle'];
  userModel =new User("pk","pk@gmail.com",9999999,'')

   validateTopic(value){
     if(value==='default' ){

      this.topicError= true
     }
    else{
      this.topicError=false;
     }
    
   }
   onSubmit(){
     console.log(this.userModel);
   }
}
