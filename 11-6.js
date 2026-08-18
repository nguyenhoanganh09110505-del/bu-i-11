let a = Number(prompt("Mời bạn nhập vào số a:"));
let b = Number(prompt("Mời bạn nhập vào số b:"));

let phepTinh = prompt("Mời bạn nhập vào phép tính (+,-,*,/");

let ketqua;

switch (phepTinh) {
    case "+":
    ketqua = a + b;
    break;
    
    case "-":
    ketqua = a - b;
    break;

    case "*":
    ketqua = a * b;
    break;

    case "/":
    ketqua = a / b;
    break;

    default:
        alert("Phép tính không hợp lệ");
}

if (ketqua !== undefined) {
    alert(` Kết quả phép tính trên: ${a} ${phepTinh} ${b} = ${ketqua}`);
}