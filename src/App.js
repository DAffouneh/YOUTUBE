import './App.css';
import {useState,useEffect} from 'react';
import Modal from './Modal';
import SearchBar from './SearchBar';
import axios from 'axios';
import VideoList from './videoList';
const App =()=> {
  const KEY="AIzaSyCqj3S1EIjaZ42c_6_ld8ocznqgqrLQHh8";
const[pageToken,setPageToken]=useState("CAoQAA");
const[nextPageToken,setNextPageToken]=useState("");
const[videos,setVideos]=useState([]);
const[error,setError]=useState(false);

useEffect (async ()=> {
  axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&order=viewCount&chart=mostPopular&type=video&key=${KEY}`)
  .then(res => {
  setVideos(res.data.items)
    //console.log(res)    

})
},[])


const searchHandler = async (termFromSearchBar)=>
{
axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&order=viewCount&pageToken=${pageToken}&q=${termFromSearchBar}&type=video&key=${KEY}`)
.then(res => {
  setVideos(res.data.items)
  console.log(res)
})

};

  return (
    <Modal>
       <div className="App">
      <SearchBar clickSearchHandeler={searchHandler}></SearchBar>
      <div>
      <VideoList videos={videos}/>  
    </div>
    </div>
    </Modal>
    
  );

}

export default App;
