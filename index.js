const cars = [
  { id: 1, make: 'Toyota', model: 'Camry', year: 2022 },
  { id: 2, make: 'Honda', model: 'Civic', year: 2021 },
  { id: 3, make: 'Ford', model: 'Mustang', year: 2022 },
  { id: 4, make: 'Chevrolet', model: 'Corvette', year: 2023 },
  { id: 5, make: 'Tesla', model: 'Model 3', year: 2021 },
  { id: 6, make: 'Nissan', model: 'Altima', year: 2022 },
  { id: 7, make: 'BMW', model: 'X5', year: 2023 },
  { id: 8, make: 'Mercedes-Benz', model: 'C-Class', year: 2021 },
  { id: 9, make: 'Audi', model: 'A4', year: 2022 },
  { id: 10, make: 'Lexus', model: 'RX', year: 2023 },
  { id: 11, make: 'Hyundai', model: 'Tucson', year: 2021 },
  { id: 12, make: 'Kia', model: 'Seltos', year: 2022 },
  { id: 13, make: 'Mazda', model: 'CX-5', year: 2023 },
  { id: 14, make: 'Subaru', model: 'Outback', year: 2021 },
  { id: 15, make: 'Volkswagen', model: 'Golf', year: 2022 },
]

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('This is the home page for backend exercise 2.2');
});

app.get('/cars', (req, res) => {
  res.json(cars)
})

/*app.get('/cars', (req, res) => {
  const { make, model } = req.query; // you can access the query data like this

  let filteredCars = cars;

  if (make) {
    filteredCars = filteredCars.filter(car => car.make.toLowerCase() === make.toLowerCase());
  }

  if (model) {
    filteredCars = filteredCars.filter(car => car.model.toLowerCase() === model.toLowerCase());
  }
  if (filteredCars.length === 0) {
    res.status(404).json({ error: 'No cars matching the query parameters' })
  } else {
    res.json(filteredCars)
  }
});*/

/*app.get('/cars/:id', (req, res) => {
  const carID = parseInt(req.params.id);   // You can retrieve the car id with the help of req.params
  
  const car = cars.find((car) => car.id === carID);

  if(car){
    res.json(car);
  }
  else{
    res.status(404).json({error: 'Car not found'});
  }
});*/

/*app.get('/cars/:make/:model', (req, res) => {
  const make = req.params.make.toLowerCase();
  const model = req.params.model.toLowerCase();

  const filteredCars = cars.filter((car) => car.make.toLowerCase() === make && car.model.toLowerCase() === model);

  res.json(filteredCars);

})*/

app.get('/cars/featured', (req, res) => {
  const isFeaturedRequest = req.header('x-featured-request')

  if (isFeaturedRequest === 'true') {
    const featuredCars = cars.filter((car) => car.year >= 2022)
    res.json(featuredCars)
  } else {
    res.status(400).json({ error: 'Invalid request' })
  }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});