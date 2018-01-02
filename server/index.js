const express = require('express');
const bodyParser = require('body-parser');
const sc = require(__dirname + '/controllers/schedule_controller');
const rc = require(__dirname + '/controllers/roster_controller')

const app = express();

app.use(bodyParser.json());

const scheduleBaseUrl = "/api/schedule";
app.post(scheduleBaseUrl, sc.create);
app.get(scheduleBaseUrl, sc.read);
app.put(`${scheduleBaseUrl}/:id`, sc.update);
app.delete(`${scheduleBaseUrl}/:id`, sc.delete);

const rosterBaseUrl = "/api/roster";
app.post(rosterBaseUrl, rc.create);
app.get(rosterBaseUrl, rc.read);
app.put(`${rosterBaseUrl}/:id`, rc.update);
app.delete(`${rosterBaseUrl}/:id`, rc.delete);

const port = 3000;
app.listen(port, () => {console.log(`Welcome to the Big Show on port ${port}!`)});