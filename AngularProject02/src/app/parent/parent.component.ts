import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  Selected:boolean=false;
  selectedProduct:string;
  onSelect( slp){
    this.Selected=true;
    this.selectedProduct=slp;
  }
}
