import { v4 } from "uuid";
import { hikeMemStore } from "./hike-mem-store.js";


let hiketrails = [];

export const hiketrailMemStore = {
  async getAllHiketrails() {
    return hiketrails;
  },

  async addHiketrail(hiketrail) {
    hiketrail._id = v4();
    hiketrails.push(hiketrail);
    return hiketrail;
  },

  async getHiketrailById(id) {
    const list = hiketrails.find((hiketrail) => hiketrail._id === id);
    list.hikes = await hikeMemStore.getHikesByHiketrailId(list._id);
    return list;
  },

  async deleteHiketrailById(id) {
    const index = hiketrails.findIndex((hiketrail) => hiketrail._id === id);
    hiketrails.splice(index, 1);
  },

  async deleteAllHiketrails() {
    hiketrails = [];
  },
};