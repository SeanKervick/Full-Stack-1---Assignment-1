import { userApi } from "./api/user-api.js";
import { locationApi } from "./api/location-api.js";
import { hikeApi } from "./api/hike-api.js";


export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST", path: "/api/locations", config: locationApi.create },
  { method: "DELETE", path: "/api/locations", config: locationApi.deleteAll },
  { method: "GET", path: "/api/locations", config: locationApi.find },
  { method: "GET", path: "/api/locations/{id}", config: locationApi.findOne },
  { method: "DELETE", path: "/api/locations/{id}", config: locationApi.deleteOne },
  { method: "GET", path: "/api/hikes", config: hikeApi.find },
  { method: "GET", path: "/api/hikes/{id}", config: hikeApi.findOne },
  { method: "POST", path: "/api/locations/{id}/hikes", config: hikeApi.create },
  { method: "DELETE", path: "/api/hikes", config: hikeApi.deleteAll },
  { method: "DELETE", path: "/api/hikes/{id}", config: hikeApi.deleteOne }
];