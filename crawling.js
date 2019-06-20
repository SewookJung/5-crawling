var request = require("request");
var cheerio = require("cheerio");
var iconv = require("iconv-lite");
const jschardet = require("jschardet");

const requestOptions = {
  method: "GET",
  uri: "http://old.yjfmc.or.kr/?code=rent&subp=03&mode=6&tab=2",
  headers: { "User-Agent": "Mozilla/5.0" },
  encoding: null
};

request(requestOptions, function(error, response, body) {
  const strContetns = Buffer.from(body, 'utf-8');
  // console.log(strContetns);

  const $ = cheerio.load(strContetns);
  const print = $('.sub').toString();
  const print2 = iconv.encode(print, 'utf-8');
  console.log(print2);

  //  console.log(iconv.decode(strContetns, "EUC-KR").toString());

  // const $ = cheerio.load(strContetns);
  // const print = $(".wrap").toString();
  // console.log(iconv.decode(print, 'EUC-KR').toString());
  
});

// const request = require("request");
// const cheerio = require("cheerio");
// const iconv = require("iconv-lite").iconv;
// const jschardet = require("jschardet");

// const requestOptions = {
//   method: "GET",
//   uri: "http://old.yjfmc.or.kr/?code=rent&subp=03&mode=6&tab=2",
//   headers: { "User-Agent": "Mozilla/5.0" },
//   encoding: null
// };

// request(requestOptions, function(error, response, body) {

//   var searchResultBin = new Buffer(body, 'binary');
//   console.log(jschardet.detect(searchResultBin));

//   var $ = cheerio.load(searchResultBin);
//   // var print = $(".sub").toString();
//   var printcharset2 = jschardet.detect($);
//   console.log(printcharset2);

//   // console.log(iconv.decode(print, "EUC-KR").toString());
// });

// // request(
// //   "http://old.yjfmc.or.kr/?code=rent&subp=03&mode=6&tab=2",
// //   (error, response, body) => {
// //     if (!error && response.statusCode == 200) {
// //       const $ = cheerio.load(body);
// //       const print = $(".copyright").text();

// //       // const iconv = new iconv (test.encoding, "UTF-8");
// //       // const content = iconv.convert()
// //       console.log(print);
// //     }
// //   }
// // );
