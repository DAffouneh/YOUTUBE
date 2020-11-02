import './App.css';
import {useState,useEffect} from 'react';
import Modal from './Modal';
import SearchBar from './SearchBar';
import axios from 'axios';
import VideoList from './videoList';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';
import YouTube from './yyy.png';
const App =()=> {
const KEY="AIzaSyCpoVeTpabebZxZnQsydTqIgW6s0KfMKB8";
const[pageToken,setPageToken]=useState("CAoQAA");
const[videos,setVideos]=useState([]);
const[term,setTerm]=useState();
const[show,setShow]=useState(false);

  useEffect (async ()=> {
    axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&order=viewCount&pageToken=${pageToken}&chart=mostPopular&type=video&key=${KEY}`)
    .then(res => {
      setVideos([...videos,...res.data.items])
    })
  },[])
  



const searchHandler = async (termFromSearchBar)=>
{
  console.log("hiiiii")
console.log(pageToken);
  setTerm(termFromSearchBar);
axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&order=viewCount&pageToken=${pageToken}&q=${termFromSearchBar}&type=video&key=${KEY}`)
.then(res => {
  setVideos([...videos,...res.data.items])
  console.log(res)
  setPageToken(res.data.nextPageToken);
  console.log(pageToken);

})
};

const loadMore = ()=>
{
  console.log("hi")
  searchHandler(term);
 
}

const ModalShow =()=>
{
  setShow(!show)
}

const modalremovalHandler =()=>
{
  setShow(false)

}
  return (
    <div>
      <div style={{paddingLeft:'55px'}}>
      <Modal  show={show} modalClosed={modalremovalHandler} >
      <SearchBar clickSearchHandeler={searchHandler}></SearchBar>
        <InfiniteScroll
        dataLength={videos.length}
        next={loadMore}
        hasMore={true}
        loader={<Spinner />}
        >
        <VideoList videos={[...videos]}/>  
        </InfiniteScroll>
    </Modal>
      </div>
      <img onClick={ModalShow} src={YouTube} alt="search" style={{
                paddingLeft:'50px',
                height:'50px',
                width:'50px'
            }}>
              
            </img>
    </div>
   
    
  );

}

export default App;
