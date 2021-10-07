//Purpose: Builds profile from each report instance
let { ReportData } = require('./daily-report-data-class');

let studentProfile = {

    "name": "",
    "redDates": [],
    "yellowDates": [],
    "whiteDates": [],
    "greenDates": [],
    "ciaAlert": [],
    "greatDays": 0
}



let profileBuilder = (student) => {
    if (!studentProfile.name) studentProfile.name = student.name
    if (student.redDates) studentProfile.redDates.push(student.redDates)
    if (student.yellowDates) studentProfile.yellowDates.push(student.yellowDates)
    if (student.whiteDates) studentProfile.whiteDates.push(student.whiteDates)
    if (student.greenDates) studentProfile.greenDates.push(student.greenDates)
    if (student.ciaAlert) studentProfile.ciaAlert.push(student.ciaAlert)
    if (student.greatDays) studentProfile.greatDays++
}

//🔥 1. Code fires from report submittal event listener and creates a new instance of Report Data.
let monday = new ReportData("Autumn Wiggins", "w4d1", "g", "g")
monday.okrSort()
profileBuilder(monday)
//
let tuesday = new ReportData("Autumn Wiggins", "w4d2", "r", "r")
tuesday.okrSort()
profileBuilder(tuesday)
//
let wednesday = new ReportData("Autumn Wiggins", "w4d3", "w", "y")
wednesday.okrSort()
profileBuilder(wednesday)
//
let thursday = new ReportData("Autumn Wiggins", "w4d4", "y", "w")
thursday.okrSort()
profileBuilder(thursday)
//
let friday = new ReportData("Autumn Wiggins", "w4d5", "g", "g")
friday.okrSort()
profileBuilder(friday)
//
console.log(studentProfile) // =>
//  🧑‍🎓 2. Daily profileBuilder invocation writes to DB:
// {
//     name: 'Autumn Wiggins',
//     redDates: [ 'w4d2' ],
//     yellowDates: [ 'w4d4' ],
//     whiteDates: [ 'w4d3' ],
//     greenDates: [ 'w4d1', 'w4d5' ],
//     ciaAlert: [ 'Autumn Wiggins' ],
//     greatDays: 2
// }

module.exports = { studentProfile }