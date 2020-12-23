const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const morgan = require("morgan");

const app = express();
dotenv.config({ path: "./config.env" });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//Routes
const routes = require("./routes/routes");

// requiring user models

const User = require("./models/userdb");

mongoose.connect(process.env.DATABASE_LOCAL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//Security HTTP headers
app.use(helmet());

//Middlewires
//development login
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// //body parse... reading data from body to req.body
// app.use(express.json({ limit: "10kb" }));

//data sanization against nosql query injection
app.use(mongoSanitize());

//sessions
app.use(
  session({
    secret: "eye-conic-cinema",
    resave: true,
    saveUninitialized: true,
  })
);

app.use((req, res, next) => {
  next();
});

app.use(routes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Sever Running on Port " + port);
});
