import { CronJob } from 'cron';

const updateCurrencyCron = app => {
    const job = new CronJob('* * * * * *', async () => {
        console.log("hi all")
    }, null, true, 'America/Los_Angeles');
    job.start();
};

export default updateCurrencyCron;