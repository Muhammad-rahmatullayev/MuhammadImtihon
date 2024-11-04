import "./App.css";
import React, { useState } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { DarkModeProvider } from "./DarkModeContext";
import DarkModeSwitcher from "./DarkModeSwitcher";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/team";
import Departments from "./pages/departments";
import Timetable from "./pages/timetable";
import Contact from "./pages/Contact";
import Appoint from "./pages/Appoint";
import Magazine from "./pages/Magazine";
import Statistic from "./pages/Statistic";
import Sign from "./pages/Sign";
import NotFound from "./pages/NotFound";
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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleRegister = () => {
    if (email && password && isChecked) {
      localStorage.setItem("user", JSON.stringify({ email, password }));
      alert("Ma'lumotlar saqlandi!");
      setIsModalOpen(false);

      setEmail("");
      setPassword("");
      setIsChecked(false);
    }
  };

  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState("");
  const [senderName, setSenderName] = useState("Anonymous");

  const sendCommentToTelegram = async () => {
    if (!comment) {
      alert("Please write a comment before submitting");
      return;
    }

    const botToken = "YOUR_TELEGRAM_BOT_TOKEN";
    const chatId = "YOUR_CHAT_ID";
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const message = `Comment from ${senderName}:\n\n${comment}`;

    try {
      await fetch(telegramUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });
      alert("Comment sent successfully!");
      setComment("");
    } catch (error) {
      console.error("Error sending comment:", error);
      alert("Failed to send the comment.");
    }
  };

  return (
    <div className="appp">
      <div className="container">
        <BrowserRouter>
          <nav className="navbar1">
            <div className="lgh">
              <img className="logo" src="/logo.png" alt="" />
              <h1>MEDICENE</h1>
              <span style={{ color: "#c1d9d9" }}>enigmatic shadow</span>
            </div>
            <div className="op">
              <img className="opr" src="/operator.png" alt="" />
              <span style={{ color: "#d0d0d0" }}>+998(97)589-33-32</span>
              <br />
              <span style={{ color: "#d0d0d0" }}>+998(88)383-80-84</span>
            </div>
            <div className="email">
              <img className="em" src="/email.png" alt="" />
              <a
                className="ema"
                style={{ color: "#d0d0d0" }}
                href="shadowmgrp@gmail.com"
              >
                shadowmgrp@gmail.com
              </a>
            </div>

            <div>
              <DarkModeProvider>
                <div
                  style={{
                    padding: "0px",
                    position: "relative",
                    top: "-55px",
                    width: "100px",
                  }}
                >
                  <DarkModeSwitcher />
                </div>
              </DarkModeProvider>
            </div>
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
              <a href="https://github.com/Muhammad-rahmatullayev/MEDICINE">
                <img className="tg" src="/public/github.png" alt="" />
              </a>
            </div>

            <div className="restr">
              <div className="Ap">
                <button onClick={() => setIsModalOpen(true)}>Sign In</button>

                {isModalOpen && (
                  <div className="modal">
                    <div className="modal-content">
                      <span
                        className="close"
                        onClick={() => setIsModalOpen(false)}
                      >
                        &times;
                      </span>
                      <h2>Registration</h2>
                      <input
                        className="emi"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />{" "}
                      <br />
                      <br />
                      <br />
                      <input
                        className="emi"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />{" "}
                      <br /> <br />
                      <label>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => setIsChecked(!isChecked)}
                        />
                        Confirmation
                      </label>{" "}
                      <br />
                      <br />
                      <button
                        onClick={handleRegister}
                        disabled={!email || !password || !isChecked}
                      >
                        Sign In
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button onClick={() => handleButtonClick("Sign")}>Sign up</button>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/About" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Appoint" element={<Appoint />} />
            <Route path="/Magazine" element={<Magazine />} />
            <Route path="/Statistic" element={<Statistic />} />
            <Route path="/Sign" element={<Sign />} />
          </Routes>
        </BrowserRouter>
        <div className="boxes-container">
          <div className="box">
            <img src="/boxicon.png" alt="" className="icon" />
            <h3>Opening Hours</h3>

            <h4>Mon–Fri /// 8:00am–7:00pm</h4>

            <h4>Saturday /// 9:00am–5:00pm</h4>

            <h4>Sunday /// 9:00am–3:00pm</h4>
            <br />
            <button
              className="box-button"
              onClick={() => handleButtonClick("Statistic")}
            >
              STATISTICS
            </button>
          </div>

          <div className="box">
            <img src="/boxicon.png" alt="" className="icon" />
            <h3>Doctors’ timetable</h3>

            <h4>The following is for guidance only to</h4>
            <h4>help you plan your appointment with</h4>
            <h4>a preferred doctor or nurse. It does</h4>
            <h4>attending to other duties.</h4>
            <button
              className="box-button"
              onClick={() => handleButtonClick("timetable")}
            >
              TIMETABLE
            </button>
          </div>

          <div className="box">
            <img src="/boxicon.png" alt="" className="icon" />
            <h3>Appointments</h3>

            <h4>The first step towards a healthy life is</h4>
            <h4>to schedule an appointment. Please</h4>
            <h4>contact our office by phone or</h4>
            <h4>form shadow.</h4>
            <button
              className="box-button"
              onClick={() => handleButtonClick("Appoint")}
            >
              APPOINT
            </button>
          </div>

          <div className="box">
            <img src="/boxicon.png" alt="" className="icon" />
            <h3>Emergency Cases</h3>

            <h3>1-800-1234-567</h3>
            <h4>Please enter Username</h4>
            <h4>Call us!</h4>
            <button
              className="box-button"
              onClick={() => handleButtonClick("contact")}
            >
              NEWS
            </button>
          </div>
        </div>
        <br />
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
        <br />
        <br />
        {/* KSMJDSJIDSSDJHDJ */}
        <div className="mess">
          <button onClick={() => setShowCommentBox(!showCommentBox)}>
            {showCommentBox ? "Close Comments" : "Add Comment"}
          </button>{" "}
          <br />
          <br />
          {showCommentBox && (
            <div style={{ marginTop: "10px" }}>
              <input
                className="messinput"
                type="text"
                placeholder="Your name"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                style={{ display: "block", marginBottom: "5px" }}
              />{" "}
              <br />
              <textarea
                className="messinputt"
                placeholder="Write your comment here"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows="4"
                cols="50"
                style={{ display: "block", marginBottom: "5px" }}
              />{" "}
              <br />
              <button onClick={sendCommentToTelegram}>Send Comment</button>
            </div>
          )}
        </div>{" "}
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* DHBDSHFBDSFHBDSFHSDFDSF */}
        <footer className="footer">
          <div className="footer-left">
            <div>
              <h1 className="cn">MEDICINE</h1>
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
              <a href="https://github.com/Muhammad-rahmatullayev/MEDICINE">
                <img className="tg" src="/public/github.png" alt="" />
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
            <button onClick={refreshPage}>RESTART</button>
            <button
              onClick={scrollToTop}
              style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                padding: "10px 15px",
                fontSize: "16px",
                backgroundColor: "#333",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              ↑
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
