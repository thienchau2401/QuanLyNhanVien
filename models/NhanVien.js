function NhanVien() {
    this.tknv = '';
    this.name = '';
    this.email = '';
    this.password = '';
    this.datepicker = '';
    this.luongCB = 0;
    this.chucvu = '';
    this.gioLam = 0;
    this.tinhTongLuong = function() {
        switch(this.chucvu) {
            case 'Sếp' :
                return this.luongCB*3;
            case 'Trưởng phòng' :
                return this.luongCB*2;
            default :
                return this.luongCB*1;
        };
    };
    this.xepLoai = function() {
        if (this.gioLam < 160) {
            return 'Trung bình';
        };
        if (this.gioLam < 176) {
            return 'Khá';
        };
        if (this.gioLam < 192) {
            return 'Giỏi';
        };
        if (this.gioLam >= 192) {
            return 'Xuất sắc';
        };
    }
}