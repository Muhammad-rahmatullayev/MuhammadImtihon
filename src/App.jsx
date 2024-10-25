import "./App.css";
import React, { useState } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/team";
import Departments from "./pages/departments";
import Timetable from "./pages/timetable";
import Contact from "./pages/Contact";
import Appoint from "./pages/Appoint";
import Magazine from "./pages/Magazine";

function App() {
  const handleButtonClick = (page) => {
    window.location.href = `/${page}`;
    setTimeout(() => {
      navigate("./pages/About.jsx");
    }, 3000);
  };
  const refreshPage = () => {
    window.location.reload();
  };

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <BrowserRouter>
          <nav className="navbar1">
            <div className="lgh">
              <img className="logo" src="/logo.png" alt="" />
              <h1>MEDICENE</h1>
              <p>Diagnostic center</p>
            </div>
            <div className="op">
              <img className="opr" src="/operator.png" alt="" />
              <span>+998(97)589-33-32</span>
              <br />
              <span>+998(88)383-80-84</span>
            </div>
            <div className="email">
              <img className="em" src="/email.png" alt="" />
              <span></span>
              <a className="ema" href="shadowmgrp@gmail.com">
                shadowmgrp@gmail.com
              </a>
            </div>
            <button onClick={toggleDarkMode} className="toggle-button">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </nav>
          <nav className="Navbar">
            <ul className="menu">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/team">TEAM</Link>
              </li>
              <li>
                <Link to="/departments">DEPARTMENTS</Link>
              </li>
              <li>
                <Link to="/timetable">TIMETABLE</Link>
              </li>
              <li>
                <Link to="/Appoint">APPOINTMENTS</Link>
              </li>
            </ul>
            <div className="website">
              <a href="https://www.youtube.com/">
                <img className="yt" src="/yt.png" alt="" />
              </a>
              <a href="https://www.instagram.com/">
                <img className="in" src="/inst.png" alt="" />
              </a>
              <a href="https://t.me/rahmatullayev_channel">
                <img className="tg" src="/tlg.png" alt="" />
              </a>
              <Link to="/Magazine">
                <img className="mag" src="/public/basket.png" alt="" />
              </Link>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Appoint" element={<Appoint />} />
            <Route path="/Magazine" element={<Magazine />} />
          </Routes>
        </BrowserRouter>

        <div className="boxes-container">
          <div className="box">
            <img src="/boxicon.png" alt="" className="icon" />
            <h2>Opening Hours</h2>
            <br />
            <h4>Mon–Fri /// 8:00am–7:00pm</h4>
            <br />
            <h4>Saturday /// 9:00am–5:00pm</h4>
            <br />
            <h4>Sunday /// 9:00am–3:00pm</h4>
            <br />
            <button
              className="box-button"
              onClick={() => handleButtonClick("timetable")}
            >
              View Timetable
            </button>
          </div>

          <div className="box">
            <img src="/boxicon.png" alt="" className="icon" />
            <h2>Doctors’ timetable</h2>
            <br />
            <p>The following is for guidance only to</p>
            <p>help you plan your appointment with</p>
            <p>a preferred doctor or nurse. It does</p>
            <p>attending to other duties.</p>
            <button
              className="box-button"
              onClick={() => handleButtonClick("timetable")}
            >
              View Timetable
            </button>
          </div>

          <div className="box">
            <img src="/boxicon.png" alt="" className="icon" />
            <h2>Appointments</h2>
            <br />
            <p>The first step towards a healthy life is</p>
            <p>to schedule an appointment. Please</p>
            <p>contact our office by phone or</p>
            <p>form shadow.</p>
            <button
              className="box-button"
              onClick={() => handleButtonClick("Appoint")}
            >
              Appoint
            </button>
          </div>

          <div className="box">
            <img src="/boxicon.png" alt="" className="icon" />
            <h2>Emergency Cases</h2>
            <br />
            <h2>1-800-1234-567</h2>
            <p>Please enter Username</p>
            <p>Call us!</p>
            <button
              className="box-button"
              onClick={() => handleButtonClick("contact")}
            >
              Contact Page
            </button>
          </div>
        </div>

        <div className="middle">
          <div className="middlepage">
            <h1>What Makes Us Different</h1>
            <div className="middlepageicons">
              <div className="firsticonword">
                <img className="middleicons" src="/plant.png" alt="" />
                <h3>Qualified Specialists</h3>
                <p>
                  We hire the best specialists to deliver top-notch diagnostic
                  services for you.
                </p>
              </div>
              <div className="secondiconword">
                <img className="middleicons" src="/bone.png" alt="" />
                <h3>Modern Equipment</h3>
                <p>
                  We use the first-class medical equipment for timely
                  diagnostics of various diseases.
                </p>
              </div>
              <div className="thirdiconword">
                <img className="middleicons" src="/brain.png" alt="" />
                <h3>Emergency Diagnostics</h3>
                <p>
                  Our emergency diagnostics services help you get the most
                  accurate diagnosis in a minimal time.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="conta">
          <div className="secondpage">
            <div>
              <h1 className="allk">All Kinds</h1>
              <br />
              <h1 className="ofd">of Diagnostics</h1>
              <br />
              <br />
              <br />
              <p className="lo1">
                Medina offers the region’s most comprehensive range of
              </p>
              <p className="lo">diagnostic services, from MRI to X-ray.</p>
              <br />
              <button
                className="btc"
                onClick={() => handleButtonClick("Magazine")}
              >
                FREE CONSULTATION
              </button>
            </div>
          </div>
        </div>

        <div className="focus">
          <div className="cube">
            <div className="face front">MEDICENE</div>
            <div className="face back">MEDICENE</div>
            <div className="face left">MEDICENE</div>
            <div className="face right">MEDICENE</div>
            <div className="face top">MEDICENE</div>
            <div className="face bottom">MEDICENE</div>
          </div>
          <div className="box">
            <img src="/user2.jpg" alt="" className="icon" />
            <h4>I had a colonoscopy at Medina Diagnostic</h4>
            <h4>Center. From the moment I entered the center, I</h4>
            <br />
            <h4>was greeted and treated warmly and</h4>
            <br />
            <h4>respectfully and it was the best experience.</h4>
            <br />
            <button
              className="box-button"
              onClick={() => handleButtonClick("Team ")}
            >
              TEAM
            </button>
          </div>

          <div className="box">
            <img src="/user1.jpg" alt="" className="icon" />
            <h4>I would like to thank and compliment the staff</h4>
            <h4>The following is for guidance only to</h4>
            <h4>help you plan your appointment with</h4>
            <h4>a preferred doctor or nurse. It does</h4>
            <h4>attending to other duties.</h4>
            <button
              className="box-button"
              onClick={() => handleButtonClick("Team ")}
            >
              TEAM
            </button>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-left">
            <div>
              <h1 className="cn">MEDICENE</h1>
            </div>
            <div className="social-icons">
              <a href="https://www.youtube.com/">
                <img className="yt" src="/yt.png" alt="" />
              </a>
              <a href="https://www.instagram.com/">
                <img className="in" src="/inst.png" alt="" />
              </a>
              <a href="https://t.me/rahmatullayev_channel">
                <img className="tg" src="/tlg.png" alt="" />
              </a>
              <a href="https://t.me/rahmatullayev_channel">
                <img className="tg" src="/tw.png" alt="" />
              </a>
            </div>
            <p className="copy">
              &copy; 2024 Medicena diagnostic center. Privacy Policy
            </p>
          </div>
          <div>
            <h2 className="cn">CONTACT US</h2>
            <br />
            <a
              className="sa"
              href="https://www.google.com/maps/place/Iqtidor+IT+Academy/@39.1175899,66.8887899,17z/data=!3m1!4b1!4m6!3m5!1s0x3f4cbb686357ed39:0xfd13d5677a926088!8m2!3d39.1175858!4d66.8936554!16s%2Fg%2F11stzb23zz?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"
            >
              1-800-1234-567, 1-800-3214-321
            </a>
            <br />
            <br />
            <p className="pl">
              2130 Fulton Street San Diego, CA 94117-1080 USA
            </p>
            <br />
            <p className="pl">shadowrpmg@gmail.com</p>
          </div>
          <div className="footer-right">
            <h2 className="cn">NEWS LETTER</h2>
            <p className="pl">Enter your email address to receive up-to-date</p>
            <p className="pl">news, new patient information and other useful</p>
            <p className="pl">stuff, delivered right to your inbox.</p>

            <input type="email" placeholder="Emailni kiriting" />
            <button onClick={refreshPage}>SUBSCRIBE</button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
