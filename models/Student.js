import Person from "./Person.js";
export default class Student extends Person {
  constructor() {
    super();
    this.toan = 0;
    this.ly = 0;
    this.hoa = 0;
  }
  dTB = () => {
    return (this.toan + this.ly + this.hoa) / 3;
  };
}
