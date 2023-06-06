import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send(JSON.stringify({"якийсь ключ" : "якесь значення"}))
})

app.listen(3000, () => {
  console.log('Приклад застосунку, який прослуховує 3000-ий порт!')
})