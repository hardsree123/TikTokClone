import React, {useState,useEffect} from 'react';
import Video from './Video';
import './App.css';
import db from './Firebase';

function App() {
  const[videos,setVideos] = useState([]);
  useEffect(() => {
    db.collection('videos').onSnapshot(snapshot=>
      (
        setVideos(snapshot.docs.map(doc=>doc.data()))
      )
      )
  }, [videos]);

  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(({url, channel, song, description, likes, shares, messages})=>(
          <Video
          url ={url}
          channel={channel}
          description={description}
          song={song} 
          likes={likes} 
          shares={shares}
          messages={messages} 
          />  
        ))}
      </div>
    
    </div>
  );
}

export default App;
