import { v4 } from "uuid";

let hikes = [];

export const hikeMemStore = {
  async getAllHikes() {
    return hikes;
  },

  async addHike(locationId, hike) {
    hike._id = v4();
    hike.locationid = locationId;
    hikes.push(hike);
    return hike;
  },

  async getHikesByLocationId(id) {
    return hikes.filter((hike) => hike.locationid === id);
  },

  async getHikeById(id) {
    return hikes.find((hike) => hike._id === id);
  },

  async getLocationHikes(locationId) {
    return hikes.filter((hike) => hike.locationid === locationId);
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