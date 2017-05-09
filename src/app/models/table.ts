import { Column } from './column';

export class Table {
  position = {x: 0, y: 0};
  columns:Column[] = [];
  constructor (
    public name: string
  ) {}

  getSQL() {
    var txt = 'CREATE TABLE ';
    txt += this.name;
    txt += '\n{\n    ';
    var lista = [];
    for(var i in this.columns){
      var c = this.columns[i];
      lista.push(c.getSQL());
    }
    txt += lista.join(',\n    ');
    txt += '\n};\n';
    return txt;
  };
}
