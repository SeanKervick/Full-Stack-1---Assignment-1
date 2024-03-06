import { db } from "../models/db.js";


export const adminController = {
  index: {
    handler: async function (request, h) {
      // const loggedInUser = request.auth.credentials;
      const locations = await db.locationStore.getAllLocations();
      const viewData = {
        title: "hikeplace dashboard",
        // user: loggedInUser,
        locations: locations,
      };
      return h.view("admin-view", viewData);
    },
  },

  // deleteLocation: {
  //   handler: async function (request, h) {
  //     const location = await db.locationStore.getLocationById(request.params.id);
  //     await db.locationStore.deleteLocationById(location._id);
  //     return h.redirect("/admin");
  //   },
  // },
};