const express = require('express')
const app = express();
const tasksRouter = require('./routes/tasks')

const port = 5000;

app.use(express.json())

app.use('/api/v1/tasks', tasksRouter)

app.listen(port, () => console.log(`http://localhost:${port}`));

app.get('/', (req, res) => {
    res.send('Task Manager');
})