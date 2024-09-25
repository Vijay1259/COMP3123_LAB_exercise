const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('Hello Express JS');
});


app.get('/user', (req, res) => {
  const firstname = req.query.firstname || 'Diya'; 
  const lastname = req.query.lastname || 'Patel'; 
  res.json({ firstname, lastname });
});


app.post('/user/:firstname/:lastname', (req, res) => {
  const firstname = req.params.firstname.trim();
  const lastname = req.params.lastname.trim(); 
  res.json({ firstname, lastname });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
