const express = require('express');
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Application's Home Page</h1><br><br><b>Submitted By :</b><br>Name : Zahid Hasan<br>Department : Computer Science and Engineering<br>University of Rajshahi<br>Roll: 1910676144");
});
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);


app.listen(PORT, () => {
    console.log("Server is running.....");
});