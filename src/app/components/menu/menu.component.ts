import { Component, OnInit } from '@angular/core';

/**
 * @title Basic use of the tab nav bar
 */
@Component({
  selector: 'menu',
  templateUrl: 'menu.component.html',
  //styleUrls: ['menu.component.css'],
  template: '<p>Hi</p>',
})
export class MenuComponent implements OnInit {
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background = '';

  constructor() { }

  toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }

  ngOnInit() {}
}
