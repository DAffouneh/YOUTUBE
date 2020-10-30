import React from 'react';
const VideoItem =({video})=>
{  

    return (
         <div style={{display:'flex', flexDirection:'column'}}>
              <img style={{height:'150px',width:'150px'}} src={video.snippet.thumbnails.medium.url}/>
              <div style={{width:'100px'}}><p style={{fontSize:'5px'}}>{video.snippet.description}</p></div>
        </div>
      
    );
}
export default VideoItem;