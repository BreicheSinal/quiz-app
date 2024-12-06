import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { throwError, throwNotFound } from "../utils/error.js";

export const register = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    if (!username || !password) {
      return throwError({
        message: "Username and password are required",
        res,
        status: 400,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const user = await User.create({
      email,
      username,
      password: hashed,
    });

    return res.json(user);
  } catch (error) {
    console.log("Error in registration:", error.message);

    return throwError({
      message: "Registration failed",
      res,
      status: 500,
    });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return throwNotFound({
        entity: "User",
        res,
      });
    }

    const check = await bcrypt.compare(password, user.password);

    if (!check) {
      return throwError({
        message: "Invalid credentials",
        res,
        status: 400,
      });
    }

    const token = jwt.sign({ userId: user.id }, "secret");

    return res.status(200).send({ user, token });
  } catch (error) {
    console.error("Error during login:", error.message);

    return throwError({
      message: "Login failed",
      res,
      status: 500,
    });
  }
};
