const express = require("express");
const app = express();
const logger = require("morgan");
const path = require("path");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// Allow the views to read CSS files from the public
app.use(express.static(path.join(__dirname, "public")));
// Allow smooth useage of URLs, JSON, and see requests in the console
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));




app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// Allow the views to read CSS files from the public
app.use(express.static(path.join(__dirname, "public")));
// Allow smooth useage of URLs, JSON, and see requests in the console
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const DogsRouter = require("./routes/URL_Request/URLRoute");

app.use("/", DogsRouter);

/*
    Listening
*/
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})
