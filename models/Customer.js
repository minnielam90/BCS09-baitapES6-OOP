import Person from "./Person.js";
export default class Employee extends Person {
  constructor() {
    super();
    this.tenCty = "";
    this.triGiaHoaDon = "";
    this.danhGia = "";
  }
}
