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

  onClick() {
    this.name = 'Mitta Moima';

    this.hobbies.push('new hobby');

  }

  addHobby(hobby: string) {

    console.log(hobby);

    this.hobbies.unshift(hobby);
    return false;
    

  }

  deleteHobby(hobby: string) {
 
    for(let i = 0; i<this.hobbies.length; i++) {

      if(this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }

    }
    
  }

}

interface Address {

  street: string,
  city: string,
  country: string
}
