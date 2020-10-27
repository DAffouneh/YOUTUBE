import axios from'axios';
const KEY="AIzaSyBomKBxsmr0b8IALUB13ECXHlRsk8G0B-c";
export default axios.create({
    baseURL ='https://www.googleapis.com/youtube/v3/',
    params : {
        part : 'snippet',
        maxResults: 8,
        key:KEY
    }

})