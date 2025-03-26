const express = require('express');
const app = express();
const port = 3000;

app.get('/getNumber', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100); // Random number 0-99
    console.log({ number: randomNumber }); // Log what we are sending
    res.json({ number: randomNumber });  // Return the number in a JSON object
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
