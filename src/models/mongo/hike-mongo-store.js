import { Hike } from "./hike.js";

export const hikeMongoStore = {
  async getAllHikes() {
    const hikes = await Hike.find().lean();
    return hikes;
  },

  async addHike(locationId, hike) {
    hike.locationid = locationId;
    const newHike = new Hike(hike);
    const hikeObj = await newHike.save();
    return this.getHikeById(hikeObj._id);
  },

  async getHikesByLocationId(id) {
    const hikes = await Hike.find({ locationid: id }).lean();
    return hikes;
  },

  async getHikeById(id) {
    if (id) {
      const hike = await Hike.findOne({ _id: id }).lean();
      return hike;
    }
    return null;
  },

  async deleteHike(id) {
    try {
      await Hike.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAllHikes() {
    await Hike.deleteMany({});
  },

  async updateHike(hike, updatedHike) {
    const hikeDoc = await Hike.findOne({ _id: hike._id });
    hikeDoc.hikeName = updatedHike.hikeName;
    hikeDoc.description = updatedHike.description;
    hikeDoc.difficulty = updatedHike.difficulty;
    hikeDoc.length = updatedHike.length;
    hikeDoc.elevation = updatedHike.elevation;
    await hikeDoc.save();
  },
};