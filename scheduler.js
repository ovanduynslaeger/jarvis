var dailynotif = require('./back/tasks/dailynotif.js');

var CronJob = require('cron').CronJob;

var job = new CronJob('*/15 * * * * 1-7', function(){
		dailynotif.getNews();
  }, function () {
    // This function is executed when the job stops
  },
  true /* Start the job right now */
);