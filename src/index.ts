import config from './config';
import express from 'express';

const app = express();

app.get('/', (_, res) => {
  res.send('¡Omics!');
});

app.listen(config.port, (err) => {
  if (err) {
    return console.error(err);
  }

  return console.log(`[${config.env}] Server is listening on ${config.port}`);
});
