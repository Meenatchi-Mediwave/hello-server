const http = require("http");

const books = [
  {
    id: 100,
    name: "Harry Potter",
  },
];

const animals = [
  {
    id: 300,
    name: "Rabbit",
  },
];

function requestHandler(req, res) {
  /*
  
  /route
  METHOD
  query strings
  route params
  body payload
  
  */

  const route = req.url;
  const method = req.method;

  console.log(method + " " + route);
  res.setHeader("Content-Type", "application/json");

  if (route === "/books") {
    res.write(JSON.stringify(books));
  } else if (route === "/animals") {
    res.write(JSON.stringify(animals));
  } else {
    res.statusCode = 404;
    res.write(
      JSON.stringify({
        message: "Route not found",
      })
    );
  }

  res.end();
}

const server = http.createServer(requestHandler);

server.listen(3001, () => {
  console.log("Server running on port 3001");
});
