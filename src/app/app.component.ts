import { Component } from '@angular/core';
import { Table } from './models/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  db = {
    tables: [],
    selected: null
  };

  table = new Table('');

  newObject() {
    this.db.tables.push(this.table);
    this.db.selected = this.table;
    this.table = new Table('');
  }
}
