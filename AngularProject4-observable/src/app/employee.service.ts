import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {EmployeeModel} from './employeeModel'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
empUrl="/api/employeeDetls";
  constructor(private httpclient:HttpClient) { }
  createEmployee(emp:EmployeeModel):Observable<EmployeeModel>{
    let httpHeader=new HttpHeaders()
    .set('Content-Type','application/Json');
    let option={
      headers:httpHeader
    };
    return this.httpclient.post<EmployeeModel>(this.empUrl,emp,option);
  }
   getEmpDetailsFromDb():Observable<EmployeeModel[]>{

    return this.httpclient.get<EmployeeModel[]>(this.empUrl); 
     }

    
  }


