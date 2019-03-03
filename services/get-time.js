'use strict'

const service = {
  execute: (gmtOffset) => {
    if (typeof gmtOffset !== "string") {
        gmtOffset = 0;
    }
    else {
        //  Integrity check on the value of offset
        let matches = gmtOffset.match(/^([+-]{1})?(\d{2})(\d{2})$/);
        gmtOffset = 0;
        if ((matches !== null) && (matches.length === 4)) {
            let hours = parseInt(matches[2]);
            let minutes = parseInt(matches[3]);
            if ((hours < 24) && (minutes < 60)) {
                gmtOffset = ((hours * 60) + minutes) * 60000 * (matches[1] === '-' ? -1 : 1);
            }
        }
    }
    let date = new Date();
    return new Date(date.getTime() + gmtOffset).toString();
  }
}

module.exports = service
