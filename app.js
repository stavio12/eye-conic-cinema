const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cookieParser = require("cookie-parser");

const app = express();
dotenv.config({ path: "./config.env" });

const AppError = require("./utils/appError");
const GlobalError = require("./Controllers/errorController");
const userRouter = require("./routes/userRouter");

//middle wares

//Security HTTP headers
app.use(helmet());

//Limiter to prevent soo many requests from same IP
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from this IP, Please try again in an hour ",
});

app.use(bodyParser.urlencoded({ extended: true, limit: "10kb" }));
app.use(bodyParser.json({ limit: "10kb" }));
app.use(cookieParser());

//data sanization against nosql query injection
app.use(mongoSanitize());

//data sanization against xss
app.use(xss());

app.use(cors({ origin: true, credentials: true }));

if (process.env.NODE_ENV === "development") {
  mongoose.connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("database local connected");
} else if (process.env.NODE_ENV === "production") {
  mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("database connected");
}

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//Routes
app.use(userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(GlobalError);

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Sever running on port " + port);
});
