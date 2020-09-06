import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (request, response) => response.send('Hello World!!!'));

app.listen(3333, () => console.log('>> Server started on port 3333!'));
