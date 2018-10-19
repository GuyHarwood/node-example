'use strict'

const timeService = {
  execute: () => {
    const date = new Date();
    const separator = ':';
    return (
      date.getHours().toString() + separator +
      date.getMinutes().toString() + separator +
      date.getSeconds().toString()
    );
  }
}

module.exports = timeService
