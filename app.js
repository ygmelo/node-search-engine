const express = require("express");
const app     = express();
const port    = 3000;
const buscar  = require("./routes/buscar");

app.use(express.json());
app.use("/buscar", buscar);

app.listen(port, (req, res) => console.log(`Listening service ${port}`));