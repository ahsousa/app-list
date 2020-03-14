import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Input() categories;
  @Output() filterCategory: EventEmitter<any> = new EventEmitter();
  selectedIndex: any;

  constructor() { }

  selectCategory(event: any, i?: any) {
    this.selectedIndex = i;
    this.filterCategory.emit(event.target.text);
  }

}
