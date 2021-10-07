//User Story: IA or staff member assigned to date builds initial profile. They're then mapped to student performance arrays through date format "w#d#" 
//The curriculum title should match a/A open titles to help staff better align resources with mod changes. 
//url - front -end auto-detects and displays preview from open graph, curriculum relies on outside authentication for viewability. 
//add video - array displays in special video preview 

class DailyResources {
    constructor(date, curriculumTitle, maintainer, curriculumList, outsideResources, videos){
        this.date = date;
        this.curriculumTitle = curriculumTitle;
        this.maintainer = maintainer;
        this.curriculumList = curriculumList;
        this.outsideResources = outsideResources;
        this.videos = videos;
    }

    makeMaintainer(name){
        this.maintainer = name
    }

    addCurriculum(...urls) {
        urls.map((url) => this.curriculumList.push(url))
    }

    addOutsideResources(...urls) {
        urls.map((url) => this.outsideResources.push(url))
    }

    addVideos(...urls) {
        urls.map((url) => this.videos.push(url))
    }

    static getCurriculum(...redAndYellowDays) {
        redAndYellowDays.map((day) => {
            this.curriculumList.filter((date) => {
                if(date === day) {
                    console.log()
                }
            }

        })
    }

}

let w4d2 = new DailyResources("w4d2","Grimes", "TDD and OOP",["https://open.appacademy.io/learn/js-py---aug-2021-cohort-1-online/week-4---tdd-and-oop/practice--polymorphism"], ["https://eloquentjavascript.net/"], ["https://youtu.be/rHiSsgFRgx4"]);
console.log(w4d2)
w4d2.addCurriculum("#")
w4d2.addOutsideResources("#")
w4d2.addVideos("#")
console.log(w4d2)
w4d2.makeMaintainer("Lizzo")
console.log(w4d2)

