import "./home.css";
import React from "react";

function Home() {
  document.querySelectorAll(".video").forEach((video) => {
    video.addEventListener("mouseover", () => video.play());
    video.addEventListener("mouseout", () => video.pause());
  });
  return (
    <div>
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

    </div>
  );
}

export default Home;
