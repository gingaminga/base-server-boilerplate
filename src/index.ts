import http from "http";
import app from "@/app";

const PORT = 3000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Start service on ${PORT} port!`);
});
