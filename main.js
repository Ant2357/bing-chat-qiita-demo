import dotenv from 'dotenv'
import { BingChat } from 'bing-chat'

dotenv.config();

(async () => {
  const api = new BingChat({
    cookie: process.env.BING_COOKIE
  });

  const res = await api.sendMessage('こんにちは');
  console.log(res.text);
})();