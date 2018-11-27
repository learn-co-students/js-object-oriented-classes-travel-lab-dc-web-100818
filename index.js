class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(end) {
    return parseInt(end) - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let startHorz = Object.keys(eastWest).find(key => eastWest[key] === this.beginningLocation.horizontal)
    let endHorz = Object.keys(eastWest).find(key => eastWest[key] === this.endingLocation.horizontal)
    let diffHorz = Math.abs(startHorz - endHorz)
    let diffVert = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    return diffHorz + diffVert
  }

  estimatedTime(peak=false) {

    let blocks = this.blocksTravelled()
    if (peak === false) {
      return blocks / 3
    } else {
      return blocks / 2
    }
  }

}
