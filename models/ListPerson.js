import Student from "./Student.js";
import Employee from "./Employee.js";
import Customer from "./Customer.js";
import renderUserObj from "../controllers/helper.js";
import { removeVietnameseTones } from "../controllers/util.js";

export default class ListPerson {
  constructor(student, employee, customer) {
    this.arrListPerson = [];
    this.student = student;
    this.employee = employee;
    this.customer = customer;
  }

  addUser(user) {
    this.arrListPerson.push(user);
  }

  renderUser(arr) {
    let contentStudent = arr.map((item, index) => {
      let student = new Student();
      Object.assign(student, item);
      let { type, hoTen, diaChi, ma, email, toan, ly, hoa, dTB } = student;
      if (type == "student") {
        return `
                <tr class="text-center">
                  <td style="vertical-align: middle">${ma}</td>
                  <td style="vertical-align: middle">${hoTen}</td>
                  <td style="vertical-align: middle">${diaChi}</td>
                  <td style="vertical-align: middle">${email}</td>
                  <td style="vertical-align: middle">Student</td> 
                  <td>
                      <table style="margin-left: 10px">
                        <tr>
                          <td style="text-align: start">Điểm toán</td>
                          <td>:</td>
                          <td style="text-align: center; padding-left: 10px">${toan}</td>
                        </tr>
                        <tr>
                          <td style="text-align: start">Điểm lý</td>
                          <td>:</td>
                          <td style="text-align: center; padding-left: 10px">${ly}</td>
                        </tr>
                        <tr>
                          <td style="text-align: start">Điểm hóa</td>
                          <td>:</td>
                          <td style="text-align: center; padding-left: 10px">${hoa}</td>
                        </tr>
                        <tr>
                          <td style="text-align: start">Điểm TB</td>
                          <td>:</td>
                          <td style="text-align: center; padding-left: 10px"> ${dTB()}</td>
                        </tr>
                      </table>
                  </td>
                  <td style="vertical-align: middle; text-align: center">
                    <button class="btn btn-danger" onclick="deleteUser('${ma}')">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    <button class="btn btn-warning" onclick="getInfoUser('${ma}')">
                      <i class="fa-solid fa-pen"></i>
                    </button>
                  </td>
                </tr>`;
      }
    });
    document.getElementById("renderListStudent").innerHTML =
      contentStudent.join("");

    let contentEmployee = arr.map((item, index) => {
      let employee = new Employee();
      Object.assign(employee, item);
      let {
        type,
        hoTen,
        diaChi,
        ma,
        email,
        soNgayLamViec,
        luongMotNgay,
        salary,
      } = employee;
      if (type == "employee") {
        return `
                <tr class="text-center">
                  <td style="vertical-align: middle">${ma}</td>
                  <td style="vertical-align: middle">${hoTen}</td>
                  <td style="vertical-align: middle">${diaChi}</td>
                  <td style="vertical-align: middle">${email}</td>
                  <td style="vertical-align: middle">Employee</td>
                  <td>
                      <table style="margin-left: 10px">
                        <tr style="text-align: start">
                          <td>Số ngày làm việc</td>
                          <td>:</td>
                          <td style="padding-left: 10px">${soNgayLamViec}</td>
                        </tr>
                        <tr style="text-align: start">
                          <td> Lương một ngày</td>
                          <td>:</td>
                          <td style="padding-left: 10px">${luongMotNgay}</td>
                        </tr>
                        <tr style="text-align: start">
                          <td>Tổng lương</td>
                          <td>:</td>
                          <td style="padding-left: 10px">${salary()}</td>
                        </tr>
                      </table>
                  </td>
                  <td style="vertical-align: middle; text-align: center">
                      <button class="btn btn-danger" onclick="deleteUser('${ma}')">
                        <i class="fa-solid fa-trash"></i>
                      </button>
                      <button class="btn btn-warning" onclick="getInfoUser('${ma}')">
                        <i class="fa-solid fa-pen"></i>
                      </button>
                  </td>
                </tr>`;
      }
    });
    document.getElementById("renderListEmployee").innerHTML =
      contentEmployee.join("");

    let contentCustomer = arr.map((item, index) => {
      let customer = new Customer();
      Object.assign(customer, item);
      let { type, hoTen, diaChi, ma, email, tenCTY, triGiaHoaDon, danhGia } =
        customer;
      if (type == "customer") {
        return `
                  <tr class="text-center">
                    <td style="vertical-align: middle">${ma}</td>
                    <td style="vertical-align: middle">${hoTen}</td>
                    <td style="vertical-align: middle">${diaChi}</td>
                    <td style="vertical-align: middle">${email}</td>
                    <td style="vertical-align: middle">Customer</td>
                    <td>
                      <table style="margin-left: 10px">
                        <tr style="text-align: start">
                          <td>Tên công ty</td>
                          <td>:</td>
                          <td style="padding-left: 10px">${tenCTY}</td>
                        </tr>
                        <tr style="text-align: start">
                          <td>Trị giá hóa đơn</td>
                          <td>:</td>
                          <td style="padding-left: 10px">${triGiaHoaDon}</td>
                        </tr>
                        <tr style="text-align: start">
                          <td>Đánh giá</td>
                          <td>:</td>
                          <td style="padding-left: 10px">${danhGia}</td>
                        </tr>
                      </table>
                    </td>
                    <td style="vertical-align: middle; text-align: center">
                        <button class="btn btn-danger" onclick="deleteUser('${ma}')">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                        <button class="btn btn-warning" onclick="getInfoUser('${ma}')">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                    </td>
                  </tr>`;
      }
    });
    document.getElementById("renderListCustomer").innerHTML =
      contentCustomer.join("");
  }

