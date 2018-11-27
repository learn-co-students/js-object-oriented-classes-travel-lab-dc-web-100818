class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    let experience = year - this.startDate.getFullYear();
    return experience;
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let verticalDistance = Number(this.beginningLocation.vertical) - Number(this.endingLocation.vertical);
    verticalDistance = Math.abs(verticalDistance);


    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    //calculate horizontal distance

    let horizontalDistance = eastWest.indexOf(this.beginningLocation["horizontal"]) - eastWest.indexOf(this.endingLocation["horizontal"]);
    horizontalDistance = Math.abs(horizontalDistance);

    return horizontalDistance + verticalDistance;
  }

  estimatedTime(peakHours = false) {
    let time = 0;
    if (peakHours === false) {
      time = Math.round(this.blocksTravelled() / 3);
    } else if (peakHours === true) {
      time = Math.round(this.blocksTravelled() / 2);
    }
    return time;
  }
}
