import axios from "axios";

import { serviceUrl } from "../fixtures.js";

export const hikeplaceService = {
  hikeplaceUrl: serviceUrl,

  async createUser(user) {
    const res = await axios.post(`${this.hikeplaceUrl}/api/users`, user);
    return res.data;
  },

  async getUser(id) {
    const res = await axios.get(`${this.hikeplaceUrl}/api/users/${id}`);
    return res.data;
  },

  async getAllUsers() {
    const res = await axios.get(`${this.hikeplaceUrl}/api/users`);
    return res.data;
  },

  async deleteAllUsers() {
    const res = await axios.delete(`${this.hikeplaceUrl}/api/users`);
    return res.data;
  },
};