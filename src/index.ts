import express , { Application, Request, Response } from 'express';
import  connectDB from './config/db';
import userRouter from './routes/users';
const app = express();
app.use(express.json());
const port = 3000;
app.use(express.urlencoded({ extended: true }));

connectDB()

app.use('/api/users', userRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});