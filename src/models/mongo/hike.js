import Mongoose from "mongoose";

const { Schema } = Mongoose;

const hikeSchema = new Schema({
  hikeName: String,
  description: String,
  difficulty: String,
  length: Number,
  elevation: String,
  locationid: {
    type: Schema.Types.ObjectId,
    ref: "Location",
  },
});

export const Hike = Mongoose.model("Hike", hikeSchema);