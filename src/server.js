require("dotenv").config();

const app = require("./app");
const { PORT } = require("./config/env.js");

app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
