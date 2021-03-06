import { Column } from './column';

export class Table {
  position = {x: 0, y: 0};
  columns: Column[] = [];
  constructor (
    public name: string
  ) {}

  getSQL() {
    let txt = 'CREATE TABLE ';
    txt += this.name;
    txt += '\n{\n    ';
    const lista = [];
    for (let i = 0; i < this.columns.length; i++) {
      const c = this.columns[i];
      lista.push(c.getSQL());
    }
    txt += lista.join(',\n    ');
    txt += '\n};\n';
    return txt;
  };
}
