import findMatch from "../findMatch";
import { Request, Response } from "express";
import { Document } from "mongoose";

export default class UsersController {
  // -GET -/all users
  static async allUsers(req: Request, res: Response) {
    let users = await findMatch.find((err: any, users: any) => {
      if (err) {
        return res.send({
          data: err,
          message: "error occurred fetching users",
          status: false
        });
      } else {
        return res.send({ data: users, message: "success", status: true });
      }
    });
  }

  // -Get - /user/1 ***returns a user with a given Id
  static async getUser(req: Request, res: Response) {
    const user = <Document>await findMatch.findById(req.params.id);
    if (!user) {
      return res.send({
        data: null,
        message: "error occurred fetching users",
        status: false
      });
    }
    return res.send({ data: user, message: "success", status: true });
  }

  // - PUT -/user # inserts a new user to the table
  static async addUser(req: Request, res: Response) {
    try {
      const user = await new findMatch(req.body).save();

      return res
        .status(201)
        .json({ status: false, message: "success", data: user._id });
    } catch (error) {
      return res
        .status(500)
        .json({ status: false, message: "error occurred", data: error });
    }
  }

  // Post - / user/1
  static async updateUser(req: Request, res: Response) {
    findMatch.findByIdAndUpdate(
      req.params.id,
      req.body,
      (err: any, book: any) => {
        if (err) {
          res.send(err);
        } else {
          res.send("successfully updated user profile");
        }
      }
    );
  }

  //Delete
  static async deleteUser(req: Request, res: Response) {
    findMatch.deleteOne({ _id: req.params.id }, (err: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send("successfully Deleted user profile");
      }
    });
