let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate){ // test example uses long date 'Jan 1, 1995'
    this.name = name;
    this.startDate = new Date(startDate);
  }

  startDate() {
   return this.startDate;
  }

  yearsExperienceFromBeginningOf(endDate) {
    let endDateTimeObject = new Date(endDate);
    if (endDate.length > 4) {
      return endDateTimeObject.getFullYear() - this.startDate.getFullYear();
    } else {
      return (endDateTimeObject.getFullYear() + 1) - this.startDate.getFullYear();
    }
  }
}

class Route {
  constructor (beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
 // { horizontal: '1st Avenue', vertical: '34' }, { horizontal: 'Park', vertical: '45' }
  blocksTravelled() {
    //find distance between horizontal blocks
    let beginIndex = eastWest.findIndex((element) =>
      element === this.beginningLocation.horizontal
    );

    let endIndex = eastWest.findIndex((element) =>
      element === this.endingLocation.horizontal
    );

    let horizontalBlocks = Math.abs(endIndex - beginIndex);

    //find distance from vertical blocks
    let verticalBlocks = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);

    return horizontalBlocks + verticalBlocks;
  }

  estimatedTime(peak = false) {
    if (!peak){     // Off peak hours, a driver travels three blocks in a minute
      return this.blocksTravelled() / 3
    } else {    //during peak hours a driver travels an estimated two blocks in a minute.
      return this.blocksTravelled() / 2
    }
      //returns the number of minutes estimated for a trip
  }

}
