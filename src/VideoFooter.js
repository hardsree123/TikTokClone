import React from 'react';
import "./VideoFooter.css"
import recIcon from './record.png';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker"

function VideoFooter({channel, description, song}) {
    return (
        <div className="videoFooter">
           <div className="videoFooter_text">
               <h3>{channel}</h3>
               <p>{description}</p>
               <div className="videoFooter_ticker">
                <MusicNoteIcon className="videoFooter_icon" />
                <Ticker mode="smooth">
                    {({index}) =>(
                        <>
                        <p>{song}</p>
                        </>                        
                    )}
                </Ticker>
               </div>
           </div>
           <img className="videoFooter_record" src={recIcon}></img>
        </div>
    )
}

export default VideoFooter
