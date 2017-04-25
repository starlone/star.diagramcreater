import { Component, OnInit } from '@angular/core';
import { Entity } from '../../models/entity';

@Component({
  selector: 'panel-project',
  templateUrl: './panel-project.component.html',
  styleUrls: ['./panel-project.component.css']
})
export class PanelProjectComponent implements OnInit {
  entitys = [];

  constructor() {
  }

  ngOnInit() {
  }

  newObject() {
    var entity = new Entity('Teste');
    this.entitys.push(entity);
  }
}
