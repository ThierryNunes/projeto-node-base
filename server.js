require("dotenv").config();
const app = require("./src/app.js");

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
