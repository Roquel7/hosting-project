var AWS = require('aws-sdk');
var s3 = new AWS.S3();

exports.handler = function (event, context, callback) {
    console.log('Loading', JSON.stringify(event, null, 2));
    
    let result;
    let myAnswer = event["answer"]
    
    switch(myAnswer) {
        case "rock":
            result = "paper";
            break;
        case "paper":
            result = "scissors";
            break;
        case "scissors":
            result = "rock"
            break;
        default:
            result = "please choose between rock, paper, or scissors."
    }

    let params = {
        Body: `You chose ${myAnswer}. but I chose ${result}. I win!`,
        Bucket: "mtech-rock-paper-scissors",
        Key: "erickroquel/results.txt"
    }
    s3.putObject(params, function (err, data) {
        // if (err) console.log(err, err.stack);
    });
};