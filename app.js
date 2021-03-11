const express = require("express");
const app     = express();
const port    = 3000;
const buscar  = require("./routes/buscar");

app.use(express.json());
app.use("/buscar", buscar);

app.listen(port, (req, res) => console.log(`Listening service ${port}`));

/*
(async function () {
    const engine = require("./lib/engine");
    const rooms  = await engine("12032021", "13032021");
    console.log(rooms);
})();
*/
