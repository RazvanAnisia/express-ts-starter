import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { requestLoggerMiddleware } from './middleware/requestLoggerMiddleware';
import { Response, Request } from 'express';

const app = express();
app.use(express.json());

app.use(requestLoggerMiddleware);
app.use('/', (req: Request, res: Response) => {
  res.send({ message: 'test' });
});

app.use(cors);
const PORT = 5000;

app.listen(PORT, () => {
  /* tslint:disable-next-line */
  console.log(`Listening on port ${PORT}`);
});
