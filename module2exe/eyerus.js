let name = "eyerus";
let marks = [81, 99, 75];
let total = 0;
for (let mark of marks) {
  total += mark;
}
let average = total / marks.length;
let grade;
if (average > 90) {
  grade = "A";
} else if (average > 80 && average <= 90) {
  grade = "B";
} else if (average > 70 && average <= 80) {
  grade = "C";
} else if (average > 60 && average <= 70) {
  grade = "D";
} else {
  grade = "F";
}
console.log(`Name: ${name}, Total: ${total}, Grade: ${grade}`);
