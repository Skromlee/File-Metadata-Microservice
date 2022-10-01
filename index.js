var express = require('express');
var cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});
let count = 0;
app.post('/api/fileanalyse', upload.any(), (req, res, next) => {
  console.log(req.files);
  let test = [];
  req.files.forEach((current) => {
    test.push(
      {
        name: req.files[0].originalname,
        type: req.files[0].mimetype,
        size: req.files[0].size
      })
  })
  res.json(test[0]);
})



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
