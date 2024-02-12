// import { userMemStore } from "./mem/user-mem-store.js";
// import { locationMemStore } from "./mem/location-mem-store.js";
// import { hikeMemStore } from "./mem/hike-mem-store.js";

import { userJsonStore } from "./json/user-json-store.js";
import { locationJsonStore } from "./json/location-json-store.js";
import { hikeJsonStore } from "./json/hike-json-store.js";

export const db = {
  userStore: null,
  locationStore: null,
  hikeStore: null,

  init() {
    this.userStore = userJsonStore;
    this.locationStore = locationJsonStore;
    this.hikeStore = hikeJsonStore;
  },
};