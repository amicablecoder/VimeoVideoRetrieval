const firebase = require('firebase')
const googleStorage = require('@google-cloud/storage');

const storage = googleStorage({
  projectId: "mindzcloud-ce294",
  keyFilename: "./routes/firebasestorage.json"
});

const bucket = storage.bucket("gs://mindzcloud-ce294.appspot.com/");


var config = {
    apiKey: 'AIzaSyAY4fRwC0AVSyHUZqZycAcvQ7ZY8QjbMRY',
    authDomain: 'mindzcloud-ce294.firebaseapp.com',
    databaseURL: 'https://mindzcloud-ce294.firebaseio.com',
    storageBucket: 'mindzcloud-ce294.appspot.com'
  };
  firebase.initializeApp(config);

  exports.uploaddocument = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(req.query)

      let obj = req.query.docObj
      let url = req.query.docUrl

      let ref = 'Documents/' + url.slice(url.lastIndexOf('/') + 1)
      let file = 'Documents/July-2013.pdf'

      // Upload a new file to be created in your bucket.
      bucket.upload('July-2013.pdf', {
        destination: file,
        uploadType: "media",
        metadata: {
          contentType: 'doc/pdf',
        }
      }).then((data)=>{
        console.log(data[0])
      })
      res.send('updated')
  }
