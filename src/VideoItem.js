import React from 'react';
const VideoItem =({video})=>
{
    return (
         <div style={{display:'flex', flexDirection:'column'}}>
         <img style={{height:'200px',width:'200px'}} src={video.snippet.thumbnails.medium.url}/>
         <div style={{width:'200px'}}><p>{video.snippet.description}</p></div>
        </div>
      
    );
}
export default VideoItem;