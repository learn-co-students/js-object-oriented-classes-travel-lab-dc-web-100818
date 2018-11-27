class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(endDate){
    // debugger;
    return parseInt(`${endDate - this.startDate.getFullYear()}`)
  }
}

class Route {

  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

    blocksTravelled(){
      let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

      let horizontalDiff = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)

      let verticalDiff = this.endingLocation.vertical - this.beginningLocation.vertical

      let totalDiff = verticalDiff + horizontalDiff

      return totalDiff
    }

  estimatedTime(peakHour){
    if (peakHour) {
        return this.blocksTravelled() / 2
    }else {
        return this.blocksTravelled() / 3
      }
    }


}
