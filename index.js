
class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  
  yearsExperienceFromBeginningOf(date) {
    return date - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    // console.log(this.beginningLocation);

    // Vertial
    let startVertical = parseInt(this.beginningLocation.vertical)
    let endVertical = parseInt(this.endingLocation.vertical)

    let vertical = Math.abs(startVertical - endVertical)

    // console.log(this.beginningLocation.horizontal)

    // Horizontal
    let startHorizontal = eastWest.indexOf(this.beginningLocation.horizontal)
    let endHorizontal = eastWest.indexOf(this.endingLocation.horizontal)
    let horizontal = Math.abs(startHorizontal - endHorizontal);

    let total = horizontal + vertical

    return total;
  
  }

  estimatedTime(peak = false) {
    return peak ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3;
  }
}
