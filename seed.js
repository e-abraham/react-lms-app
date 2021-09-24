const path = require('path');
const fs = require('fs').promises;

const {sequelize} = require('./db');
const {Student} = require('./models');


const seed = async () => {

    await sequelize.sync({ force: true });

    const seedPath = path.join(__dirname, 'students.json'); // creates path to seed data
    const buffer = await fs.readFile(seedPath); // reads json
    const {data} = JSON.parse(String(buffer)); //parses data

    const dataPromises = data.map(student => Student.create(student))
    await Promise.all(dataPromises)
    console.log("db populated!")
}


module.exports = seed