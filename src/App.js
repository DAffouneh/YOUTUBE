import './App.css';
import {useState} from 'react';
import Modal from './Modal';
import SearchBar from './SearchBar';
import Youtube from './Youtube'
const App =()=> {
conat[videos,setVideos]=useState([]);
const searchHandler = async (termFromSearchBar)=>
{
  const res = await Youtube.get('./search', {
    params : {
      q:termFromSearchBar
    }
  })
  setVideos(res.data.items)

};



  return (
    <Modal>
       <div className="App">
      <SearchBar clickSearchHandler={searchHandler}></SearchBar>
      
    </div>
    </Modal>
    
  );
}

export default App;
