import { db } from "../models/db.js";

export const hiketrailController = {
  index: {
    handler: async function (request, h) {
      const hiketrail = await db.hiketrailStore.getHiketrailById(request.params.id);
      const viewData = {
        title: "hiketrail",
        hiketrail: hiketrail,
      };
      return h.view("hiketrail-view", viewData);
    },
  },

  addHike: {
    handler: async function (request, h) {
      const hiketrail = await db.hiketrailStore.getHiketrailById(request.params.id);
      const newHike = {
        hike: request.payload.hike,
        description: request.payload.description,
        difficulty: request.payload.difficulty,
        length: request.payload.length,
        elevation: request.payload.elevation,
      };
      await db.hikeStore.addHike(hiketrail._id, newHike);
      return h.redirect(`/hiketrail/${hiketrail._id}`);
    },
  },
};