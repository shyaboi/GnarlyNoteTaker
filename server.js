var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// exxample app.get
// app.get("/reserve", function(req, res) {
//     res.sendFile(path.join(__dirname, "reserve.html"));
//   });
var notes = [{ title: "Test Title", text: "Test text" }];
// index file send--------------------------------------------------------------
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/api/notes", (req, res) => res.json(db));
// app.use(express.static(path.join(__dirname, 'public')))
//   --------------------------------------------------------
app.post("/api/notes", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  res.json(req.body);
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "oof.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
