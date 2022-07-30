const express = require("express");
const cors = require("cors");
const { request } = require("express");
const app = express();
const port = 8080;

app.use(cors());
// const allowCrossDomain = function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization, access_token,Access-Control-Allow-Origin"
//   );

//   // intercept OPTIONS method
//   if ("OPTIONS" === req.method) {
//     res.sendStatus(200);
//   } else {
//     next();
//   }
// };
// app.use(allowCrossDomain);
const url =
  "https://newsapi.org/v2/top-headlines?" +
  "country=us&" +
  `apiKey=${process.env.APIKEY}`;

app.get("/", (req, res) => {
  request(url, (err, res, body) => {
    console.log(body);
    res.send(body);
  });
});

// app.use(cors({ origin: "http://127.0.0.1:5173/" }));
app.listen(process.env.PORT || port, () =>
  console.log(`app is listening on http://localhost:${port}`)
);
