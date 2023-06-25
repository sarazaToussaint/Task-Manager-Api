const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

// middleware

app.use(express.json());

// routes

app.get('/hello', (req, res) => {
   res.send('<h2>Task Manager App</h2>'); 
});

app.use('/api/v1/tasks', tasks);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}... `);
});
