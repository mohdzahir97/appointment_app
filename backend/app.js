const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");

const cors=require("cors")

const errorMiddleware = require("./middleware/error");
const { userRouter } = require("./routes/userRoutes");
const { meetingRoutes } = require("./routes/meetingRoutes");

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "../backend/config/config.env" });
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));




app.use(cors({
  origin:[process.env.FORONTEND_URL],
  credentials:true
}))


app.use("/api/v1",userRouter)


app.use("/api/v1",meetingRoutes)







app.use(errorMiddleware);

module.exports = app;
