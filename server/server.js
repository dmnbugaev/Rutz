import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(cors());
app.use(express.json());

const BOT_TOKEN = process.env.BOT_TOKEN;

app.get('/api/telegram-posts', async (req, res) => {
  try {
    // Простой запрос без фильтров
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`);
    const data = await response.json();
    
    // Возвращаем ВСЁ, что пришло
    res.json({
      success: true,
      raw: data,
      posts: data.result || []
    });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Простой тестовый эндпоинт
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is working' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Test: http://localhost:${PORT}/api/test`);
  console.log(`Posts: http://localhost:${PORT}/api/telegram-posts`);
});