const express = require("express");
const app = express();
const { createServer } = require("http");

const serverPort = process.env.PORT || 10000;

app.all('*', (req, res) => {
  res.redirect('/404');
})

const server = createServer(app);
server.listen(serverPort, () => console.log(`Listening on ${serverPort}`));
module.exports = server;

const initializeSocketHandler = require("./controllers/socketController")
initializeSocketHandler(server);

app.get("/", (req, res) => {
  res.send("Server is live...");
});
