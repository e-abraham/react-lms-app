const express = require('express');

const {sequelize} = require('./db');
const {Student} = require('./models');

const seed = require('./seed')

const PORT = process.env.PORT || 4000;

const app = express();

//Allow CORS requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


// serve static assets from the public/ folder
app.use(express.static('public'));



seed();

app.get('/students', async (req, res) => {
    const students= await Student.findAll()
    res.json(students)
})

app.get('/students/:id', async (req, res) => {
    const student = await Student.findByPk(req.params.id)
    res.json({student})
})

app.listen(PORT, () => {
    sequelize.sync({force: true});
    console.log(`Your server is running on http://localhost:${PORT}`);
})