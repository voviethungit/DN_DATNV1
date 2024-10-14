require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const authRouter = require("./routes/Auth");
const userRouter = require("./routes/User");

const { v4: uuidv4 } = require("uuid");
const uuid = uuidv4();
metadata: {
  firebaseStorageDownloadTokens: uuid;
}
const initializeFirebase = require('./firebase/firebase_confighungdev');
initializeFirebase();
// Khai báo database
const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.pv6rkef.mongodb.net/HungDev?retryWrites=true&w=majority`
    );
    console.log("Connect DB Thanh Cong");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
connectDB();
app.set('view engine', 'ejs');

app.use(express.json());
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));



// API AUTH
app.use("/", authRouter);
// API USER DETAILS
app.use("/", userRouter);
// API SERVER
app.listen(process.env.PORT, () => {
  console.log(
    `Server dang chay tai PORT : http://localhost:${process.env.PORT}/`
  );
  console.log("Copyright By VietHung");
});