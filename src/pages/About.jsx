import "./About.css";
import React, { useState, useEffect } from "react";
function About() {
  const boxes = [
    {
      id: 1,
      img: "/user1.jpg",
      text: "Dr.ANNA HEITHWAY:EKG Technician",
      url: "/page1",
    },
    {
      id: 2,
      img: "/user2.jpg",
      text: "Dr.MARY SMITH:Phlebotomist",
      url: "/page2",
    },
    {
      id: 3,
      img: "/user3.jpg",
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
    "/public/slideimage1.jpg",
    "/public/slideimage2.jpg",
    "/public/slideimage3.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // har 3 soniyada slaydni o'zgartiradi
    return () => clearInterval(interval);
  }, [images.length]);
  const handleButtonClick = (page) => {
    window.location.href = `/${page}`;
  };
  return (
    <div className="aabout">
      <div className="abcont">
        <div>
          <h1 className="wordabout">ABOUT</h1> <br />
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
          <span className="wordab">ABOUT</span>
        </div>
      </div>
      <div className="about2">
        <div>
          <h1 className="ab1">A Few Words About Us</h1>
          <br />
          <p className="lor">
            Etiam et imperdiet quam. In sit amet finibus lorem, ac ultricies
            enim. Aliquam volutpat enim diam, vitae elementum ipsum tempor sit
            amet. Ut pellentesque sem nulla, in blandit leo viverra a. Phasellus
            et lacus mattis, tincidunt metus sodales, tincidunt urna. Cras felis
            neque, iaculis vitae varius eu, luctus consectetur odio. Phasellus
            non luctus justo, eu fringilla tortor. Aenean ornare sem sit amet
            rhoncus tincidunt. Cras tempor eu enim id pulvinar. Proin at
            imperdiet felis, vel vehicula neque. Nulla quis nisl facilisis ex
            dignissim euismod eu vel neque.sahdow clone hi evehing night for
            you..hdiibd,work medive=ce dijncicnjc cjdndjndnddnudshq
            kdjsuidsun9dsu djmudhnudxhndhsdhsndhsdjhdhnsu...
          </p>
        </div>

        <div>
          <h2>THE HEART OF MEDICAL CENTER</h2>
          <div className="docc">
            <img className="doc" src="/aboutdoctor.jpg" alt="" />
            <h3>Dr. Scott Riley</h3>
            <p>Chief Medical Officer, Founder</p>
            <p>1-800-1234-567</p>
          </div>
          <p>
            Proin accumsan ultricies tincidunt. Morbi semper enim a nulla
            vulputate pellentesque. Sed nulla tellus, gravida vel placerat vel,
            euismod at neque.
          </p>
        </div>
      </div>
      <div className="q">
        <img className="de" src="/de1.jpg" alt="" />
        <div>
          <h1>Our Achievements</h1> <br />
          <br />
          <br />
          <br />
          <p className="m">The Best Medical Center 2015</p>
          <p className="m">The Best Diagnostics Award</p>
          <p className="m">Certified by the AMA and IAMH</p>
          <p className="m">Global Health Contributor</p>
        </div>
      </div>
      <div>
        <h1 className="our">OUR TEAM</h1>
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
      </div>
      <br />
      <br />
      <br />
      <div className="slider">
        <img
          src={images[currentImageIndex]}
          alt="slider image"
          className="slider-image"
        />
      </div>
    </div>
  );
}

export default About;
