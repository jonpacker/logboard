var req = require('request');

module.exports = function(serverUrl) {
  var endpoint = serverUrl + "/log";
  return function() {
    var loggedThings = [].slice.call(arguments);
    var log = {
      time: Date.now(),
      objs: loggedThings
    };

    request.post(endpoint, {form: log});
  };
};
