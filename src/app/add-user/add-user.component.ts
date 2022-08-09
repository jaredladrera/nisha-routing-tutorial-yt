import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CanComponentLeave } from './../guard/can-deactivate.guard';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit, CanComponentLeave {

  username: FormControl = new FormControl();
  constructor() { }

  canLeave(): boolean {
    if(this.username.dirty) {
      return window.confirm('You have some unsave changes. Leave?');
    }

    return true;
  }

  ngOnInit(): void {
  }

}
