import {BaseController} from "../BaseController";
//import {MongoClient} from "mongodb";
import {ApiResponseInterface} from "common/ApiResponseInterface";
import {assert} from "assert";
import {IsNaNException} from "common/IsNaNException";

export class SampleController extends BaseController {

  constructor() {
    super('sample');
  }

  get(req, res): void {
    super.get(req, res, () => {
      /*var url: string = "mongodb://52.28.49.117:27017";
      MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to server");
        db.close();
      });*/
      var r:ApiResponseInterface = {
        "success": true,
        "data": {
          "bookingId": 1,
          "amount": 100.90
        }
      };

      res.json(r);
    })
  }

  put(req, res): void {
    var id = req.params.id;
    if (!id) res.status(200).send('valid data brand!');
    res.status(200).send('amount!');
  }

  post(req, res): void {
    var body = req.body;
    if (!body) res.status(200).send('valid data brand!');
    res.status(200).send('amount!');
  }

  delete(req, res): void {
    var id = req.id;
    if (!id) res.status(200).send('valid data brand!');
    res.status(200).send('amount!');
  }

}