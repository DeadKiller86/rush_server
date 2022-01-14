const db = require("../db/db");

exports.transmitData = (req, res, next) => {
  try {
    const data = db;
    var responseData = {
      success: true,
      message: "Data Fetched from server successfully",
      data: [],
    };
    var dataFound = false;
    const query = req.query.o;
    const hell = data["indianhelpline.com"];
    for (let i = 0; i < hell.length; i++) {
      var hello = hell[i].parent;
      if (hello == query) {
        responseData.data.push(hell[i]);
        dataFound = true;
      }
    }
    const h = process.env.ALLOW_ACCESS;
    var k = false;
    if (h == "true") {
      k = true;
    }
    if (dataFound && k) {
      res.status(200).json(responseData);
    } else {
      res.status(400).json({
        success: false,
        message: "Requested Data not available",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
