const express = require("express");
const helmet = require("helmet");

const actionRouter = require("./actions.js");
const projectRouter = require("./projects.js");

const server = express();

server.use(express.json());
server.use(helmet());

server.use("/api/action", actionRouter);
server.use("/api/project", projectRouter);

server.get("/", (req, res) => {
  res.send("is this working? testing 123");
});

module.exports = server;
