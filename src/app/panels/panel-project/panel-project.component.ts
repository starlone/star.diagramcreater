import { Component, OnInit, Input } from '@angular/core';
import { Table } from '../../models/table';

@Component({
  selector: 'panel-project',
  templateUrl: './panel-project.component.html',
  styleUrls: ['./panel-project.component.css']
})
export class PanelProjectComponent implements OnInit {
  @Input() tables;

  constructor() {
  }

  ngOnInit() {
  }

  newObject() {
    var table = new Table('Teste');
    this.tables.push(table);
  }
}
