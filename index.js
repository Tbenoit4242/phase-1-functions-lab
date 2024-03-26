function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; 
    const distance = Math.abs(pickupLocation - hqLocation); 
    return distance; 
  }


function distanceFromHqInFeet(pickupLocation){
    const blocks = distanceFromHqInBlocks(pickupLocation)
    const feetPerBlock = 264
    return blocks * feetPerBlock
}
function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(start - destination);
    const feetPerBlock = 264;
    return blocksTravelled * feetPerBlock;
}
function calculatesFarePrice(start, destination){
const distanceInFeet = distanceTravelledInFeet(start, destination);
  
  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}