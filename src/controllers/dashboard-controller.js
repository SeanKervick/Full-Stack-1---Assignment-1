import { db } from "../models/db.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const hiketrails = await db.hiketrailStore.getAllHiketrails();
      const viewData = {
        title: "hikeplace dashboard",
        hiketrails: hiketrails,
      };
      return h.view("dashboard-view", viewData);
    },
  },

  addHiketrail: {
    handler: async function (request, h) {
      const newHiketrail = {
        title: request.payload.title,
      };
      await db.hiketrailStore.addHiketrail(newHiketrail);
      return h.redirect("/dashboard");
    },
  },
};