const azov = require("./azov.json");
const caspian = require("./caspian.json");
const blackSea = require("./blackSea.json");
const distance = require("geo-dist")


function getDistances(data, POS) {
  let coords = data.features[0].geometry.coordinates.flat(10)
  let distances = {}
  for (let index = 0; index < coords.length; index+=2) {
    let length = distance(coords[index+1], coords[index], POS[0], POS[1]).toFixed(5)
    distances[length] = [coords[index], coords[index+1]]
  }
  let min = Math.min(...Object.keys(distances))

  let minimal = distances[min]
  return {
    distance: min,
    coords: minimal
  };
}

let POS;
// Парковый переулок, Aviator, Azov, ROS, Russia, 346789 Latitude: 47.095501 | Longitude: 39.417253
POS = [47.095501, 39.417253]
console.log("azov",
  getDistances(azov, POS)
);

// Bryansk, Kizlyarsky District, Russia
// Latitude: 44.318197 | Longitude: 46.982683
POS = [44.318197, 46.982683]
console.log("caspian",
  getDistances(caspian, POS)
);

// SOCHI :  Latitude: 43.585482 | Longitude: 39.723109
POS = [43.585482, 39.723109]
console.log("blackSea",
  getDistances(blackSea, POS)
);
