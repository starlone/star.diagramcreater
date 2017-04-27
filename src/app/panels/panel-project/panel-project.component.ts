import { Component, OnInit, Input } from '@angular/core';
import { DataBase } from '../../models/data-base';

@Component({
  selector: 'app-panel-project',
  templateUrl: './panel-project.component.html',
  styleUrls: ['./panel-project.component.css']
})
export class PanelProjectComponent implements OnInit {
  @Input() db: DataBase;

  constructor() {
  }

  ngOnInit() {
  }

  select(table) {
    this.db.selected = table;
  }
}
