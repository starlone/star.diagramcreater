export class Column {
  constructor (
    public type: string,
    public name: string
  ) {}

  getSQL() {
    return this.name + ' ' + this.type;
  };
}
