import { Component, OnInit ,Input,OnChanges,SimpleChange,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {
// @Input()
// myNewNumber:number
private myNumber:number;
@Input() myNumber2: String;
  constructor() { }
  @Input()
  set myNewNumber(number:number){
    this.myNumber=number;
  }
  get myNewNumber(){
    return this.myNumber; 
  }

  ngOnChanges(changes:SimpleChanges){
    const newNumberChange:SimpleChange = changes.myNewNumber;
   
    console.log("previous value-->",newNumberChange.previousValue);
     console.log("current value-->",newNumberChange.currentValue);
     console.log("this is ngOnItChange method") 
   this.myNewNumber=newNumberChange.currentValue
  }

  ngOnInit(): void {
     console.log("ngOnitValue-->",this.myNewNumber);
     
     
  }
  ngDoCheck(){
     console.log(this.myNumber )
  }
  ngAfterContentInit(){
    console.log(" this is ingAfterContentInit");  
  }
  ngAfterContentChecked(){
    console.log("this is executed after gAfterContentInit");
  }
  ngAfterViewInit(){
    console.log("this is executed after ngAfterContentChecked ") ;
  }
  ngAfterViewChecked(){
    console.log("this is executed after ngAfterViewInit ") ;  
  }
ngOnDestroy(){
  console.log("this is executed at last ") ;  
}

}
