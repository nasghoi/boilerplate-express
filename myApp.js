let express = require("express");
let app = express();
let dotenv = require("dotenv").config();
let bodyParser = require("body-parser");

console.log("Hello World");

// app.get("/", function(req, res) {
//     res.send("Hello Express");
// })

absolutePath = __dirname + "/views/index.html";

app.get("/", function(req, res) {
    res.sendFile(absolutePath);
})

app.use("/public", express.static(__dirname + "/public"));

// app.get("/json", (req, res) => {
//   if (process.env.MESSAGE_STYLE === "uppercase") {
//     res.json({ "message": "Hello json".toUpperCase() });
//   } else {
//     res.json({ "message": "Hello json" });
//   }
// });

// app.use((req, res, next) => {
//     console.log(req.method + " " + req.path + " - " + req.ip);
//     next();
// })

// app.get("/now", (req, res, next) => {
//     req.time = new Date().toString();
//     next();
// }, (req, res) => {
//     res.json({ time: req.time });
// })

// const setTimeMiddleware = (req, res, next) => {
//   req.time = new Date().toString();
//   next();
// };

// app.get("/now", setTimeMiddleware, (req, res) => {
//   res.json({ time: req.time });
// });

/* app
    .get
    .post
    .use
*/

/* res 
    .json
    .send
    .sendFile
*/

/* req 
    .path
    .method
    .ip
    .time
    .params
    .query
    .body
*/

/* send with params */
// app.get("/:word/echo", (req, res) => {
//     res.json({ echo: req.params.word });
// })

/* send with query */
// app.get("/name", (req, res) => {
//   /* var firstName = req.query.first; */
//   /* var lastName = req.query.last; */
//   // OR you can destructure and rename the keys
//   /* var { first: firstName, last: lastName } = req.query; */
//   res.json({
//     name: `${req.query.first} ${req.query.last}`,
//     /* name: `${firstName} ${lastName}` */
//   });
// });

/* combine query and body */
// app
//   .route("/name")
//   .get((req, res) => {
//     res.json({ name: `${req.query.first} ${req.query.last}` });
//   })
//   .post((req, res) => {
//     res.json({ name: `${req.body.first} ${req.body.last}` });
//   });


/* send with body */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/name", (req, res) => {
  var { first, last } = req.body;
  res.json({ name: `${first} ${last}` });
})

module.exports = app;
