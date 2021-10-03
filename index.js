let points = document.getElementById("points");
let averagePoints = document.getElementById("averagePoints");
let totalPoints = document.getElementById("totalPoints");


function calculates() {
    let numberOne = Number(document.getElementById("num-1").value);
    let numberTwo = Number(document.getElementById("num-2").value);
    let numberhThree = Number(document.getElementById("num-3").value);

    points.textContent = "Points:" + " " + numberOne + " - " + numberTwo + " - " + numberhThree;

    // Our output with Math.floor is taken as an integer.
    average = Math.floor((numberOne + numberTwo + numberhThree) / 3);
    averagePoints.textContent = "Average Points:" + average;

    total = (numberOne + numberTwo + numberhThree);
    totalPoints.textContent = "Total Points:" + " " + total;









}