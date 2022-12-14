const http = require("http");

function requestHandler(req, res) {
  res.write("Hello world");
  res.end();
}

const server = http.createServer(requestHandler);

server.listen(3001, () => {
  console.log("Server running on port 3001");
});
