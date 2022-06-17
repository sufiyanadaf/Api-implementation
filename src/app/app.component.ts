
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApisharedService } from './apishared/apishared.service';
// import {filter, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: any;
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  myForm: any = FormGroup;
  myArray: any = [];

  constructor(private api: ApisharedService) { }

  ngOnInit() {
    this.recieveMessage()
    this.myForm = new FormGroup({
      first_name: new FormControl("", [Validators.required, Validators.minLength(6)]),
      last_name: new FormControl("", [Validators.required, Validators.minLength(5)]),
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      gender: new FormControl("", [Validators.required])

    })


  }

  get first_name() {
    return this.myForm.get('first_name')
  }

  get last_name() {
    return this.myForm.get('last_name')
  }

  get username() {
    return this.myForm.get('username')
  }

  get password() {
    return this.myForm.get('password')
  }
  get gender() {
    return this.myForm.get('gender')
  }
  recieveMessage() {
    this.api.users().subscribe((Res: any) => {
      console.log(Res)
      this.myArray = Res
    })
  }


  submit() {
    if (this.myForm.status == "VALID") {
      for (var i = 0; i < this.myArray.length; i++) {
        if (this.myForm.value.username == this.myArray[i].username) {
          window.alert('Username is existed')
        } else {
          this.api.getContacts(this.myForm.value).subscribe((Res: any) => {
            console.log(Res)
          })

        }
      }

    } else {
      window.alert("INVALID FORM")
    }
  }
}













