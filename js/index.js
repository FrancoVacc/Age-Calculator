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

let errorDay = document.getElementById("error-day");
let errorMonth = document.getElementById("error-month");
let errorYear = document.getElementById("error-year");

const changeFieldToError = () => {
    dayField.classList.add("error-line")
    monthField.classList.add("error-line")
    yearField.classList.add("error-line")

    dayLabel.classList.add("error-font")
    monthLabel.classList.add("error-font")
    yearLabel.classList.add("error-font")
}

document.getElementById("calcular").addEventListener("submit", (e) => {
    e.preventDefault();

    if (dayField.value == "" || monthField == "" || yearField == "") {
        changeFieldToError()
        errorDay.innerText = "This field is required"
        errorMonth.innerText = "This field is required"
        errorYear.innerText = "This field is required"
        return
    }

    let age = dateComp(parseInt(yearField.value), parseInt(monthField.value), parseInt(dayField.value))


    //*vuelve los campos a normal
    dayField.classList.remove("error-line")
    monthField.classList.remove("error-line")
    yearField.classList.remove("error-line")

    dayLabel.classList.remove("error-font")
    monthLabel.classList.remove("error-font")
    yearLabel.classList.remove("error-font")

    if (age.type == "day") {
        changeFieldToError()
        daySpan.innerText = age.day
        monthSpan.innerText = age.month
        yearSpan.innerText = age.years
        errorDay.innerText = age.msg
        return
    }

    if (age.type == "month") {
        changeFieldToError()
        daySpan.innerText = age.day
        monthSpan.innerText = age.month
        yearSpan.innerText = age.years
        errorMonth.innerText = age.msg
        return
    }

    if (age.type == "year") {
        changeFieldToError()
        daySpan.innerText = age.day
        monthSpan.innerText = age.month
        yearSpan.innerText = age.years
        errorYear.innerText = age.msg
        return
    }

    errorDay.innerText = ""
    errorMonth.innerText = ""
    errorYear.innerText = ""


    daySpan.innerText = age.day
    monthSpan.innerText = age.month
    yearSpan.innerText = age.years



})