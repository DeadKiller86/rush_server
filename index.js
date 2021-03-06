require("dotenv").config({ path: "./config.env" });
const cors = require("cors")

const express = require("express");

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/helplinenumber", require("./routes/main"));
app.listen(PORT, () =>
  console.log(`Backend Server runnig on port number ${PORT}`)
);
