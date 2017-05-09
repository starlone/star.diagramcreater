import { Column } from './column';

export class Table {
  position = {x: 0, y: 0};
  columns:Column[] = [];
  constructor (
    public name: string
  ) {}
}
