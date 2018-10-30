'use strict';
const https = require('https')
const qs = require('querystring')
const ACCESS_TOKEN = 'xoxb-466462847920-467208479027-x8kT1kOmfRTRVN6ZGKCDCtRv';

// Verify Url - https://api.slack.com/events/url_verification
function verify(data, callback) {
  if (data.token === VERIFICATION_TOKEN) callback(null, data.challenge);
  else callback("verification failed");   
}


module.exports.bot = async (event, context) => {

  var payload = JSON.parse(event.body);

  console.log(payload);

  if (payload.event.type === 'app_mention') {
    console.log(payload.event);
    var text = "Hello from lambda!";
    var message = { 
      token: ACCESS_TOKEN,
      channel: event.channel,
      text: text
  };

  var query = qs.stringify(message); // prepare the querystring

  }

  return {
    statusCode: 200,
    body: payload.event
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
