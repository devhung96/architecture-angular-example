import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserDto } from '../../models/UserDto';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.css'],
})
export class FormBaseComponent implements OnInit {
  /**
   * Khai bao data
   */
  submited: boolean = false;
  model: UserDto = new UserDto(0, 'asdf', '', false);
  @Output() public onCancelPush = new EventEmitter<string>();


  constructor() {
    console.log('load lai component')
  }

  ngOnInit(): void {

  }

  /**
   * Su kien
   */
  onSubmitForm(form: NgForm) {
    console.log('invalid-address:', form.controls.address);
    this.submited = true;
  }

  onReset(form: NgForm) {
    form.reset();
    this.submited = false;
  }

  onCancel(){
    console.log('tat form');
    this.onCancelPush.emit("Tat cai form gium tao di");
  }
}
