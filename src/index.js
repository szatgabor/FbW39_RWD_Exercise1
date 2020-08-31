const express = require("express");
const livereload = require("livereload");
const connectReload = require("connect-livereload");
const path = require("path");

const server = express();
const lrServer = livereload.createServer();

server.use(connectReload());
server.use(express.static(path.join(__dirname, "../public")));
lrServer.watch(path.join(__dirname, "../public"));

const port = 5000;
server.listen(port, function () {
  console.log(`Server is listening to ${port}`);
});
