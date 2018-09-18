import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  // items: Item = {
  //   id: 1,
  //   name: 'Lionel'
  // };

  items: Item [] = [];


  constructor() {
    this.items = [
      {
        id: 1,
        name: 'Lionel'
      },
      {
        id: 2,
        name: 'Miguel'
      },
      {
        id: 3,
        name: 'Tolosa'
      },
      {
        id: 4,
        name: 'Armas'
      }
    ];
  }

  addItem(item) {
    this.items.unshift(item);
  }

  ngOnInit() {
  }

}
