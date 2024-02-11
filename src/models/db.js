import { userMemStore } from "./mem/user-mem-store.js";
import { locationMemStore } from "./mem/location-mem-store.js";
import { hikeMemStore } from "./mem/hike-mem-store.js";


export const db = {
  userStore: null,
  locationStore: null,
  hikeStore: null,

  init() {
    this.userStore = userMemStore;
    this.locationStore = locationMemStore;
    this.hikeStore = hikeMemStore;
  },
};