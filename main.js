/*
Bài tập 1:
Mô hình 3 khối : 
+ Đầu vào : người dùng nhập vào số ngày, số tháng, số năm của hiện tại 
+ Xử lí : 
* xử lí tính ngày hôm qua :
    - Số tháng có 31 ngày là tháng 1,3,5,7,8,10.12 nên soNgay >=2 && soNgay <= 31 thì soNgay = soNgay -1 
        Nếu soNgay = 1 thì => soNgay =31 và soThang = soThang -1
         Số tháng có 30 ngày là tháng 4,6,9,11 nên soNgay >=2 && soNgay <= 30 thì soNgay = soNgay -1 
         Số tháng có 28 ngày là tháng 2 nên soNgay >=2 && soNgay <= 28 thì soNgay = soNgay -1 
     đặc biệt : số tháng bằng 1 số ngày 1 => số ngày = 30 và số tháng =12 số năm -1
* xử lí tính ngày mai :
    - Số tháng có 31 ngày là tháng 1,3,5,7,8,10.12 nên soNgay >=1 && soNgay < 31 thì soNgay = soNgay +1 
        số ngày bằng 31 thì => songay =1 và tháng +1 
         Số tháng có 30 ngày là tháng 4,6,9,11 nên soNgay >=1 && soNgay <= 30 thì soNgay = soNgay +1 
         số ngày bằng 30 thì => songay =1 và tháng +1 
         Số tháng có 28 ngày là tháng 2 nên soNgay >=1 && soNgay <= 28 thì soNgay = soNgay +1 
         số ngày bằng 28 thì => songay =1 và tháng +1 
        đặc biệt : số tháng bằng 12 số ngày 30 => số ngày =1 và số tháng =1 số năm +1

+ Đầu ra : Xuất ra màn hình ngày hôm qua hoặc ngày hôm nay tùy theo ý của người dùng

*/
// Ngày hôm qua
document.getElementById('btnHomQua').onclick = function () {
    var pNgay = Number(document.getElementById('ngay').value);
    var pThang = Number(document.getElementById('thang').value);
    var pNam = Number(document.getElementById('nam').value);
    var ketQua_b1 = '';
    // Tháng 1
    if (pThang == 1 && pNgay <= 31 && pNgay >= 2 && pNam > 0) {
        pNgay = pNgay - 1;
        ketQua_b1 = 'Ngày hôm qua là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    else if (pThang == 1 && pNgay == 1 && pNam > 0) {
        pNgay = 31;
        pThang = 12;
        pNam = pNam - 1;
        ketQua_b1 = 'Ngày hôm qua là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    // Tháng 2
    else if (pThang == 2 && pNgay <= 28 && pNgay >= 2 && pNam > 0) {
        pNgay = pNgay - 1;
        ketQua_b1 = 'Ngày hôm qua là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    else if (pThang == 2 && pNgay == 1 && pNam > 0) {
        pNgay = 31;
        pThang = 1;
        ketQua_b1 = 'Ngày hôm qua là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    // Tháng 3
    else if (pThang == 3 && pNgay <= 31 && pNgay >= 2 && pNam > 0) {
        pNgay = pNgay - 1;
        ketQua_b1 = 'Ngày hôm qua là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    else if (pThang == 3 && pNgay == 1 && pNam > 0) {
        pNgay = 28;
        pThang = 2;
        ketQua_b1 = 'Ngày hôm qua là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    // Tháng 4
    else if (pThang == 4 && pNgay <= 30 && pNgay >= 2 && pNam > 0) {
        pNgay = pNgay - 1;
        ketQua_b1 = 'Ngày hôm qua là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    else if (pThang == 4 && pNgay == 1 && pNam > 0) {
        pNgay = 31;
        pThang = 3;
        ketQua_b1 = 'Ngày hôm qua là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    // Tháng 5
    else if (pThang == 5 && pNgay <= 31 && pNgay >= 2 && pNam > 0) {
        pNgay = pNgay - 1;
        ketQua_b1 = 'Ngày hôm qua là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    else if (pThang == 5 && pNgay == 1 && pNam > 0) {
        pNgay = 30;
        pThang = 4;
        ketQua_b1 = 'Ngày hôm qua là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    // Tháng 6
    else if (pThang == 6 && pNgay <= 30 && pNgay >= 2 && pNam > 0) {
        pNgay = pNgay - 1;
        ketQua_b1 = 'Ngày hôm qua là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    else if (pThang == 6 && pNgay == 1 && pNam > 0) {
        pNgay = 31;
        pThang = 5;
        ketQua_b1 = 'Ngày hôm qua là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    // Tháng 7
    else if (pThang == 7 && pNgay <= 31 && pNgay >= 2 && pNam > 0) {
        pNgay = pNgay - 1;
        ketQua_b1 = 'Ngày hôm qua là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    else if (pThang == 7 && pNgay == 1 && pNam > 0) {
        pNgay = 30;
        pThang = 6;
        ketQua_b1 = 'Ngày hôm qua là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    // Tháng 8
    else if (pThang == 8 && pNgay <= 31 && pNgay >= 2 && pNam > 0) {
        pNgay = pNgay - 1;
        ketQua_b1 = 'Ngày hôm qua là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    else if (pThang == 8 && pNgay == 1 && pNam > 0) {
        pNgay = 31;
        pThang = 7;
        ketQua_b1 = 'Ngày hôm qua là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    // Tháng 9
    else if (pThang == 9 && pNgay <= 30 && pNgay >= 2 && pNam > 0) {
        pNgay = pNgay - 1;
        ketQua_b1 = 'Ngày hôm qua là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    else if (pThang == 9 && pNgay == 1 && pNam > 0) {
        pNgay = 31;
        pThang = 8;
        ketQua_b1 = 'Ngày hôm qua là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    // Tháng 10
    else if (pThang == 10 && pNgay <= 31 && pNgay >= 2 && pNam > 0) {
        pNgay = pNgay - 1;
        ketQua_b1 = 'Ngày hôm qua là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    else if (pThang == 10 && pNgay == 1 && pNam > 0) {
        pNgay = 30;
        pThang = 9;
        ketQua_b1 = 'Ngày hôm qua là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    // Tháng 11
    else if (pThang == 11 && pNgay <= 30 && pNgay >= 2 && pNam > 0) {
        pNgay = pNgay - 1;
        ketQua_b1 = 'Ngày hôm qua là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    else if (pThang == 11 && pNgay == 1 && pNam > 0) {
        pNgay = 31;
        pThang = 10;
        ketQua_b1 = 'Ngày hôm qua là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    // Tháng 12
    else if (pThang == 12 && pNgay <= 31 && pNgay >= 2 && pNam > 0) {
        pNgay = pNgay - 1;
        ketQua_b1 = 'Ngày hôm qua là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    else if (pThang == 12 && pNgay == 1 && pNam > 0) {
        pNgay = 30;
        pThang = 11;
        ketQua_b1 = 'Ngày hôm qua là: ' + pNgay + '/' + pThang + '/' + pNam;
    }

    // Không có kết quả
    else {
        ketQua_b1 = 'Ngày/tháng/ năm của bạn nhập không hợp lệ';
    }

    document.getElementById('ketQua_b1').innerHTML = ketQua_b1;
}
//Ngày mai
document.getElementById('btnNgayMai').onclick = function () {
    var pNgay = Number(document.getElementById('ngay').value);
    var pThang = Number(document.getElementById('thang').value);
    var pNam = Number(document.getElementById('nam').value);
    var ketQua_b1 = '';
    // Tháng 1
    if (pThang == 1 && pNgay < 31 && pNgay >= 1 && pNam > 0) {
        pNgay = pNgay + 1;
        ketQua_b1 = 'Ngày mai là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    else if (pThang == 1 && pNgay == 31 && pNam > 0) {
        pNgay = 1;
        pThang = 2;
        ketQua_b1 = 'Ngày mai là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    // Tháng 2
    else if (pThang == 2 && pNgay < 28 && pNgay >= 1 && pNam > 0) {
        pNgay = pNgay + 1;
        ketQua_b1 = 'Ngày mai là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    else if (pThang == 2 && pNgay == 28 && pNam > 0) {
        pNgay = 1;
        pThang = 3;
        ketQua_b1 = 'Ngày mai là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    // Tháng 3
    else if (pThang == 3 && pNgay < 31 && pNgay >= 1 && pNam > 0) {
        pNgay = pNgay + 1;
        ketQua_b1 = 'Ngày mai là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    else if (pThang == 3 && pNgay == 31 && pNam > 0) {
        pNgay = 1;
        pThang = 4;
        ketQua_b1 = 'Ngày mai là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    // Tháng 4
    else if (pThang == 4 && pNgay < 30 && pNgay >= 1 && pNam > 0) {
        pNgay = pNgay + 1;
        ketQua_b1 = 'Ngày mai là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    else if (pThang == 4 && pNgay == 30 && pNam > 0) {
        pNgay = 1;
        pThang = 5;
        ketQua_b1 = 'Ngày mai là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    // Tháng 5
    else if (pThang == 5 && pNgay < 31 && pNgay >= 1 && pNam > 0) {
        pNgay = pNgay + 1;
        ketQua_b1 = 'Ngày mai là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    else if (pThang == 5 && pNgay == 31 && pNam > 0) {
        pNgay = 1;
        pThang = 6;
        ketQua_b1 = 'Ngày mai là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    // Tháng 6
    else if (pThang == 6 && pNgay < 30 && pNgay >= 1 && pNam > 0) {
        pNgay = pNgay + 1;
        ketQua_b1 = 'Ngày mai là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    else if (pThang == 6 && pNgay == 30 && pNam > 0) {
        pNgay = 1;
        pThang = 7;
        ketQua_b1 = 'Ngày mai là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    // Tháng 7
    else if (pThang == 7 && pNgay < 31 && pNgay >= 1 && pNam > 0) {
        pNgay = pNgay + 1;
        ketQua_b1 = 'Ngày mai là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    else if (pThang == 7 && pNgay == 31 && pNam > 0) {
        pNgay = 1;
        pThang = 8;
        ketQua_b1 = 'Ngày mai là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    // Tháng 8
    else if (pThang == 8 && pNgay < 31 && pNgay >= 1 && pNam > 0) {
        pNgay = pNgay + 1;
        ketQua_b1 = 'Ngày mai là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    else if (pThang == 8 && pNgay == 31 && pNam > 0) {
        pNgay = 1;
        pThang = 9;
        ketQua_b1 = 'Ngày mai là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    // Tháng 9
    else if (pThang == 9 && pNgay < 30 && pNgay >= 1 && pNam > 0) {
        pNgay = pNgay + 1;
        ketQua_b1 = 'Ngày mai là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    else if (pThang == 9 && pNgay == 30 && pNam > 0) {
        pNgay = 1;
        pThang = 10;
        ketQua_b1 = 'Ngày mai là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    // Tháng 10
    else if (pThang == 10 && pNgay < 31 && pNgay >= 1 && pNam > 0) {
        pNgay = pNgay + 1;
        ketQua_b1 = 'Ngày mai là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    else if (pThang == 10 && pNgay == 31 && pNam > 0) {
        pNgay = 1;
        pThang = 11;
        ketQua_b1 = 'Ngày mai là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    // Tháng 11
    else if (pThang == 11 && pNgay < 30 && pNgay >= 1 && pNam > 0) {
        pNgay = pNgay + 1;
        ketQua_b1 = 'Ngày mai là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    else if (pThang == 11 && pNgay == 30 && pNam > 0) {
        pNgay = 1;
        pThang = 12;
        ketQua_b1 = 'Ngày mai là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    // Tháng 12
    else if (pThang == 12 && pNgay < 31 && pNgay >= 1 && pNam > 0) {
        pNgay = pNgay + 1;
        ketQua_b1 = 'Ngày mai là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    else if (pThang == 12 && pNgay == 31 && pNam > 0) {
        pNgay = 1;
        pThang = 1;
        pNam = pNam + 1;
        ketQua_b1 = 'Ngày mai là: ' + pNgay + '/' + pThang + '/' + pNam;
    }
    // Không có kết quả
    else {
        ketQua_b1 = 'Ngày/tháng/ năm của bạn nhập không hợp lệ';
    }
    document.getElementById('ketQua_b1').innerHTML = ketQua_b1;
}
//  BÀI TẬP 2
/*
Mô hình 3 khôi :
đầu vào : Nhập vào số tháng và số năm
xử lí : 
+ Nếu tháng đó rơi vào tháng 1,3,5,7,8,10,12 thì xuất ra số ngày là 31
+ Nêu tháng đó rơi vào tháng 4,6,9,11 thì xuất ra số ngày trong tháng đó là 30
+ Nếu tháng đó là tháng 2 :
- TH1 : nếu năm đó % 4 = 0 và năm đó % 100 !== 0 thì tháng 2 năm đó có 29 ngày
- TH2 : trường hợp còn lại in ra tháng 2 năm đó có 28 ngày
*/
document.getElementById('btnTinhNgay').onclick = function () {
    var thang = Number(document.getElementById('nhapThang').value);
    var nam = Number(document.getElementById('nhapNam').value);
    var ketqua = 0;
    if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
        ketqua = 30 + ' ngày';
    } else if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 10 || thang == 12) {
        ketqua = 31+ ' ngày';

    } else if (thang == 2 && nam % 4 === 0 && nam % 100 !== 0 || nam % 400 === 0) {
        ketqua = 29+ ' ngày';
    } else {
        ketqua = 28+ ' ngày';
    }
    if ( thang>12) {
        ketqua = 'Nhập sai tháng';
    }
    if (thang<1) {
        ketqua = 'Nhập sai tháng';
    }
    // document.getElementById('ketQua_b2').innerHTML = 'Số ngày của tháng ' + thang + ' là : ' + ketqua + ' ngày.';
    document.getElementById('ketQua_b2').innerHTML = ketqua;

}
// Bài 3
/*
Sơ đồ 3 khối :
Đầu vào : nhập vào 1 số nguyên có 3 chữ số 
Xử lí : ví dụ số nhập vào là so 
Bước 1 : tiến hành tách số so thành 3 số hàng trăm, chục, đơn vị bằng cách : 
* tram = Math.floor(so/100)
* chuc = Math.floor(so %100 /10)
* donvi = Math.floor(so %100 %10)  
Bước 2 : sử dụng switch case để tiến hành đọc lần lượt các số hàng trăm, hàng chục và đơn vị
- Trường hợp đặc biệt khi người dùng nhập vào số có hàng chục = 0 và đơn vị = 0  tiến hành xuất ra màn hình chỉ đọc số hàng trăm
- Trường hợp số hàng chục = 0 gán chục bằng "lẻ"
- Trường hợp số hàng đơn vị  = 0 gán dơn vị bằng "" (bỏ qua đơn vị)
- Trường hợp người dùng nhập sai số N >999 || N<99 thì xuất ra màn hình người dùng nhập sai số  
Đầu ra : xuất ra màn hình cách đọc của số vừa nhập vào 
*/
document.getElementById('btnDocSo').onclick = function () {
    var so = Number(document.getElementById('so').value)
    var hangTram = Math.floor(so / 100);
    var hangChuc = Math.floor(so % 100 / 10);
    var hangDonVi = Math.floor(so % 10);
    var tram = '';
    var chuc = '';
    var donVi = '';
    if (hangTram == 1) {
        tram = 'Một trăm '
    } else if (hangTram == 2) {
        tram = 'Hai trăm '
    } else if (hangTram == 3) {
        tram = 'Ba trăm '
    } else if (hangTram == 4) {
        tram = 'Bốn trăm '
    } else if (hangTram == 5) {
        tram = 'Năm trăm '
    } else if (hangTram == 6) {
        tram = 'Sáu trăm '
    } else if (hangTram == 7) {
        tram = 'Bảy trăm '
    } else if (hangTram == 8) {
        tram = 'Tám trăm'
    } else if (hangTram == 9) {
        tram = 'Chín trăm '
    } else if (hangTram == 0) {
        tram = '';
    }
    if (hangChuc == 1) {
        chuc = 'mười '
    } else if (hangChuc == 2) {
        chuc = 'hai mươi '
    } else if (hangChuc == 3) {
        chuc = 'ba mươi '
    } else if (hangChuc == 4) {
        chuc = 'bốn mươi '
    } else if (hangChuc == 5) {
        chuc = 'năm mươi '
    } else if (hangChuc == 6) {
        chuc = 'sáu mươi '
    } else if (hangChuc == 7) {
        chuc = 'bảy mươi '
    } else if (hangChuc == 8) {
        chuc = 'tám mươi '
    } else if (hangChuc == 9) {
        chuc = 'chín mươi '
    }
    if (hangDonVi > 0 && hangChuc == 0) {
        chuc = 'lẻ ';
    }
    else if (hangDonVi == 0 && hangChuc == 0) {
        chuc = '';
    }
    if (hangDonVi == 1) {
        donVi = 'mốt.'
    } else if (hangDonVi == 2) {
        donVi = 'hai.'
    } else if (hangDonVi == 3) {
        donVi = 'ba.'
    } else if (hangDonVi == 4) {
        donVi = 'bốn.'
    } else if (hangDonVi == 5) {
        donVi = 'lăm.'
    } else if (hangDonVi == 6) {
        donVi = 'sáu.'
    } else if (hangDonVi == 7) {
        donVi = 'bảy.'
    } else if (hangDonVi == 8) {
        donVi = 'tám.'
    } else if (hangDonVi == 9) {
        donVi = 'chín.'
    } else if (hangDonVi == 0) {
        donVi = '';
    }
    if (100 <= so && so <= 999) {
        document.getElementById('ketQua_b3').innerHTML = tram + chuc + donVi;
    }
    else {
        document.getElementById('ketQua_b3').innerHTML = 'Bạn không nhập đúng 3 số cần đọc';

    }
    // Bài 4
}
/*
BÀI TẬP 4:
Mô hình 3 khối : 
Đầu vào : Nhập vào tọa độ (X,Y) của 3 sinh viên và của trường học
Xử lí : Tính tọa độ d của 3 sinh viên bằng công thức : Math.sqrt((Math.pow(xTruong-xSV,2))+(Math.pow(yTruong-ySV,2)))
    + Đem so sánh tọa độ d của 3 sinh viên ai là người lớn nhất => Người đó xa trường nhất
Đầu ra : Xuất ra màn hình sinh viên xa trường nhất
*/

document.getElementById('btnTinhToaDo').onclick = function () {
    var SV1 = tinhToaDo('nhapX1', 'nhapY1', 'nhapXTruong', 'nhapYTruong');
    var SV2 = tinhToaDo('nhapX2', 'nhapY2', 'nhapXTruong', 'nhapYTruong');
    var SV3 = tinhToaDo('nhapX3', 'nhapY3', 'nhapXTruong', 'nhapYTruong');
    var HS1 = document.getElementById('tenHS1').value;
    var HS2 = document.getElementById('tenHS2').value;
    var HS3 = document.getElementById('tenHS3').value;
    var soSanh = Math.max(SV1, SV2, SV3);
    if (soSanh === SV1) {
        document.getElementById('ketQua_b4').innerHTML = "Sinh viên xa trường nhất là bạn : " + HS1;
    } else if (soSanh === SV2) {
        document.getElementById('ketQua_b4').innerHTML = "Sinh viên xa trường nhất là bạn: " + HS2;
    } else if (soSanh === SV3) {
        document.getElementById('ketQua_b4').innerHTML = "Sinh viên xa trường nhất là bạn: " + HS3;
    }
    // hàm sử dụng 
    function tinhToaDo(id1, id2, id3, id4) {
        var xSV = Number(document.getElementById(id1).value);
        var ySV = Number(document.getElementById(id2).value);
        var xTruong = Number(document.getElementById(id3).value);
        var yTruong = Number(document.getElementById(id4).value);
        var duongDi = 0;
        duongDi = Math.sqrt((Math.pow(xTruong - xSV, 2)) + (Math.pow(yTruong - ySV, 2)))
        return duongDi;
    }
}
