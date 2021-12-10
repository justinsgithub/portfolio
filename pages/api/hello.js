import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'
import { MongoClient } from 'mongodb'
const uri = process.env.MONGODB_URI


// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS']
  })
)

export default async function handler (req, res) {
  // Run cors
    await cors(req, res);
  
    MongoClient.connect(uri, function(err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        var myobj = { name: "request", amount: 1 };
        dbo.collection("cssexamples").insertOne(myobj, function(err, response) {
            if (err) throw err;
            res.status(200).json({message: "document inserted!"});
            db.close();
        });

    });
}
