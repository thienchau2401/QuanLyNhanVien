const regexEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexTK = /^\d{4,6}$/;
const regexName = /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\ ]+$/;
const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
const regexDate = /^\d{2}\/\d{2}\/\d{4}$/;
const regexNumber = /^\d+$/

function checkEmpty(nhanVien,arrIdInput){
    var valid = true;
    for (var i = 0; i < arrIdInput.length; i++) {
        var value = nhanVien[arrIdInput[i]];
        if(value == '') {
            valid = valid && false;
            document.getElementById(arrNotiInput[i]).style.display = 'block';
            if(i == 6){
                document.getElementById(arrNotiInput[i]).innerHTML = 'Vui lòng chọn chức vụ hợp lệ!';
                continue;
            }
            document.getElementById(arrNotiInput[i]).innerHTML = 'Vui lòng nhập dữ liệu!';           
        } else {
            valid = valid && true;
            document.getElementById(arrNotiInput[i]).innerHTML = '';
            document.getElementById(arrNotiInput[i]).style.display = 'none';
        }
    }
    return valid;
}
function checkEmail(nhanVien) {
    var valid = false;
    const regexEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (nhanVien['email'] != ''){
        if (!regexEmail.test(nhanVien['email'])){
            document.getElementById('tbEmail').innerHTML = 'Email không hợp lệ!';
            document.getElementById('tbEmail').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('tbEmail').innerHTML = '';
            document.getElementById('tbEmail').style.display = 'none';
            valid = true;
        }
    }
    return valid;
}
function checkTK(nhanVien) {
    var valid = false;
    if (nhanVien['tknv'] != ''){
        if (!nhanVien['tknv'].match(regexTK)){
            document.getElementById('tbTKNV').innerHTML = 'Tài khoản không hợp lệ! Tài khoản phải chứa 4-6 ký số';
            document.getElementById('tbTKNV').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('tbTKNV').innerHTML = '';
            document.getElementById('tbTKNV').style.display = 'none';
            valid = true;
        }
    }
    return valid;
}
function checkName(nhanVien) {
    var valid = false;
    if (nhanVien['name'] != ''){
        if (!nhanVien['name'].match(regexName)){
            document.getElementById('tbTen').innerHTML = 'Tên nhân viên không hợp lệ! Tên nhân viên phải là chữ';
            document.getElementById('tbTen').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('tbTen').innerHTML = '';
            document.getElementById('tbTen').style.display = 'none';
            valid = true;
        }
    }
    return valid;
}
function checkPass(nhanVien) {
    var valid = false;
    if (nhanVien['password'] != ''){
        if (!nhanVien['password'].match(regexPass)){
            document.getElementById('tbMatKhau').innerHTML = 'Mật Khẩu chứa 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)!';
            document.getElementById('tbMatKhau').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('tbMatKhau').innerHTML = '';
            document.getElementById('tbMatKhau').style.display = 'none';
            valid = true;
        }
    }
    return valid;
}
function checkDate(nhanVien) {
    var valid = false;
    if (nhanVien['datepicker'] != ''){
        if (!nhanVien['datepicker'].match(regexDate)){
            document.getElementById('tbNgay').innerHTML = 'Ngày làm phải theo định dạng mm/dd/yyyy';
            document.getElementById('tbNgay').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('tbNgay').innerHTML = '';
            document.getElementById('tbNgay').style.display = 'none';
            valid = true;
        }
    }
    return valid;
}

function checkLuongCB(nhanVien) {
    var valid = false;
    if(nhanVien['luongCB'] != ''){
        if (!nhanVien['luongCB'].match(regexNumber) || nhanVien['luongCB']*1 < 1000000 || nhanVien['luongCB']*1 > 20000000){
            document.getElementById('tbLuongCB').innerHTML = 'Lương cơ bản phải từ 1 000 000 đến 20 000 000';
            document.getElementById('tbLuongCB').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('tbLuongCB').innerHTML = '';
            document.getElementById('tbLuongCB').style.display = 'none';
            valid = true;
        }
    }
    return valid;
}
function checkSoGio(nhanVien) {
    var valid = false;
    if(nhanVien['gioLam'] != ''){
        if (!nhanVien['gioLam'].match(regexNumber) || nhanVien['gioLam']*1 < 80 || nhanVien['gioLam']*1 > 200){
            document.getElementById('tbGiolam').innerHTML = 'Số giờ làm trong tháng phải từ 80 - 200 giờ!';
            document.getElementById('tbGiolam').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('tbGiolam').innerHTML = '';
            document.getElementById('tbGiolam').style.display = 'none';
            valid = true;
        }
    }
    return valid;
}

function nhanVienValidation(nhanVien,arrIdInput) {
    var valid;
    var validEmpty = checkEmpty(nhanVien,arrIdInput);
    var validEmail = checkEmail(nhanVien);
    var validTK = checkTK(nhanVien);
    var validName = checkName(nhanVien);
    var validPass = checkPass(nhanVien);
    var validDate = checkDate(nhanVien);
    var validLuongCB = checkLuongCB(nhanVien);
    var validSoGio = checkSoGio(nhanVien);
    valid = validEmpty && validEmail && validTK && validName && validPass && validDate && validLuongCB && validSoGio;
    return valid;
}