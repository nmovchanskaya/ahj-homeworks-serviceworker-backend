const Router = require('koa-router');

const router = new Router();

let news = [];

news.push({
    "id": 1,
    "title": `William tells Navalny producers he wants to ‘see how we can help’`,
    "photo": 'https://i.imgur.com/rFpiifs.jpg',
    "date": Date.now()
});
news.push({
  "id": 2,
  "title": `Steven Spielberg debuts his movie memoir 'The Fabelmans'`,
  "photo": 'https://i.imgur.com/rFpiifs.jpg',
  "date": Date.now()
});
news.push({
  "id": 3,
  "title": 'Jean-Paul Belmondo: Legend of French New Wave cinema',
  "photo": 'https://i.imgur.com/rFpiifs.jpg',
  "date": Date.now()
});

console.log(news);

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

router.get('/news', async (ctx) => {
  
    ctx.response.set('Access-Control-Allow-Origin', '*');
  
    console.log(Date.now());

    await timeout(15000);
    
    console.log(Date.now());

    try {
      ctx.response.body = JSON.stringify({ 
        status: "OK",
        news: news
      });
      console.log('responded');
    }
    catch(error) {
        console.log(error);
    }
});

module.exports = router;
