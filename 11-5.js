let weight = Number(prompt("Nhập số cân nặng (kg):"));
let height = Number(prompt("Nhập số chiều cao (m):"));

let bmi = weight / (height * height);

if (bmi < 18.5) {
    alert(`BMI = ${bmi.toFixed(1)} - Cân nặng thấp (gầy)`);
} else if (bmi >=18.5 && bmi <25) {
    alert(`BMI = ${bmi.toFixed(1)} - Bình thường`);
} else if (bmi < 30 ) {
    alert(`BMI = ${bmi.toFixed(1)} - Tiền béo phì`);
} else if (bmi < 35) {
     alert(`BMI = ${bmi.toFixed(1)} - Béo phì độ 1`);
} else if (bmi < 40) {
     alert(`BMI = ${bmi.toFixed(1)} - Béo phì độ 2`);
} else if (bmi >= 40) {
     alert(`BMI = ${bmi.toFixed(1)} - Béo phì độ 3`);
}