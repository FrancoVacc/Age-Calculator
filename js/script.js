
//* ----- comprobar año bisiesto ------
const esBisiesto = (year) => {
    if (year % 400 == 0) {
        return true
    } else {
        if (year % 100 != 0 && year % 4 == 0) {
            return true
        }
        return false
    }
}

//* ----- Validación de fechas ------
const bornDate = (year, month, day) => {
    let bisiesto = esBisiesto(year)
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        if (day <= 0 || day > 31) {
            return { err: "Must be a valid day", type: "day" }
        } else {
            //return new Date(`${year}/${month}/${day}`)
            return { year, month, day }
        }
    } else if (month == 2 || month == 4 || month == 6 || month == 9 || month == 11) {

        if (month == 2) {
            if (bisiesto == true) {
                if (day <= 0 || day > 29) {
                    return { err: "Must be a valid day", type: "day" }
                } else {
                    //return new Date(`${year}/${month}/${day}`)
                    return { year, month, day }
                }
            } else {
                if (day <= 0 || day > 28) {
                    return { err: "Must be a valid day", type: "day" }
                } else {
                    //return new Date(`${year}/${month}/${day}`)
                    return { year, month, day }
                }
            }
        }

        if (day > 0 && day <= 30) {
            //return new Date(`${year}/${month}/${day}`)
            return { year, month, day }
        } else {
            return { err: "Must be a valid day", type: "day" }
        }

    } else {
        return { err: "Must be a valid month", type: "month" }
    }
}


//* Comparación de fechas
export const dateComp = (year, month, day) => {

    try {

        const userBornDate = bornDate(year, month, day)

        if (userBornDate.err) {
            throw userBornDate
        }


        const actualDate = new Date()

        //Obtener la fecha de hoy
        const actualDay = actualDate.getDate()
        const actualMonth = actualDate.getMonth()
        const actualYear = actualDate.getFullYear()

        //Obtener fecha del usuario
        const userBornDay = userBornDate.day
        const userBornMonth = userBornDate.month
        const userBornYear = userBornDate.year

        if (userBornYear > actualYear) {
            throw { err: "Must be in the past", type: "year" }
        }

        //primero determinar si el cumpleaños paso, es hoy o aún no paso

        //si el cumpleaños paso
        if (actualMonth > userBornMonth || actualMonth == userBornMonth && actualDay > userBornDay) {
            let years = actualYear - userBornYear
            let month = actualMonth - userBornMonth
            let day = actualDay - userBornDay

            if (day < 0) {
                day = 30 + day
                month = month - 1
            }
            //return console.log(`la persona tiene ${years} años, ${month} meses y ${day} dias `)
            let result = { day, month, years }
            return result
        }

        //si el cumpleaños es hoy
        if (actualMonth == userBornMonth && actualDay == userBornDay) {
            let years = actualYear - userBornYear
            let month = 0
            let day = 0


            //return console.log(`la persona tiene ${years} años, ${month} meses y ${day} dias `)
            let result = { day, month, years }
            return result
        }

        //si el cumpleaños no ha pasado
        if (actualMonth < userBornMonth || actualMonth == userBornMonth && actualDay < userBornDay) {
            let years = (actualYear - userBornYear) - 1
            let month = 12 + (actualMonth - userBornMonth)
            let day = (actualDay - userBornDay)

            if (day < 0) {
                month = month - 1
                day = 30 + day
            }

            //return console.log(`la persona tiene ${years} años, ${month} meses y ${day} dias `)
            let result = { day, month, years }
            return result
        }


    } catch (error) {
        console.log(error)
        let result = { day: "--", month: "--", years: "--", type: error.type, msg: error.err }
        return result

    }

}
