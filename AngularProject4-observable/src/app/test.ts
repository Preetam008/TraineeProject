import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';


export class TestData implements InMemoryDbService{
    //for get request
// createDb(){
//     let empDetails=[
// {empId:100,empName:'Raj',dept:'IT'},
// {empId:100,empName:'Rahul',dept:'Finance'},
// {empId:100,empName:'Rabi',dept:'HR'},
// {empId:100,empName:'Rakesh',dept:'Security'},
    
//     ];
//     return {employeeDetls:empDetails};
// }


//for post request
createDb(){
    let empDetails=[
{empId:100,empName:'Raj',dept:'IT'}

    
    ];
    return {employeeDetls:empDetails};
}
    
}
