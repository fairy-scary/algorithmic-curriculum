//concats red and yellow arrays of dates
//loops and date matches resource object key
//creates recomendationObject
const student = require("./student-profile-builder")
const resourceObject = require("./resources-object")


const recomendationObject = {
    "aACurriculum": [],
    "videos": [],
    "outsideResources": []
}

const recomend = () => {
    let remedialDates = [...student.studentProfile.yellowDates, ...student.studentProfile.redDates]
    remedialDates.forEach((date) => {
        let aAcurriculumArray = resourceObject.okrDailyResources.date.aACurriculum
        let videosArray = resourceObject.okrDailyResources.date.videosArray
        let outsideResourcesArray = resourceObject.okrDailyResources.date.outsideResources
        //date always at array.length - 0 in nested array
        recomendationObject.aACurriculum.push(aAcurriculumArray)
        recomendationObject.aACurriculum.push(date)
        recomendationObject.videos.push(videosArray)
        recomendationObject.videos.push(date)
        recomendationObject.outsideResources.push(outsideResourcesArray)
        recomendationObject.outsideResources.push(date)
    })
}

recomend()