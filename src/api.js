const ENDPOINT = 'https://hacker-news.firebaseio.com/v0/';


export const fetchTopStoryIds = (limit = 10) => fetch(ENDPOINT + 'topstories.json')
    .then(r => r.json())
    .then(ids => ids.slice(0, limit));

export const fetchStory = id => fetch(ENDPOINT + `item/${id}.json`).then(r => r.json());

export const fetchStories = ids => Promise.all(ids.map(id => fetchStory(id)));
