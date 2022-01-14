require("dotenv").config({ path: "./config.env" });

const express = require("express");

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use("/helplinenumber", require("./routes/main"));
app.listen(PORT, () =>
  console.log(`Backend Server runnig on port number ${PORT}`)
);
