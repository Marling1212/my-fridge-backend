const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Hello from your backend!');
});

// Example fridge items route
app.get('/fridge-items', (req, res) => {
  res.json([
    { id: 1, name: 'Milk', quantity: 1 },
    { id: 2, name: 'Eggs', quantity: 12 }
  ]);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});