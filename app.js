import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from './config/config';
import routes from './routes';
import morgan from 'morgan';

const app = express();
const port = config.server.port;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));

app.use('/usuario', routes.usuario);
app.use('/banho', routes.baths);

app.listen(port, () => {
  console.log(`User server listening on port ${port}`);
});