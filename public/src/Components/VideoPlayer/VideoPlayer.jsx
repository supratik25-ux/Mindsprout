import React from 'react'; 
import './VideoPlayer.css';
import video from "../../assets/project-video.mp4";
import { useRef } from 'react';

const VideoPlayer = ({play,setPlay,playVideo}) => {
    const player=useRef(null);
    const closePlayer=(e)=>{
        if(e.target===player.current){
         playVideo();
        }
    }
    return (
        <div className={`video-player ${play?'':'hide'}`} ref={player}
        onClick={closePlayer}>
        <video src={video}autoPlay muted controls></video>
        </div>
    )
}

export default VideoPlayer
