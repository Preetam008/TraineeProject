import { Component,OnInit  } from '@angular/core';
import {EmployeeService} from './employee.service';
import {EmployeeModel} from './EmployeeModel';
import { Observable} from 'rxjs';
import {FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //  title = 'AngularObservable';
  //  muraaiEmpls:EmployeeModel[];
  //  constructor(private employeeService:EmployeeService){}
  //  ngOnInit(){
  
  //    this.getEmployeeInfo();
  //  }
  //  getEmployeeInfo(){
  //  this.employeeService.getEmpDetailsFromDb().subscribe(employeeDetls => {
  //    debugger; 
  //   this.muraaiEmpls=employeeDetls
  //  })
  //  }
  // }
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
  dataSaved=false;
  empForm:FormGroup;
  allEmps:Observable<any>;
 
  constructor(private employeeService:EmployeeService,private formbuilder:FormBuilder){}
  ngOnInit(){
  
    this.empForm=this.formbuilder.group({
      empName:['',[Validators.required]],
      Dept:['',[Validators.required]]
    });
    this.getEmployeeInfo();
  }
  onFormSubmit(){
    this.dataSaved=false; 
    let emp=this.empForm.value; 
    this.createEmp(emp);
    this.empForm.reset();
  }
  createEmp(emp:EmployeeModel){
this.employeeService.createEmployee(emp).subscribe(
 emp=>{
  this.dataSaved=true; 
   this.getEmployeeInfo();
}
   

)
  }
  getEmployeeInfo(){
    this.allEmps=this.employeeService.getEmpDetailsFromDb()
   };
}