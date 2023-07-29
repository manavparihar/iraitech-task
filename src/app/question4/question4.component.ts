import { Component } from '@angular/core';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.scss']
})
export class Question4Component {
  sharingValue: any;
  submit(event: any) {
    this.sharingValue = event.target.value;
  }
}
