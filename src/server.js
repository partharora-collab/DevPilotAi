import express from 'express';
import cors from 'cors';
import {config} from 'dotenv';

config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is live at http://localhost:${PORT}`);
})