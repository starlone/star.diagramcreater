import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'diagram-table',
  templateUrl: './diagram-table.component.html',
  styleUrls: ['./diagram-table.component.css']
})
export class DiagramTableComponent implements OnInit {
  @Input() table;

  constructor() { }

  ngOnInit() {
  }

}
