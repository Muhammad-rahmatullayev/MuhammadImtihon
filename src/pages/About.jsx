import "./About.css";
import React, { useState, useEffect } from "react";
function About() {
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

  const [modal, setModal] = useState(null);

  const cards = [
    {
      id: 1,
      img: "/public/aboutcard1.jpg",
      word: "THERAPY",
      modalImg: "/public/aboutcardmod1.jpg",
      modalText:
        "Therapy - This process is aimed at treating certain diseases. Therapy includes medications, physical therapy, exercise, psychological support, and other health care approaches. For example, in cases of infection or inflammation, antibiotics or anti-inflammatory drugs may be prescribed.Medicines - Medicines play a key role in therapy. Medicines suitable for each disease are selected, and dosages are determined depending on the patient's health and individual characteristics. Medicines help control diseases such as infection, high blood pressure, and diabetes.",
      
    },
    {
      id: 2,
      img: "/public/aboutcard2.jpg",
      word: "SURGERY",
      modalImg: "/public/aboutcardmod2.jpg",
      modalText: "Medicine is a scientific field dealing with human health care, disease prevention, diagnosis and treatment. It includes such goals as understanding the organism, studying the causes and processes of diseases, diagnosing and developing effective methods of their treatment.Surgery is a branch of medicine that studies and uses methods of surgical treatment of diseases or injuries. In surgery, the damaged part of the body is cut, tissues are removed or various injuries are repaired. This direction is used to treat various diseases, restore the function of vital organs, reduce pain or make aesthetic changes.",
    },
    {
      id: 3,
      img: "/public/aboutcard3.jpg",
      word: "PEDIATRICS",
      modalImg: "/public/aboutcardmod3.jpg",
      modalText: "Pediatrics is a branch of medicine that deals with the health care and treatment of children. He observes the development of children from birth through adolescence and specializes in the diagnosis and treatment of related disorders. Pediatrics deals with the following aspects Surgery is a branch of medicine that studies and uses methods of surgical treatment of diseases or injuries. In surgery, the damaged part of the body is cut, tissues are removed or various injuries are repaired. This direction is used to treat various diseases, restore the function of vital organs, reduce pain or make aesthetic changes.",
    },
    {
      id: 4,
      img: "/public/aboutcard4.jpg",
      word: "NEUROLOGY",
      modalImg: "/public/aboutcardmod4.jpg",
      modalText: "Neurology is a branch of medicine that studies diseases of the brain, spinal cord, and nervous system. This field deals with the diagnosis, treatment and prevention of diseases related to the nervous system. Neurologists treat problems related to headaches, dizziness, numbness or weakness in the arms and legs, epilepsy, diseases such as Parkinson's disease, Alzheimer's disease, as well as diseases such as stroke and tumors of the nervous system.Neurology is an in-depth study of diseases of the nervous system, helping patients to make the correct diagnosis and take the necessary treatment measures.",
    },
    {
      id: 5,
      img: "/public/aboutcard5.jpg",
      word: "CARDIOLOGY",
      modalImg: "/public/aboutcardmod5.jpg",
      modalText: "The field of cardiology is critical to maintaining heart health, promoting healthy lifestyles, reducing risk factors, and prolonging people's lives through early diagnosis of heart disease. Cardiologists usually treat heart disease using drugs, surgery, or various rehabilitation programs.is a field that studies the heart and blood vessel system. This field deals with the diagnosis, treatment, and prevention of diseases such as heart disease, blood pressure problems, heart failure, and arrhythmias.",
    },
    {
      id: 6,
      img: "/public/aboutcard6.jpg",
      word: "PSYCHIATRY",
      modalImg: "/public/aboutcardmod6.jpg",
      modalText: "Psychiatry is a branch of medicine that deals with the study, diagnosis, treatment and prevention of mental disorders. Psychiatry studies conditions related to mental health problems, including depression, bipolar disorder, schizophrenia, anxiety, trauma, and more. Psychiatrists take a multifaceted approach to assessing patients' mental states and understanding their mental and physical symptoms. Psychiatry uses medication, psychotherapy, and other treatment methods.Psychiatry is an important field aimed at improving the mental state of a person, and it helps to improve the quality of life of people by fighting mental illnesses.",
    },
    
  ];

  const openModal = (card) => setModal(card);

  const closeModal = () => setModal(null);
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
      <br />
      <br />
      <br />

      {/* lgjdhgjdgjdgdui */}

      <div className="aboutpage2">
        <div>
          <h1 style={{textAlign:'center',fontSize:'40px'}}>MEDICINE  DEPARTMENTS</h1>
        </div>
        <div className="card-container">
          {cards.map((card) => (
            <div key={card.id} className="card">
              <img src={card.img} alt={card.word} className="card-image" />
              <h3>{card.word}</h3>
              <button onClick={() => openModal(card)}>VIEW FULL MED ITEMS</button>
            </div>
          ))}

          {modal && (
            <div className="modal">
              <div className="modal-content">
                <img
                  src={modal.modalImg}
                  alt={modal.word}
                  className="modal-image"
                />
                <p>{modal.modalText}</p>
                <button onClick={closeModal} className="close-btn">
                  BACK
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* jsjcsibcsipbhcsihcbsi */}

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
