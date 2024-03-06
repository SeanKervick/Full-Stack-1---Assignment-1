import { accountsController } from "./controllers/accounts-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { aboutController } from "./controllers/about-controller.js";
import { locationController } from "./controllers/location-controller.js";
import { adminController } from "./controllers/admin-controller.js";

// import { hikeController } from "./controllers/hike-controller.js";




export const webRoutes = [
  { method: "GET", path: "/", config: accountsController.index },
  { method: "GET", path: "/signup", config: accountsController.showSignup },
  { method: "GET", path: "/login", config: accountsController.showLogin },
  { method: "GET", path: "/logout", config: accountsController.logout },
  { method: "POST", path: "/register", config: accountsController.signup },
  { method: "POST", path: "/authenticate", config: accountsController.login },


  { method: "GET", path: "/dashboard", config: dashboardController.index },
  { method: "POST", path: "/dashboard/addlocation", config: dashboardController.addLocation },
  { method: "GET", path: "/about", config: aboutController.index },
  { method: "GET", path: "/location/{id}", config: locationController.index },
  { method: "POST", path: "/location/{id}/addhike", config: locationController.addHike },

  { method: "GET", path: "/dashboard/deletelocation/{id}", config: dashboardController.deleteLocation },
  { method: "GET", path: "/location/{id}/deletehike/{hikeid}", config: locationController.deleteHike },

  { method: "GET", path: "/admin", config: adminController.index },
  // { method: "GET", path: "/admin", config: accountsController.showAdmin },



  // { method: "GET", path: "/hike/{id}/edithike/{hikeid}", config: hikeController.index },
  // { method: "POST", path: "/hike/{id}/updatehike/{hikeid}", config: hikeController.update },

  { method: "POST", path: "/location/{id}/uploadimage", config: locationController.uploadImage },

  { method: "GET", path: "/{param*}", handler: { directory: { path: "./public" } }, options: { auth: false } },

];