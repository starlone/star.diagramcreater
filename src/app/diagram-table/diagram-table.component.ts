import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-diagram-table',
  templateUrl: './diagram-table.component.html',
  styleUrls: ['./diagram-table.component.css']
})
export class DiagramTableComponent implements OnInit {
  @Input() table;
  @Input() selected: boolean;

  constructor() { }

  ngOnInit() {
  }

}
