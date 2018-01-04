const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios')
const app = express();
const scheduleBaseUrl = "/api/schedule";
const rosterBaseUrl = "/api/roster";
const port = process.env.PORT || 3001;
const sc = require(__dirname + '/controllers/schedule_controller');
const rc = require(__dirname + '/controllers/roster_controller');

app.use(bodyParser.json());

app.post(scheduleBaseUrl, sc.create);
app.get(scheduleBaseUrl, sc.read);
app.put(`${scheduleBaseUrl}/:id`, sc.update);
app.delete(`${scheduleBaseUrl}/:id`, sc.delete);


app.post(rosterBaseUrl, rc.create);
app.get(rosterBaseUrl, rc.read);
app.put(`${rosterBaseUrl}/:id`, rc.update);
app.delete(`${rosterBaseUrl}/:id`, rc.delete);


app.listen(port, () => {console.log(`Welcome to the Big Show on port ${port}!`)});