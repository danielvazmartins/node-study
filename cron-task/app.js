var cron = require('node-cron');
 
cron.schedule('* * * * *', () => {
    console.log('running a task every minute');
});

cron.schedule('*/5 * * * * *', () => {
    console.log('running a task every 5 seconds');
});