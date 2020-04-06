import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {EmployeeModel} from './employeeModel'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
empUrl="/api/employeeDetls";
  constructor(private httpclient:HttpClient) { }
    
   getEmpDetailsFromDb():Observable<EmployeeModel[]>{

    return this.httpclient.get<EmployeeModel[]>(this.empUrl); 
     }

    
   }

