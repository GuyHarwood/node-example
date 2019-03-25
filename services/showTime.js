'use strict'

const service = {
   execute: (offset) => {
   let d = new Date(); 
   let hours = d.getHours() + offset;
   let minutes = d.getMinutes();
   let seconds = d.getSeconds();
   return `Current time is ${hours}:${minutes}:${seconds} with offset of ${offset} hour `;
   }
 }
module.exports = service
