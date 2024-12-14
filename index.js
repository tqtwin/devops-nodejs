const express = require('express');
const app = express();
app.get('/',((req, res) => {
    res.send('hello')
}))
app.get('/about',((req, res) => {
    res.send('about')
}))
app.listen(8081, () => {
    console.log(`Server running on port ${8081}`);
});