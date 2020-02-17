require("dotenv").config(); //establishes the .env file
require = require("esm")(module); //type="module"
module.exports = require("./server/main");
