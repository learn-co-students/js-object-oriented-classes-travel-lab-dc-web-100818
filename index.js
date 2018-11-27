class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    let startVertical = parseInt(this.beginningLocation.vertical);
    let endVertical = parseInt(this.endingLocation.vertical)
    let vertical = Math.abs(startVertical - endVertical)

    let startHor = eastWest[this.beginningLocation.horizontal];
    let endHor = eastWest[this.endingLocation.horizontal];
    let horizontal = Math.abs(startHor - endHor)

    let total = vertical + horizontal
    return total
  }

  estimatedTime(peak=false){
    if (peak){
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }
}

let eastWest = {'1st Avenue': 1, '2nd Avenue': 2, '3rd Avenue': 3, 'Lexington Avenue': 4, 'Park': 5, 'Madison Avenue': 6, '5th Avenue': 7}
