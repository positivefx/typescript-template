const express: any = require('express');
const path: any = require('path');

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, '../../client/dist')));


app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})