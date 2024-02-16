import { v4 } from "uuid";
import { db } from "./store-utils.js";

export const hikeJsonStore = {
  async getAllHikes() {
    await db.read();
    return db.data.hikes;
  },

  async addHike(locationId, hike) {
    await db.read();
    hike._id = v4();
    hike.locationid = locationId;
    db.data.hikes.push(hike);
    await db.write();
    return hike;
  },

  async getHikesByLocationId(id) {
    await db.read();
    return db.data.hikes.filter((hike) => hike.locationid === id);
  },

  async getHikeById(id) {
    await db.read();
    return db.data.hikes.find((hike) => hike._id === id);
  },

  async deleteHike(id) {
    await db.read();
    const index = db.data.hikes.findIndex((hike) => hike._id === id);
    db.data.hikes.splice(index, 1);
    await db.write();
  },

  async deleteAllHikes() {
    db.data.hikes = [];
    await db.write();
  },

  async updateHike(hike, updatedHike) {
    hike.hikeName = updatedHike.hikeName;
    hike.description = updatedHike.description;
    hike.difficulty = updatedHike.difficulty;
    hike.length = updatedHike.length;
    hike.elevation = updatedHike.elevation;
    await db.write();
  },
};

