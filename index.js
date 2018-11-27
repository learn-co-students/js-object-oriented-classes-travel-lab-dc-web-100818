class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    let startYear = parseInt(this.startDate.getFullYear());
    return year - startYear
  }
}


class Route {
  constructor (beginningLocation, endLocation) {
    this.beginningLocation = beginningLocation
    this.endLocation = endLocation
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    let horizBlocks = eastWest.indexOf(this.endLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)
    let vertBlocks = this.endLocation.vertical - this.beginningLocation.vertical
    return horizBlocks + vertBlocks
  }

  estimatedTime(peakHour) {
    if (peakHour === true) {
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }

}
