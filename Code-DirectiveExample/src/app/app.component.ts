import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Mynum } from './mynum';
import { MessageService } from './message.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { DirectionEnum } from './direction-enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directiveapp';
  // personData = [
  //   { name: "ak", MobileNo: "12345676879" },
  //   { name: "bk", MobileNo: "233432" },
  //   { name: "ck", MobileNo: "97868767" },
  //   { name: "dk", MobileNo: "7787878" },
  //   { name: "ek", MobileNo: "95656" }
  // ];

  // person : string = "Deepak";

  // Addmore() {
  //   this.personData = [
  //     { name: "ak", MobileNo: "12345676879" },
  //     { name: "bk", MobileNo: "233432" },
  //     { name: "ck1", MobileNo: "97868767" },
  //     { name: "dk", MobileNo: "7787878" },
  //     { name: "ek", MobileNo: "95656" },
  //     { name: "ek", MobileNo: "898212" }
  //   ];
  // }

  // fntrackBy(index: number, people: any) {
  //   return people.name;
  // }


  // myThenBlock: TemplateRef<any> = null;
  // myElseBlock: TemplateRef<any> = null;

  // @ViewChild('firstThenBlock', { static: true })
  // firstThenBlock: TemplateRef<any> = null;

  // @ViewChild('secondThenBlock', { static: true })
  // secondThenBlock: TemplateRef<any> = null;


  // @ViewChild('firstElseBlock', { static: true })
  // firstElseBlock: TemplateRef<any> = null;

  // @ViewChild('secondElseBlock', { static: true })
  // secondElseBlock: TemplateRef<any> = null;

  // ngOnInit() {
  //   this.myThenBlock = this.firstThenBlock;
  //   this.myElseBlock = this.firstElseBlock;
  // }

  // changeThenBlock() {
  //   this.myThenBlock = this.myThenBlock == this.firstThenBlock ? this.secondThenBlock : this.firstThenBlock;
  // }

  // changeElseBlock() {
  //   this.myElseBlock = this.myElseBlock == this.firstElseBlock ? this.secondElseBlock : this.firstElseBlock;
  // }
  // message: Promise<string>;
  // persons: Promise<any>;


  // personData = [
  //     { name: "Ajeet", MobileNo: "12345676879" },
  //     { name: "Chandan", MobileNo: "233432" },
  //     { name: "deepak", MobileNo: "97868767" },
  //     { name: "Ajay", MobileNo: "7787878" },
  //     { name: "Ram", MobileNo: "95656" }
  //   ];

  // constructor(private messageService: MessageService) {

  // }

  // ngOnInit()
  // {
  //   this.getmsg();
  //   this.getPersons();
  // }
  // getmsg() {
  //   this.message = this.messageService.getMessage();
  // }

  // getPersons()
  // {
  //   this.persons = this.messageService.getAllPerson();
  // }


  // dirEnum = DirectionEnum;

  //ids = [1,2,3,4,5,6,7,8,9,10];

  companyType: string = "software";
  companyTypeId: number = 1;

  myCountry = "India";
  myClass: string = 'three four';

  myClassArr = ['three', 'four'];

  personData = [
    { name: "Ajeet", country: "India" },
    { name: "Chandan", country: "Pakistan" },
    { name: "deepak", country: "china" },
    { name: "Ajay", country: "USA" },
    { name: "Ram", country: "India" }
  ];


  getColor(countryName: string) {
    // if (countryName == "India") {
    //   return 'green';
    // } else if (countryName == "Pakistan") {
    //   return 'red';
    // }
    // else if (countryName == "china") {
    //   return 'blue';
    // }
    // else if (countryName == "USA") {
    //   return 'orange';
    // }

    switch (countryName) {
      case 'India':
        return 'green';
      case 'Pakistan':
        return 'red';
      case 'china':
        return 'blue';
      case 'USA':
        return 'orange';
    }
  }

}
