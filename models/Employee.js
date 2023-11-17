import Person from "./Person.js";
export default class Employee extends Person {
  constructor() {
    super();
    this.soNgayLamViec = "";
    this.luongMotNgay = "";
  }
  salary = () => {
    return Number(this.soNgayLamViec) * Number(this.luongMotNgay);
  };
}
