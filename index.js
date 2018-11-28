class Driver {
  constructor (name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf (year) {
    let start = this.startDate.getFullYear()
    return Math.abs(start - parseInt(year));
  }
}

class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled () {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue',
    'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let verticalStart = this.beginningLocation["vertical"];
    let verticalEnd = this.endingLocation["vertical"];

    let blocksNorthSouth = Math.abs(parseInt(verticalEnd) - parseInt(verticalStart))

    let horizontalStart = this.beginningLocation["horizontal"];
    let startStreetValue = eastWest.indexOf(horizontalStart) + 1;

    let horizontalEnd = this.endingLocation["horizontal"];
    let endStreetValue = eastWest.indexOf(horizontalEnd) + 1;

    let blocksEastWest = Math.abs(endStreetValue - startStreetValue)
    let totalBlocks = blocksNorthSouth + blocksEastWest;

    return totalBlocks;
  }

  estimatedTime (peak) {
    const offPeak = 3 //blocks per min
    const peakRate = 2  // blocks per min
    if (peak){
      return this.blocksTravelled()/peakRate;
    } else {
      return this.blocksTravelled()/offPeak;
    }
  }
}
