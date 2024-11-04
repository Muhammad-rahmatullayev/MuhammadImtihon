import "./home.css";
import React, { useRef, useState } from "react";
function Home() {
  document.querySelectorAll(".video").forEach((video) => {
    video.addEventListener("mouseover", () => video.play());
    video.addEventListener("mouseout", () => video.pause());
  });
  
  const [isPlaying, setIsPlaying] = useState(true);


  const videoRef = useRef(null);


  const handleVideoClick = () => {
    if (isPlaying) {
      videoRef.current.pause(); 
    } else {
      videoRef.current.play(); 
    }
    setIsPlaying(!isPlaying);
  };
  
  return (
    <div className="ved">
      <div className="video-container">
        <a href="https://youtu.be/3rjF8z_cQIk?feature=shared">
          <video class="video" src="/public/suyak.mp4" muted></video>
        </a>
        <a href="https://youtu.be/MZl0IkYKAMw?feature=shared">
          <video class="video" src="/public/suyak2.mp4" muted></video>
        </a>
        <a href="https://youtu.be/3rjF8z_cQIk?feature=shared">
          <video class="video" src="/public/suyak3.mp4" muted></video>
        </a>
        <a href="https://youtu.be/RqmntbR7cmQ?feature=shared">
          <video class="video" src="/public/suyak4.mp4" muted></video>
        </a>
      </div>
      <div className="video-contain" onClick={handleVideoClick}>
      <video
        ref={videoRef}
        src="/public/bigvedio.mp4"
        muted 
        autoPlay
        loop
        className="video-box"
      />
      <style jsx>{`
        .video-contain {
          width:100%;
          height: 700px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          border: 2px solid #333;
        }
        
        .video-box {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border:0;
        }
      `}</style>
    </div><br /><br /><br /><br /><br />

    </div>
  );
}

export default Home;