  setLocalStorage(arr) {
    localStorage.setItem("arListPerson", JSON.stringify(arr));
  }

  getLocalStorage() {
    let getListPerson = JSON.parse(localStorage.getItem("arListPerson"));
    if (getListPerson) {
      this.arrListPerson = [...getListPerson];
      this.renderUser(this.arrListPerson);
    }
  }

  // xóa người dùng
  deleteUser(maInput) {
    let indexUser = this.arrListPerson.findIndex((user) => user.ma == maInput);
    this.arrListPerson.splice(indexUser, 1);
    this.renderUser(this.arrListPerson);
    this.setLocalStorage(this.arrListPerson);
  }

  // lấy thông tin người dùng
  getInfoUser(maUser) {
    document.getElementById("ma").readOnly = true;

    let user = this.arrListPerson.find((user) => user.ma == maUser);
    let arrEditUser = document.querySelectorAll(
      ".modal-body input, .modal-body textarea"
    );

    let { type } = user;

    if (type) {
      document.getElementById("addUser").click();
      document.getElementById("btnAddUser").style.display = "none";
      document.getElementById("btnEdit").style.display = "block";
      if (type == "student") {
        renderUserObj("student");
        let arrStudent = document.querySelectorAll(
          ".inputStudent input, .modal-body .form-select"
        );
        let arr = [...arrStudent, ...arrEditUser];

        for (const item of arr) {
          let { id } = item;
          item.value = user[id];
        }
      }
      if (type == "employee") {
        renderUserObj("employee");
        let arrEmployee = document.querySelectorAll(
          ".inputEmployee input, .modal-body .form-select"
        );
        let arr = [...arrEmployee, ...arrEditUser];

        for (const item of arr) {
          let { id } = item;
          item.value = user[id];
        }
      }
      if (type == "customer") {
        renderUserObj("customer");
        let arrCustomer = document.querySelectorAll(
          ".inputCustomer input, .modal-body textarea"
        );
        let arr = [...arrCustomer, ...arrEditUser];

        for (const item of arr) {
          let { id } = item;
          item.value = user[id];
        }
      }
    }
  }

  // chỉnh sửa thông tin người dùng
  editInfoUser(arrInfoUser) {
    let indexUser = this.arrListPerson.findIndex(
      (user) => user.ma == arrInfoUser.ma
    );
    if (indexUser != -1) {
      this.arrListPerson[indexUser] = arrInfoUser;
      this.renderUser(this.arrListPerson);
      this.setLocalStorage(this.arrListPerson);
    }
  }

  // tìm kiếm
  findUser(nameUser) {
    let newNameUser = removeVietnameseTones(nameUser);

    let arrUser = this.arrListPerson.filter((item) => {
      let nameUser = removeVietnameseTones(item.hoTen);

      return nameUser
        .toLowerCase()
        .trim()
        .includes(newNameUser.toLowerCase().trim());
    });
    this.renderUser(arrUser);
  }
}
