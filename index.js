// start with a Mocha test instead

// const { fetchMyIP } =  require('./iss');
// const { fetchCoordsByIP } =  require('./iss');
// const { fetchISSFlyOverTimes } =  require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

// { fetchMyIP }((error, ip) => {
//   if(error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// });

// { fetchCoordsByIP }('99.238.52.139', (error, coordinates) => {
//   if(error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Coordinates:", coordinates);
// });
// const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

// fetchISSFlyOverTimes(exampleCoords, (error, responses) => {
//   if(error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Fly Over Times:", responses);
// });
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
    if(error) {
      console.log("It didn't work!", error);
      return;
    }
  printPassTimes(passTimes);
});