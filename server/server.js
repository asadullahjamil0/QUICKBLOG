import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRouter.js';

// Initializing express app
const app = express();

// Connect to Database
await connectDB();

//Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send('API is running...'));
app.use('/api/admin', adminRouter);

// Port
const PORT = process.env.PORT || 3000;

// Listening to the server
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})

// Exporting app for testing purpose
export default app;