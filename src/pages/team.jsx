import "./team.css";
import React, { useState, useEffect } from "react";

import "./About.css";
function team() {
  const data = [
    {
      image: "/public/user6.jpg",
      title: "Dr. Scott Riley",
      description: "Chief Medical Officer, Pathologist",
      number: "1-800-1234-567",
      text: "Morbi luctus, lorem ut molestie mattis, arcu nisl\nhendrerit mi, ac ultrices odio arcu a sapien. Morbi a\nmassa blandit.",
    },
    {
      image: "/public/user4.jpg",
      title: "Dr. James Wilson",
      description: "MRI Technologist",
      number: "1-800-1234-567",
      text: "Mauris non cursus elit. Ut congue venenatis nisi, a\nefficitur turpis sodales eu. Cras at mi odio. In platea\ndictumst.",
    },
    {
      image: "/public/user5.jpg",
      title: "Dr. Jane Fowler",
      description: "Clinical Laboratory Technologist",
      number: "1-800-1234-567",
      text: "Aliquam risus urna, posuere in diam nec, eleifend\nbibendum metus. Etiam scelerisque dui id erat facilisis,\naccumsan.",
    },
  ];
  const boxes = [
    {
      id: 1,
      img: "/user1.jpg",
      text: "Dr.ANNA HEITHWAY:EKG Technician",
      url: "/page1",
    },
    {
      id: 2,
      img: "/user8.jpg",
      text: "Dr.MARY SMITH:Phlebotomist",
      url: "/page2",
    },
    {
      id: 3,
      img: "/user5.jpg",
      text: "Dr.JANE FOWLER:Clinical Laboratory Technologist",
      url: "/page3",
    },
    {
      id: 4,
      img: "/user4.jpg",
      text: "SAM MACCALLIN:Histotechnologist",
      url: "/page4",
    },
    {
      id: 5,
      img: "/user5.jpg",
      text: "Dr.JANE FOWLER:Clinical Laboratory Technologist",
      url: "/page5",
    },
    {
      id: 6,
      img: "/user6.jpg",
      text: "Dr.SCOTT RILEY:Chief Medical Officer, Pathologist",
      url: "/page6",
    },
    {
      id: 7,
      img: "/user7.jpg",
      text: "ERIC SNYDER:MRI Technologist",
      url: "/page7",
    },
    {
      id: 8,
      img: "/user8.jpg",
      text: "Dr.MARY SMITH:Phlebotomist",
      url: "/page8",
    },
  ];
  const images = [
    "/public/swipeimage1.jpg",
    "/public/swipeimage2.jpg",
    "/public/swipeimage3.jpg",
    "/public/swipeimage4.jpg",
  ];
  const skills = [
    { name: "Dedication", percentage: 50 },
    { name: "Problem Solving", percentage: 30 },
    { name: "Professionalism", percentage: 97 },
    { name: "Decision-making", percentage: 37 },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="teamcontainer">
      <div className="abcont">
        <div>
          <h1 className="wordabout">TEAM</h1> <br />
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
          <span className="wordab">TEAM</span>
        </div>
      </div>
      <div className="swiper">
        <img
          src={images[currentImageIndex]}
          alt="swiper image"
          className="swiper-image"
        />
        <div className="swiper-buttons">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={currentImageIndex === index ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="teampage2">
        <div className="kl">
          <div>
            <h1>SENIOR NURSE</h1>
            <br />
            <br />
            <img style={{width:"120px"}} src="/public/user3.jpg" alt="" />
            <br />
            <br />
            <h2>Dr. Jane Fowler</h2>
            <p>
              Nullam non odio vitae velit volutpat vulputate tempor eu sapien.
            </p>
            <p>Nullam in posuere orci, ac congue augue.</p>
            <p>
              {" "}
              Donec luctus dignissim est at ultricies. Sed ullamcorper posuere
              leo vitae suscipit.
            </p>
            <p>Aenean ac ex nunc. Phasellus tincidunt tempus enim.</p>
            <p>dolor eget tristique dignissim, augue diam viverra ex, </p>
            <p>Etiam efficitur accumsan condimentum.</p>
            <div>
              <div className="skills-container">
                <h2>Skills</h2>
                {skills.map((skill, index) => (
                  <div className="skill" key={index}>
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-bar">
                      <div
                        className="skill-percentage"
                        style={{ width: `${skill.percentage}%` }}
                      >
                        {skill.percentage}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h1>CERTIFICATES</h1>
            <br />
            <span>
              <img className="sertifikat" src="/public/setifikat.jpg" alt="" />
            </span>
            <span>
              <img className="sertifikat" src="/public/setifikat.jpg" alt="" />
            </span>
            <span>
              <img className="sertifikat" src="/public/setifikat.jpg" alt="" />
            </span>
            <span>
              <img className="sertifikat" src="/public/setifikat.jpg" alt="" />
            </span>
            <span>
              <img className="sertifikat" src="/public/setifikat.jpg" alt="" />
            </span>
          </div>
        </div>
        <div className="kl">
          <div>
            <h1>SENIOR DOCTOR</h1>
            <br />
            <br />
            <img src="/public/user6.jpg" alt="" />
            <br />
            <br />
            <h2>Dr. Scott Riley</h2>
            <p>
              Nullam non odio vitae velit volutpat vulputate tempor eu sapien.
            </p>
            <p>Nullam in posuere orci, ac congue augue.</p>
            <p>
              {" "}
              Donec luctus dignissim est at ultricies. Sed ullamcorper posuere
              leo vitae suscipit.
            </p>
            <p>Aenean ac ex nunc. Phasellus tincidunt tempus enim.</p>
            <p>dolor eget tristique dignissim, augue diam viverra ex, </p>
            <p>Etiam efficitur accumsan condimentum.</p>
            <div>
              <div className="skills-container">
                <h2>Skills</h2>
                {skills.map((skill, index) => (
                  <div className="skill" key={index}>
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-bar">
                      <div
                        className="skill-percentage"
                        style={{ width: `${skill.percentage}%` }}
                      >
                        {skill.percentage}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h1>CERTIFICATES</h1>
            <br />
            <span>
              <img className="sertifikat" src="/public/setifikat.jpg" alt="" />
            </span>
            <span>
              <img className="sertifikat" src="/public/setifikat.jpg" alt="" />
            </span>
            <span>
              <img className="sertifikat" src="/public/setifikat.jpg" alt="" />
            </span>
            <span>
              <img className="sertifikat" src="/public/setifikat.jpg" alt="" />
            </span>
            <span>
              <img className="sertifikat" src="/public/setifikat.jpg" alt="" />
            </span>
          </div>
        </div>
      </div><br /><br /><br /><br />

      <div className="teampage3">
        <div className="boxx">
          {boxes.map((boxxes) => (
            <div key={boxxes.id} className="boxxes">
              <img src={boxxes.img} alt={boxxes.text} />
              <p>{boxxes.text}</p>
              <button
                className="btn"
                onClick={() => handleButtonClick(boxxes.url)}
              >
                FULL PROFIL DEPARTAMENTS{boxxes.text}
              </button>
            </div>
          ))}
        </div>
        <div><br /><br /><br /><br />
          <div className="three-divs-container">
            {data.map((item, index) => (
              <div className="div-box" key={index}>
                <div className="top-section">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="small-image"
                  />
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <span className="number">{item.number}</span>
                  </div>
                </div>
                <div className="bottom-section">
                  {item.text.split("\n").map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default team;
