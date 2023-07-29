import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss']
})
export class Component3Component {
  @Input() data: any;
}
