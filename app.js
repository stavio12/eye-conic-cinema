const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");

const app = express();
dotenv.config({ path: "./config.env" });

//Limiter to prevent soo many requests
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from this IP, Please try again in an hour ",
});

app.use(limiter);
// app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));
//Routes
const userRouter = require("./routes/userRouter");
// const guestRouter = require("./routes/guestRouter");

// requiring user models

const User = require("./models/userdb");
if (process.env.NODE_ENV === "development") {
  mongoose.connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("database local connected");
} else {
  mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("database online connected");
}

//Security HTTP headers
app.use(helmet());

//Middlewires
//development login
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//body parse... reading data from body to req.body
app.use(express.json({ limit: "50kb" }));
app.use(cookieParser());
//data sanization against nosql query injection
app.use(mongoSanitize());

//sessions
// app.use(
//   session({
//     secret: "eye-conic-cinema",
//     resave: true,
//     saveUninitialized: true,
//   })
// );

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// app.use(guestRouter);
app.use(userRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Sever Running on Port " + port);
});
