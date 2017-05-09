export class DataBase {
  tables = [];
  selected = null;

  getSQL() {
    let txt = '';
    for (let i = 0; i < this.tables.length; i++) {
      var t = this.tables[i];
      txt += '\n' + t.getSQL();
    }
    return txt;
  }
}
