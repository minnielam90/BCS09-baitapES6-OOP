// helper.js
//! Render for each obj
let renderUserObj = (value) => {
  if (value == "all") {
    let content = "";
    document.getElementById("renderPerson").innerHTML = content;
  }
  if (value == "student") {
    let content = "";
    content += `
      <div class="row inputStudent">
        <div class="col-4 pe-1">
          <div class="text-center py-2">Điểm toán</div>
          <div class="input-group">
            <input id="toan" type="text" class="form-control" onchange="check('toan')" />
          </div>
        </div>
        <div class="col-4 px-1">
          <div class="text-center py-2">Điểm lý</div>
          <div class="input-group">
            <input id="ly" type="text" class="form-control" onchange="check('ly')"/>
          </div>
        </div>
        <div class="col-4 ps-1">
          <div class="text-center py-2">Điểm hóa</div>
          <div class="input-group mb-3">
            <input id="hoa" type="text" class="form-control" onchange="check('hoa')"/>
          </div>
        </div>
      </div>
    </div>`;
    document.getElementById("renderPerson").innerHTML = content;
  }
  if (value == "employee") {
    let content = `
      <div class="row inputEmployee">
        <div class="col-6 pe-1">
          <div class="py-2">Số ngày làm việc:</div>
          <div class="input-group mb-3">
            <input id="soNgayLamViec" type="text" class="form-control" onchange="check('soNgayLamViec')"/>
          </div>
        </div>
        <div class="col-6 ps-1">
          <div class="py-2">Lương một ngày:</div>
          <div class="input-group mb-3">
            <input id="luongMotNgay" type="text" class="form-control" onchange="check('luongMotNgay')"/>
          </div>
        </div>
      </div>
    </div>`;
    document.getElementById("renderPerson").innerHTML = content;
  }
  if (value == "customer") {
    let content = `
      <div class="row inputCustomer">
        <div class="col-8 pe-1">
          <div class="py-2">Tên công ty:</div>
          <div class="input-group">
            <input id="tenCTY" type="text" class="form-control" onchange="check('tenCTY')"/>
          </div>
        </div>
        <div class="col-4 px-1">
          <div class="py-2">Trị giá hóa đơn:</div>
          <div class="input-group">
            <input id="triGiaHoaDon" type="text" class="form-control" onchange="check('triGiaHoaDon')"/>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label class="py-2" for="moTa">Đánh giá</label>
        <textarea class="form-control" id="danhGia" onchange="check('danhGia')"></textarea>
      </div>
    `;
    document.getElementById("renderPerson").innerHTML = content;
  }
};

export default renderUserObj;

document.getElementById("type").onchange = function () {
  let valueSelect = document.getElementById("type").value;
  // renderUserObj(document.getElementById("type").value);
  if (valueSelect == "") {
    document.getElementById("errObj").style.display = "block";
    document.getElementById("type").classList.add("is-invalid");
    return;
  } else {
    document.getElementById("errObj").style.display = "none";
    document.getElementById("type").classList.remove("is-invalid");
    renderUserObj(valueSelect);
  }
};
