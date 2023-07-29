import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.scss']
})
export class Question3Component {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({
      phone: this.fb.array([]),
    });

  }

  get contact(): FormArray {
    return this.contactForm.get("phone") as FormArray
  }

  newContact(): FormGroup {
    return this.fb.group({
      mobile: '',
    })
  }

  addContact() {
    this.contact.push(this.newContact());
  }

  removeContact(i: number) {
    this.contact.removeAt(i);
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

}

