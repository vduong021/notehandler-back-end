require('dotenv').config();
import express, { Request, Response }from 'express';
import { apiRouter } from '../routes/api'

const app = express();

//parse json data
app.use(express.json());
//parse form data
app.use(express.urlencoded({ extended: true })); 

//serve endpoints
app.use('/api', apiRouter);

app.use((req: Request, res: Response, next: any) => {
  const error = new Error('Page missing.');
  res.status(404).send(error);
});

//global error handler
app.use((err: Error, req: Request, res: Response, next: any) => {
  console.log(err);
  res.send('This is the global error handler.');
});//


const port = 3000;
app.listen(port, () => console.log(`The server is listening on port ${port}`));