import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  name!: string;
  age!: number;
  email!: string;
  address!: Address;
  hobbies!: string[];



  constructor() { }

  ngOnInit(): void {

    this.name = 'Katlego Moima';
    this.age = 26;
    this.email = 'moimakatlego@outlook.com';
    this.address = {
      street: '38 8th street',
      city: 'Johannesburg Braamfontein',
      country: 'South Africa'
    }

    this.hobbies = ['write code', 'watch Series', 'Bake', 'Spend time with family']
  }

}

interface Address {

  street: string,
  city: string,
  country: string
}
