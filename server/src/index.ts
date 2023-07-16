import { createServer } from "http";
import "./server"

const server = createServer();

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
