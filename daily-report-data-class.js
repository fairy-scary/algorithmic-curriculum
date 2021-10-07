//Sorts client-side submitted student data
//Report colors passed in as letter strings: r, y, w, or g

class ReportData {
    constructor(name, date, selfColor, pairColor){
        this.name = name
        this.selfColor = selfColor
        this.pairColor = pairColor 
        this.date = date
        this.redDates = ""
        this.yellowDates = ""
        this.whiteDates = ""
        this.greenDates = ""
        this.ciaAlert = ""
        this.greatDays = 0
    }

    okrSort() {
        if ((this.selfColor || this.pairColor) === "r") {
            this.redDates = this.date
      }
        if ((this.selfColor || this.pairColor) === "y") {
            this.yellowDates = this.date
      }
        if (this.selfColor === ("r" || "y") && this.pairColor === ("r" || "y")) {
            this.ciaAlert = this.name
        }
        if (this.selfColor === "w") {
            this.whiteDates = this.date
      }
        if (this.selfColor === "g") {
            this.greenDates = this.date
      }
        if (this.selfColor === "g" && this.pairColor === ("g" || "w")) {
            this.greatDays += 1
        }
    }

        
}


module.exports = {
    ReportData
}