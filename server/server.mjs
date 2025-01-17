import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
// import expressLayouts from 'express-ejs-layouts';
import ejs from 'ejs'

const app = express();
const port = 3333;

// Получаем путь к текущему файлу
const __filename = fileURLToPath(import.meta.url);

// Получаем директорию текущего файла
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../public/html')));

// Указываем папку с шаблонами
app.set('views', path.join(__dirname, '../public/html/views'));
app.set('view engine', 'ejs');






// Тут будут Роуты через import но пока что так
app.get('/', (req, res) => {
    res.render('home');
});


// import { homeController } from '../controllers/homeController';

// Подключение express-ejs-layouts
// app.use(expressLayouts);

// // стандартный макет
// app.set('layout', '../html/layouts/header.mjs');

// Пока что не работает но очень удобная штука для некоторых других задач
// 
// // Указываем EJS как шаблонизатор
// app.set('view engine', 'ejs');

// // Указываем папку для EJS-шаблонов
// app.set('views', path.join(__dirname, '../public/html/templates'));











app.listen(port, () => {
    console.log(`Сервер работает на http://localhost:${port}`);
});