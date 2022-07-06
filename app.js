const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const roomDetails = require("./routes/mockApi");
const port = 3001;
app.use(cors());
app.get("/api", (req, res) => {
  res.status(200).json(roomDetails);
});



app.get("/api/room/:name", (req, res) => {
  const data = roomDetails.find(
    (item) => item.name === req.params.name.replace(":", "")
  );
    console.log(data);
  res.status(201).json(data);
});
app.listen(port, () => console.log("server running at port: "+port));
 