import "./departaments.css";
import React, { useState, useEffect } from "react";

const images = [
  { src: "/public/departslide1.jpg", text: "Health Insurance" },
  { src: "/public/departslide2.jpg", text: "Side Effects" },
  { src: "/public/departslide3.jpg", text: "Blood Pressure " },
  { src: "/public/departslide4.jpg", text: "Physical Examination" },
];
function departments() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="abcont">
        <div>
          <h1 className="wordabout">DEPARTMENTS</h1> <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <a className="wordhome" href="./Home.jsx">
            HOME
          </a>
          <span className="wordab">Departments</span>
        </div>
      </div><br /><br /><br /><br /><br />
      <div className="departpage">
        <div>
          <h1 className="clinic">Clinical Laboratory</h1>
          <p className="wore">
            Sed rutrum, mi sit amet fringilla feugiat, nunc magna ullamcorper
          </p>
          <p className="wore"> lectusn ac congue nisi est ac orci.</p>
          <br />
          <p className="wore">
            Curabitur ultrices, nunc eu maximus tristique, purus ex ullamcorper
            lacus,
          </p>
          <p className="wore">
            vel scelerisque lectus libero sit amet odio. Duis vel enim in erat
            vulputate
          </p>
          <p className="wore">
            tincidunt eu sed nisi. Aenean vehicula, dui at convallis laoreet.
          </p>
          <br />
          <br />
        </div>
        <div>
          <img className="departimage" src="/public/depart1.jpg" alt="" />
        </div>
      </div>
      <div className="departpage2">
        <div>
          <img className="departimage2" src="/public/depart2.jpg" alt="" />
        </div>
        <div>
          <h1 className="clinic2">Best Equipment</h1>
          <p className="wore2">
            Aenean ut felis risus. Suspendisse sed eros urna. Cras euismod vel
          </p>
          <p className="wore2">
            pretium. Phasellus tincidunt sit amet tellus eu gravida. Cras
            tempor, justo
          </p>
          <p className="wore2">
            non lacinia laoreet, lorem orci facilisis sem, ac tristique eros
            metus sit
          </p>
          <p className="wore2">
            vel scelerisque lectus libero sit amet odio. Duis vel enim in erat
            vulputate
          </p>
          <p className="wore2">
            amet nulla. Praesent ultricies nunc neque, quis fermentum velit
            hendrerit id.
          </p>
          <br />
          <br />
        </div>
      </div>
      <div className="departpage">
        <div>
          <h1 className="clinic">Nuclear Medicine </h1>
          <p className="wore">
            Sed rutrum, mi sit amet fringilla feugiat, nunc magna ullamcorper
          </p>
          <p className="wore"> lectusn ac congue nisi est ac orci.</p>
          <br />
          <p className="wore">
            Curabitur ultrices, nunc eu maximus tristique, purus ex ullamcorper
            lacus,
          </p>
          <p className="wore">
            vel scelerisque lectus libero sit amet odio. Duis vel enim in erat
            vulputate
          </p>
          <p className="wore">
            tincidunt eu sed nisi. Aenean vehicula, dui at convallis laoreet.
          </p>
          <br />
          <br />
        </div>
        <div>
          <img className="departimage" src="/public/depart1.jpg" alt="" />
        </div>
      </div><br /><br /><br /><br />
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <div className="text">{image.text}</div>
          </div>
        ))}
      </div>
      <br />
      <br /> <br />
      <br /><br /><br />
    </div>
  );
}

export default departments;
