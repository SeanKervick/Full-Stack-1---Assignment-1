import { userMemStore } from "./mem/user-mem-store.js";
import { hiketrailMemStore } from "./mem/hiketrail-mem-store.js";
import { hikeMemStore } from "./mem/hike-mem-store.js";


export const db = {
  userStore: null,
  hiketrailStore: null,
  hikeStore: null,

  init() {
    this.userStore = userMemStore;
    this.hiketrailStore = hiketrailMemStore;
    this.hikeStore = hikeMemStore;
  },
};