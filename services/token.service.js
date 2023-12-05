import jwt from "jsonwebtoken";
import { exports } from "../config/default.js";

export const generateToken = (data) => {
  const data_token = {
    id: data.id,
    email: data.email,
    name: data.name
  }
    return jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: data_token
      },  exports.secret);
}