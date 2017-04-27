import { Component } from '@angular/core';
import { Table } from './models/table';
import { DataBase } from './models/data-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  db = new DataBase();

  table = new Table('');
  clicked = false;

  newObject() {
    this.db.tables.push(this.table);
    this.db.selected = this.table;
    this.table = new Table('');
    const pos = this.table.position;
    pos.x = 170 * this.db.tables.length;
  }

  click(clicked, table) {
    this.clicked = clicked;
    if (table) {
      this.db.selected = table;
    }
  }

  move(eve) {
    if (this.clicked) {
      const pos = this.db.selected.position;
      pos.x += eve.movementX;
      pos.y += eve.movementY;
    }
  }
}
