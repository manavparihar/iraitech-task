import { Component } from '@angular/core';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.scss'],
})
export class Question1Component {
  arrayElemets = [2, 3, 10, 15, 26, 35, 50, 63];
  userInput: any;
  result: any;

  findValueInArray(userInput: any) {
    if (userInput !== '') {
      const foundIndex = this.arrayElemets.indexOf(Number(userInput));
      if (foundIndex !== -1) {
        this.result = `Found : ${this.arrayElemets[foundIndex]}`;
      } else {
        this.result = `Number not found : ${userInput}`;
      }
    } else {
      this.result = `Please enter a name.`;
    }

    return false;
  }
}
