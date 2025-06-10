const { roadGraph } = require('./roads');
const { randomPick } = require('./lib/helpers');

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map(parcel => {
          if (parcel.place !== this.place) return parcel;
          return { place: destination, address: parcel.address };
        })
        .filter(parcel => parcel.place !== parcel.address);
      return new VillageState(destination, parcels);
    }
  }

  static random(parcelCount = 5) {
    let parcels = [];

    for (let i = 0; i < parcelCount; i++) {
      let address = randomPick(Object.keys(roadGraph));
      let place;
      do {
        place = randomPick(Object.keys(roadGraph));
      } while (place === address);

      parcels.push({ place, address });
    }
    return new VillageState('Post Office', parcels);
  }
}

module.exports = VillageState;
