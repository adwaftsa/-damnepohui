import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3333;

// Получаем путь к текущему файлу
const __filename = fileURLToPath(import.meta.url);

// Получаем директорию текущего файла
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../public/html')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html', 'home.html'));
});









app.listen(port, () => {
    console.log(`Сервер работает на http://localhost:${port}`);
});