import { v4 } from "uuid";

let hikes = [];

export const hikeMemStore = {
  async getAllHikes() {
    return hikes;
  },

  async addHike(hiketrailId, hike) {
    hike._id = v4();
    hike.hiketrailid = hiketrailId;
    hikes.push(hike);
    return hike;
  },

  async getHikesByHiketrailId(id) {
    return hikes.filter((hike) => hike.hiketrailid === id);
  },

  async getHikeById(id) {
    return hikes.find((hike) => hike._id === id);
  },

  async getHiketrailHikes(hiketrailId) {
    return hikes.filter((hike) => hike.hiketrailid === hiketrailId);
  },

  async deleteHike(id) {
    const index = hikes.findIndex((hike) => hike._id === id);
    hikes.splice(index, 1);
  },

  async deleteAllHikes() {
    hikes = [];
  },

  async updateHike(hike, updatedHike) {
    hike.title = updatedHike.title;
    hike.artist = updatedHike.artist;
    hike.duration = updatedHike.duration;
  },
};