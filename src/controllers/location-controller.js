import { db } from "../models/db.js";

export const locationController = {
  index: {
    handler: async function (request, h) {
      const location = await db.locationStore.getLocationById(request.params.id);
      const viewData = {
        title: "location",
        location: location,
      };
      return h.view("location-view", viewData);
    },
  },

  addHike: {
    handler: async function (request, h) {
      const location = await db.locationStore.getLocationById(request.params.id);
      const newHike = {
        hike: request.payload.hike,
        description: request.payload.description,
        difficulty: request.payload.difficulty,
        length: request.payload.length,
        elevation: request.payload.elevation,
      };
      await db.hikeStore.addHike(location._id, newHike);
      return h.redirect(`/location/${location._id}`);
    },
  },

  deleteHike: {
    handler: async function(request, h) {
      const location = await db.locationStore.getLocationById(request.params.id);
      await db.hikeStore.deleteHike(request.params.hikeid);
      return h.redirect(`/location/${location._id}`);
    },
  },
};