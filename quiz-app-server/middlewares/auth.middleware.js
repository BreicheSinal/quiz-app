import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { throwError } from "../utils/error.js";

export const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return throwError({
      message: "Unauthorized",
      res,
      status: 401,
    });
  }

  const splitted = authHeader.split(" ");

  if (splitted.length !== 2 || splitted[0] !== "Bearer") {
    return throwError({
      message: "Unauthorized",
      res,
      status: 401,
    });
  }

  const token = splitted[1];

  try {
    const payload = await jwt.verify(token, "secret");

    const id = payload.userId;

    const user = await User.findById(id);

    if (!user) {
      return throwError({
        message: "Invalid credentials",
        res,
        status: 400,
      });
    }
    req.user = user;

    next();
  } catch (error) {
    return throwError({
      message: "Unauthorized",
      res,
      status: 401,
    });
  }
};
