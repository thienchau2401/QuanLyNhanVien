var arrNhanVien = [];
var arrIdInput = ['tknv','name','email','password','datepicker','luongCB','chucvu','gioLam'];
var arrNotiInput = ['tbTKNV','tbTen','tbEmail','tbMatKhau','tbNgay','tbLuongCB','tbChucVu','tbGiolam'];
function themNhanVien() {
    event.preventDefault();
    var nhanVien = new NhanVien();
    for (var i = 0; i < arrIdInput.length; i++) {
        var value = document.getElementById(arrIdInput[i]).value;
        nhanVien[arrIdInput[i]] = value;
    }
    //push
    if (nhanVienValidation(nhanVien,arrIdInput)) {
        arrNhanVien.push(nhanVien);
        luuDuLieu();
        renderGiaodien();     
    }
    
}
function renderGiaodien(newArr) {
    if (!newArr) {
        newArr = arrNhanVien;
    }
    var content = "";
    for (var i = 0; i < newArr.length; i++) {
        var newNhanVien =new NhanVien();
        Object.assign(newNhanVien,newArr[i]);
        //var nhanVien = arrNhanVien[i];
        content += `
    <tr>
        <td>${newNhanVien.tknv}</td>
        <td>${newNhanVien.name}</td>
        <td>${newNhanVien.email}</td>
        <td>${newNhanVien.datepicker}</td>
        <td>${newNhanVien.chucvu}</td>
        <td>${newNhanVien.tinhTongLuong()}</td>
        <td>${newNhanVien.xepLoai()}</td> 
        <td>
            <button class = "btn btn-danger" onclick="xoaNhanVien('${
              newNhanVien.tknv
            }')">Xóa</button>
            <button class = "btn btn-warning" data-toggle="modal"
            data-target="#myModal" onclick="layThongTinNhanVien('${
                newNhanVien.tknv
              }')">Sửa</button>
        </td>     
    </tr>`;
    }
    document.getElementById("tableDanhSach").innerHTML = content;
    document.getElementById("formNhanVien").reset();
}
function luuDuLieu() {
    localStorage.setItem('mangNV', JSON.stringify(arrNhanVien));
}
function loadDuLieu() {
    var arr = localStorage.getItem('mangNV');
    if (arr != null) {
        var newArr = JSON.parse(arr);
        arrNhanVien = newArr;
        renderGiaodien();
    }
}
loadDuLieu();
function xoaNhanVien(tknv) {
    var index = -1;
    for(var i =  0;i < arrNhanVien.length; i++) {
        if (arrNhanVien[i].tknv == tknv){
            index = i;
        }
    } 
    arrNhanVien.splice(index,1);
    document.getElementById('searchName').value='';
    luuDuLieu();
    renderGiaodien();
}
function layThongTinNhanVien(tknv) {
    var nhanVien = {};
    for(var i =  0;i < arrNhanVien.length; i++) {
        if (arrNhanVien[i].tknv == tknv){
            nhanVien = arrNhanVien[i];
        }
    }
    for (var j = 0; j < arrIdInput.length; j++) {
        document.getElementById(arrIdInput[j]).value = nhanVien[arrIdInput[j]];
    }
    document.getElementById(arrIdInput[0]).readOnly = true;
    document.getElementById('btnCapNhat').style.display = 'inline-block';
    document.getElementById('btnThemNV').style.display = 'none';
}

function capNhatNhanVien() {
    var nhanVien = new NhanVien();
    for (var j = 0; j < arrIdInput.length; j++) {
        var value = document.getElementById(arrIdInput[j]).value;
        nhanVien[arrIdInput[j]] = value;
    }
    if(nhanVienValidation(nhanVien,arrIdInput)) {
        for(var i =  0;i < arrNhanVien.length; i++) {
            if (arrNhanVien[i].tknv == nhanVien.tknv){
                arrNhanVien[i] = nhanVien;
            }
        }
        document.getElementById(arrIdInput[0]).readOnly = false;
        luuDuLieu();
        renderGiaodien();
        document.getElementById('btnCapNhat').style.display = 'none';
        document.getElementById('btnThemNV').style.display = 'inline-block ';
        $('#myModal').modal('hide');
        document.getElementById('searchName').value='';
        window.alert('Cập nhập thông tin nhân viên thành công!');
    }
    
}
function dongThe(){
    document.getElementById("formNhanVien").reset();
    document.getElementById(arrIdInput[0]).readOnly = false;
    document.getElementById('btnCapNhat').style.display = 'none';
    document.getElementById('btnThemNV').style.display = 'inline-block ';
    for(var i = 0; i < arrNotiInput.length; i++) {
        document.getElementById(arrNotiInput[i]).style.display = 'none';
    }
}

function searchName(){
    var newArrNhanVien = [];
    var txtSearch = event.target.value.toLowerCase().trim();
    txtSearch = removeVietnameseTones(txtSearch);
    console.log(txtSearch);
    for (var i = 0; i < arrNhanVien.length; i++) {
        var newNhanVien =new NhanVien();
        Object.assign(newNhanVien,arrNhanVien[i]);
        var xepLoaiNhanVien = newNhanVien.xepLoai().toLowerCase().trim();
        xepLoaiNhanVien = removeVietnameseTones(xepLoaiNhanVien);
         if(xepLoaiNhanVien.includes(txtSearch)) {
             newArrNhanVien.push(arrNhanVien[i]);
            }
    }
    renderGiaodien(newArrNhanVien);
}