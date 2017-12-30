const express = require('express');
const bodyParser = require('body-parser');
const sc = require(__dirname + '/controllers/schedule_controller');

const app = express();

app.use(bodyParser.json());

const scheduleBaseUrl = "/api/schedule";
app.post(scheduleBaseUrl, sc.create);
app.get(scheduleBaseUrl, sc.read);
app.put(`${scheduleBaseUrl}/:id`, sc.update);
app.delete(`${scheduleBaseUrl}/:id`, sc.delete);

const port = 3001;
app.listen(port, () => {console.log(`Welcome to the Big Show on port ${port}!`)});