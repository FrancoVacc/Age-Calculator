import { dateComp } from "./script.js"

let dayField = document.getElementById("day")
let monthField = document.getElementById("month")
let yearField = document.getElementById("year");

let dayLabel = document.getElementById("day-label");
let monthLabel = document.getElementById("month-label")
let yearLabel = document.getElementById("year-label")

let daySpan = document.getElementById("day-span")
let monthSpan = document.getElementById("month-span")
let yearSpan = document.getElementById("year-span")

document.getElementById("calcular").addEventListener("submit", (e) => {
    e.preventDefault();

    if (dayField.value == "" || monthField == "" || yearField == "" || dayField.lenght > 2 || monthField.lenght > 2 || yearField.lenght > 4) {
        dayField.classList.add("error-line")
        monthField.classList.add("error-line")
        yearField.classList.add("error-line")

        dayLabel.classList.add("error-font")
        monthLabel.classList.add("error-font")
        yearLabel.classList.add("error-font")

        return
    } else {
        dayField.classList.remove("error-line")
        monthField.classList.remove("error-line")
        yearField.classList.remove("error-line")

        dayLabel.classList.remove("error-font")
        monthLabel.classList.remove("error-font")
        yearLabel.classList.remove("error-font")
    }

    let age = dateComp(parseInt(yearField.value), parseInt(monthField.value), parseInt(dayField.value))

    daySpan.innerText = age.day
    monthSpan.innerText = age.month
    yearSpan.innerText = age.years

})