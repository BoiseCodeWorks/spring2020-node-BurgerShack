import express from "express";

let FAKEDB = [
  { id: 1, name: "Mark Deluxe", description: "fancy burgertime" },
  { id: 2, name: "Jake Deluxe", description: "Dancy fancy burgertime" },
  { id: 3, name: "Darryl Deluxe", description: "No nonsense burgertime" }
];

export default class BurgersController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  getAll(req, res, next) {
    res.send(FAKEDB);
  }

  getById(req, res, next) {
    let burger = FAKEDB.find(b => b.id == req.params.id);
    if (!burger) {
      return res.status(400).send("Invalid ID");
    }
    res.send(burger);
  }

  create(req, res, next) {
    let newBurger = {
      id: FAKEDB.length + 1,
      name: req.body.name || "",
      description: req.body.description || ""
    };
    FAKEDB.push(newBurger);
    return res.send(newBurger);
  }

  edit(req, res, next) {}

  delete(req, res, next) {}
}
