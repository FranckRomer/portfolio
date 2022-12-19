import React from 'react'
// import ReactPlayer from 'react-player'
import styles from './VideoFondo.module.css'
// import { Video, CloudinaryContext } from "Cloudinary-react";

const VideoFondo = () => {
  return (
    <div className={styles.Video}>
        {/* <ReactPlayer url={"../../public/video/fondo_video.mp4"} /> */}
        <video 
            src="/video/fondo_video.mp4"
            autoPlay 
            muted
            loop
        ></video>

    </div>
  )
}

export default VideoFondo