import React, {useRef,useState} from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';
function Video({url, channel, description, song, likes, messages, shares}) {
    const [playing, setPlay] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = ()=>{
        if(playing){
            videoRef.current.pause();
            setPlay(false);
        }
        else{
            videoRef.current.play();
            setPlay(true);
        }
    }

    return (
        <div className="video">
            <iframe   
            loop
            className="video_player" 
            onClick={onVideoPress}
            ref={videoRef}
            //you can have any video source from a cdn
            src={url}>
            </iframe>
            <VideoFooter channel={channel} description={description} song={song}/>
            <VideoSideBar likes={likes} shares={shares} messages={messages}/>
            {/* Video sidebar */}
        </div>
    )
}

export default Video
