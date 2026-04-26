require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/authRoutes"));
app.use("/habits", require("./routes/habitRoutes"));

app.get("/", (req,res)=>res.send("API Running PRO"));

sequelize.sync().then(()=>{
  app.listen(5000, ()=>console.log("Server running PRO"));
});
