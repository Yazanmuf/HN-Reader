const ENDPOINT = 'https://hacker-news.firebaseio.com/v0/';


const fetchTopStoryIds = (limit = 10) => fetch(ENDPOINT + 'topstories.json')
    .then(r => r.json())
    .then(ids => ids.slice(0, limit));
