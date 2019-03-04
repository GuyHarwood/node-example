'use strict'
const http = require('http');

const dateTime = {

  execute: (tz) => {

    return new Promise((res) => {
      
      http.get('http://localhost:2345/?timezone='+tz,(resp) => {
        let data = '';

        resp.on('data', (chunk) => {
          data += chunk;
        });

        resp.on('end', () => {

          res(data);
        });

      }).on("error", (err) => {
        console.log("Error: " + err.message);
        reject(err.message);
      });

    });

  }
} 

module.exports = dateTime;