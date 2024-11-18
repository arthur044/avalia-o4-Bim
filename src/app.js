import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import rotas from './routes.js';
// import './repository/connection.js';

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
rotas(app);
app.use(cors());

app.post('/upload', upload.single('file'), (req, res) => {
    res.send(req.file);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});