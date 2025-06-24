import express , { Application, Request, Response } from 'express';
import { createClient } from 'redis';
import  connectDB from './config/db';
import userRouter from './routes/users';

const app = express();
app.use(express.json());
const port = 3000;
app.use(express.urlencoded({ extended: true }));

const redisClient = createClient({
    url: 'redis://localhost:6379', // Adjust to your Redis connection string
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));
redisClient.on('connect', () => console.log('Connected to Redis'));

// Connect to Redis
redisClient.connect().catch(console.error);

connectDB()

app.use('/api/users', userRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});