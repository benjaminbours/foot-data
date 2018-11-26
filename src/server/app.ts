import express from "express";
import createError from "http-errors";
import mongoose from "mongoose";
import path from "path";

const rootUrl: string = "mongodb://mongo:27017";

mongoose.connect(rootUrl, (err) => {
  if (err) {
    return err.message;
  } else {
    console.log("Succesfully Connected!");
    return;
  }
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));

// app.use("/", indexRouter);
// app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err: any, req: any, res: any, next: any) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.send("error");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = app;
