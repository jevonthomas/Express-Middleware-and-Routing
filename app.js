let express = require('express');
let app = express();


// middleware to check for the word egg in the url
const checkForEgg = (req, res, next) => {
  if((req.url).indexOf('egg') > -1) {
    console.log("Easter Egg");
//     console.log(
//         ,ggadddd8888888bbbbaaa,_
//     ,ad888,      `Y88,      `Y888baa,
//   ,dP"  "Y8b,      `"Y8b,      `"Y8888ba,
//  ,88      "Y88b,      `"Y8ba,       `"Y88Ya,
// ,P88b,      `"Y88b,       `"Y8ba,_       ""8a,
// ,P'"Y88b,        "Y88b,        `"Y8ba,_      `Ya,
// 8'    "Y88b,        ""Y8ba,         ""Y8ba,_   `8,
// 8b       "Y88b,         ""Y8ba,_         ""Y88baaY
// 88b,        "Y88ba,         ""Y88ba,_         `""P
// 8Y88ba,        ""Y88ba,_         ""Y88ba,,_    ,P'
// `b,"Y88ba,         ""Y88baa,_         """Y888bd"
// `b, `"Y88ba,_         ""Y888baa,_         ,8"
//  `8,   `""Y88ba,_         `"""Y8888baaaaaP"
//   `Ya,     `""Y888ba,_           `"d88P"
//     `"Yb,,_     `""Y888baa,__,,adP""'
//         `"""YYYY8888888PPPP"""'
//         );
  } else {
    next();
  };
  next();
};

app.use(checkForEgg);

app.get('/see-our-eggs', (req, res) => {
  res.sendfile("partials/eggs.html");
});

app.get('/see-our-chickens', (req, res) => {
  res.sendfile("partials/chickens.html");
});

app.get('/home', (req, res) => {
  res.sendfile("partials/index.html");
});


let port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});