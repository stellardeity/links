const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type: String, required: true },
  follow: { type: Boolean },
  links: [{ type: Types.ObjectId, ref: "Link" }],
}, { versionKey: false });

module.exports = model("User", schema);
