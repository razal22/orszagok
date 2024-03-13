const hai = require('hai-server');
const countries = require('./orszagok.json');

const app = hai();
const port = 3000;

app.get('/countries', (req, res) => {
    res.json(countries);
});

app.get('/countries/:id', (req, res) => {
    const countryId = req.params.id;
    const country = countries.find(country => country.id == countryId);
    if (country) {
        res.json(country);
    } else {
        res.status(404).send('Country not found');
    }
});

app.start(port, () => {
    console.log(`Server is running on port ${port}`);
});