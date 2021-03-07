require("dotenv").config();

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const mediaRouter = require("./routes/media");
const productsRouter = require("./routes/products");
const orderPaymentsRouter = require("./routes/orderPayments");
const refreshTokensRouter = require('./routes/refreshTokens');
const ownersRouter = require('./routes/owners');
const imageProductsRouter = require('./routes/imageProducts');
const transactionsRouter = require('./routes/transactions');
const reviewsRouter = require('./routes/reviews');
const webhookRouter = require('./routes/webhook');

const verifyToken = require('./middlewares/verifyToken');


const app = express();

app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/orders", verifyToken, orderPaymentsRouter);
app.use("/media", mediaRouter);
app.use("/products", productsRouter);
app.use("/image-products", verifyToken, imageProductsRouter);
app.use('/refresh-tokens', refreshTokensRouter);
app.use('/owners', verifyToken, ownersRouter);
app.use('/transactions', verifyToken, transactionsRouter);
app.use('/reviews', verifyToken, reviewsRouter);
app.use('/webhook', webhookRouter);


module.exports = app;
