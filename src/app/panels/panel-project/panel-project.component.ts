import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'panel-project',
  templateUrl: './panel-project.component.html',
  styleUrls: ['./panel-project.component.css']
})
export class PanelProjectComponent implements OnInit {
  @Input() db;

  constructor() {
  }

  ngOnInit() {
  }

  select(table) {
    this.db.selected = table;
  }
}
