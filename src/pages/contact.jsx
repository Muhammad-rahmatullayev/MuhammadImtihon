import React, { useState, useEffect } from "react";
import "./contact.css";

const initialNews = [
  "A new vaccine has proven its effectiveness against COVID-19.New algorithms are being developed for early detection of diseases and optimization of treatment processes with the help of artificial intelligence. These technologies are proving particularly successful in detecting cancer and heart disease.",
  "New technologies are being implemented in the healthcare sector.Telemedicine services are expanding during the pandemic. The options for remote healthcare for patients have increased, helping to make the healthcare system more efficient.",
  "The use of artificial intelligence in medicine is expanding.Mental health issues have increased during the COVID-19 pandemic. Psychologists and health professionals are developing new approaches to combat stress, anxiety and depression.",
  "New drug research published.New campaigns and programs are being implemented to encourage young people to lead a healthy lifestyle. These programs focus on nutrition, physical activity and mental health.",
  "It is important to educate young people about a healthy lifestyle.A lot of research is being done on the relationship between food and health. New research is identifying foods associated with risk factors for diabetes and cardiovascular disease.",
  "New statistics on heart disease are out.In 2024, heart diseases remain the most common diseases globally. Medical professionals are developing new strategies to maintain heart health.  ",
  "Innovative solutions are being developed in medical care.Research on new drugs and their effects is constantly being updated. In the near future, new drugs are expected to bring innovation to the treatment of patients.",
  "New advice on mental health.The use of immunotherapy and gene therapy to treat cancer is expanding. These methods are highly effective in destroying cancer cells.",
  "Telemedicine has taken its place in healthcare.Innovations in the field of medicine, such as 3D printing and bioprinting, are playing an important role in increasing the possibilities of transplantation and treatment of the human body.",
  "Innovations in the field of medicine, such as 3D printing and bioprinting, are playing an important role in increasing the possibilities of transplantation and treatment of the human body.",
];
function Contact() {
  const [news, setNews] = useState(initialNews);
  const [comments, setComments] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setNews((prevNews) => {
        const newNews = [...prevNews];
        newNews.push(newNews.shift());
        localStorage.setItem("news", JSON.stringify(newNews));
        return newNews;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleCommentChange = (index, comment) => {
    setComments((prev) => ({
      ...prev,
      [index]: comment,
    }));
  };

  const handleCommentSubmit = (index) => {
    const currentComments = comments[index] || "";
    const updatedComments = currentComments + " " + comments[index];
    handleCommentChange(index, updatedComments);
    localStorage.setItem(
      "comments",
      JSON.stringify({ ...comments, [index]: updatedComments })
    );
  };

  return (
    <div>
      <div>
        <div className="abcont">
          <div>
            <h1 className="wordabout">REGISTRATION</h1> <br />
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
            <span className="wordab">REGISTRATION</span>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div style={{ padding: "20px" }}>
        <h1>MEDICINE NEWS</h1>
        <div>
          {news.map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: "20px",
                border: "1px solid rgb(86, 0, 103)",
                padding: "20px",
                borderRadius:'10px 0px 200px 0px'
              }}
            >
              <h2 style={{color:'rgb(200, 200, 200)'}}>{item}</h2>
              <br />
              <br />
              <br />
              <br />
              <input
                className="comment"
                type="text"
                placeholder="Write the comment..."
                value={comments[index] || ""}
                onChange={(e) => handleCommentChange(index, e.target.value)}
              />{" "}
              <br /> <br />
              <button onClick={() => handleCommentSubmit(index)}>
                Leave a comment
              </button>
              <div>
                <br />
                <strong>COMMENTS:</strong> {comments[index] || "NO COMMENTS"}
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Contact;
