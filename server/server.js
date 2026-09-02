import express from 'express';
import cors from 'cors';
import {config} from 'dotenv';
import apiRouter from './routers/api.routers.js';

config();

const app = express();

app.use(cors());
app.use(express.json());

// Router setup for APIs
app.use('/api', apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is live at http://localhost:${ PORT }`);
});