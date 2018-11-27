class Driver {
  constructor(name, date) {
    this.name = name
    this.startDate = new Date(date)
  }

  startDate() {
    return this.startDate
  }

  yearsExperienceFromBeginningOf(date) {
    return Math.abs(this.startDate.getFullYear() - parseInt(date))
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = Object.assign({}, beginningLocation)
    this.endingLocation = Object.assign({}, endingLocation)
  }

  blocksTravelled() {
    let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    let vDistance = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)

    let hDistance = Math.abs(eastWest.findIndex((block) => block === this.beginningLocation.horizontal) - eastWest.findIndex((block) => block === this.endingLocation.horizontal))

    if (!!vDistance && !!hDistance) { return vDistance + hDistance}
    else if (!!hDistance) { return hDistance }
    else if (!!vDistance) { return vDistance }
    else { return 0 }
  }

  estimatedTime(peak = false) {
    return peak ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3
  }
}
