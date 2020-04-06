import { Component,OnInit  } from '@angular/core';
import {EmployeeService} from './employee.service';
import {EmployeeModel} from './EmployeeModel';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   title = 'AngularObservable';
   muraaiEmpls:EmployeeModel[];
   constructor(private employeeService:EmployeeService){}
   ngOnInit(){
  
     this.getEmployeeInfo();
   }
   getEmployeeInfo(){
   this.employeeService.getEmpDetailsFromDb().subscribe(employeeDetls => {
     debugger; 
    this.muraaiEmpls=employeeDetls
   })
   }
  }
   //using  async pipe

  // title = 'AngularObservable';
  // muraaiEmpls:Observable <EmployeeModel[]>;
  // constructor(private employeeService:EmployeeService){}
  // ngOnInit(){
  
  //   this.getEmployeeInfo();
  // }
  // getEmployeeInfo(){
  //   this.muraaiEmpls=this.employeeService.getEmpDetailsFromDb(); 
  //   };
  // }

