const users = require("./userRoute");

module.exports = (app) => {
  app.use("/api", users);
};
