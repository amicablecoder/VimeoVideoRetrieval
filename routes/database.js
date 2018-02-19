const stitch = require('mongodb-stitch')

exports.dbconnection = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const clientPromise = stitch.StitchClientFactory.create('mz02test-vijbf')
    clientPromise.then(client => {
      const db = client.service('mongodb', 'mongodb-atlas').db('mz02test');
      client.login().then(() =>
        db.collection('test').updateOne({owner_id: client.authedId()},{$set:{title: 'MongoDB Overview',
   description: 'MongoDB is no sql database',
   by: 'tutorials point',
   url: 'http://www.tutorialspoint.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 100
    }}, {upsert:true})
      ).then(() =>
        db.collection('test').findOne()
      ).then(docs => {
        console.log("Found docs", docs)
        res.send('Connection Successful')
      }).catch(err => {
        console.error(err)
      });
    });
    }
