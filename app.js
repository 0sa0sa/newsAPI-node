const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(process.env.APIKEY);

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
// const options = {
//   url:
//     "https://newsapi.org/v2/top-headlines?" +
//     "country=us&" +
//     `apiKey=${process.env.APIKEY}`,
//   method: "GET",
//   headers:
//     "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
// };

app.get("/", async (req, res) => {
  const response = await newsapi.v2.topHeadlines({
    country: "us",
  });
  console.log("res ", response);
  res.send(response);
});

// app.use(cors({ origin: "http://127.0.0.1:5173/" }));
app.listen(process.env.PORT || port, () =>
  console.log(`app is listening on http://localhost:${port}`)
);
