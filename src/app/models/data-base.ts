export class DataBase {
  tables = [];
  selected = null;

  getSQL() {
    let txt = '';
    for (const i = 0; i < this.tables.length; i++) {
      const t = this.tables[i];
      txt += '\n' + t.getSQL();
    }
    return txt;
  }
}
