import express from "express";
import cors from "cors";
import bp from "body-parser";
import BurgersController from "./controllers/BurgersController";

let server = express();

const port = 3000;

server.use(bp.urlencoded({ extended: true }));
server.use(bp.json());

server.use("/api/burgers", new BurgersController().router);

//Default catchall for route not found
server.use((req, res, next) => {
  res.status(404).send("route not found");
});

server.listen(port, () => {
  console.log("Server Running on port:", port);
});
