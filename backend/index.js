const express = require('express');
const app = express();
const PORT = 5001;
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get('/', (req, res) => {
  res.send('Hello from backend!');
});


app.get('/hello', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 