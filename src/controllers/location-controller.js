import { db } from "../models/db.js";
import { HikeSpec } from "../models/joi-schemas.js";
import { imageStore } from "../models/image-store.js";



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
    validate: {
      payload: HikeSpec,
      options: { abortEarly: false },
      failAction: async function (request, h, error) {
        const currentLocation = await db.locationStore.getLocationById(request.params.id);
        return h.view("location-view", { title: "Add Hike error", location:currentLocation, errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const location = await db.locationStore.getLocationById(request.params.id);
      const newHike = {
        hikeName: request.payload.hikeName,
        description: request.payload.description,
        difficulty: request.payload.difficulty,
        length: Number(request.payload.length),
        elevation: request.payload.elevation,
      };
      await db.hikeStore.addHike(location._id, newHike);
      return h.redirect(`/location/${location._id}`);
    },
  },

  uploadImage: {
    handler: async function (request, h) {
      try {
        const location = await db.locationStore.getLocationById(request.params.id);
        const file = request.payload.imagefile;
        if (Object.keys(file).length > 0) {
          const url = await imageStore.uploadImage(request.payload.imagefile);
          location.img = url;
          await db.locationStore.updateLocation(location);
        }
        return h.redirect(`/location/${location._id}`);
      } catch (err) {
        console.log(err);
        // eslint-disable-next-line no-restricted-globals
        return h.redirect(`/location/${location._id}`);
      }
    },
    payload: {
      multipart: true,
      output: "data",
      maxBytes: 209715200,
      parse: true,
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