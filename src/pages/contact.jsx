import React, { useState } from "react";
import "./contact.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
    window.location.reload();
  };
  return (
    <div>
      <div className="abcont">
        <div>
          <h1 className="wordabout">CONTACT</h1> <br />
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
          <span className="wordab">Contact</span>
        </div>
      </div>

      <div>
        <div className="registration-container">
          <div className="registration-form">
            <h1>Get In Touch</h1>
            <br />
            <p>
              You can contact us any way that is convenient for you. We are
              available 24/7 via fax or email. You can also use a quick contact
              form below or visit our medical center personally.We would be
              happy to answer your questions.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>

          <div className="contact-info">
            <h2>Our Websites</h2>
            <br />
            <div className="website-links">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                YOUTUBE
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                INSTAGRAM
              </a>
              <a
                href="https://t.me/rahmatullayev_channel"
                target="_blank"
                rel="noopener noreferrer"
              >
                TELEGRAM
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TWITTER
              </a>
              <br />
              <br />
            </div>
            <p>Address: 37.7749° N, 122.4194° W</p>
            <p>Phone Numbers: +1 234 567 8901, +1 234 567 8902</p>
            <p>Email: contact@example.com</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio,
              quas pariatur corporis, reprehenderit iste, officia similique
              nihil id necessitatibus iure voluptatibus placeat? Necessitatibus
              ipsa id perspiciatis debitis vitae distinctio, est corrupti
              repudiandae. Animi accusantium assumenda tenetur dicta enim illo
              suscipit harum laboriosam cum? Maiores sint quaerat rerum
              consequatur voluptatum molestiae debitis odit repellat, quidem
              optio vel soluta harum voluptas rem libero iste alias modi
              inventore distinctio accusamus earum temporibus beatae?
              Repellendus dolor dolore repudiandae aliquid, amet, non
              perferendis quae laborum eveniet nulla corrupti itaque eaque
              pariatur sapiente praesentium atque? Iure consectetur assumenda
              dignissimos tempora voluptatibus totam nam labore in ipsam!
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio,
              quas pariatur corporis, reprehenderit iste, officia similique
              nihil id necessitatibus iure voluptatibus placeat? Necessitatibus
              ipsa id perspiciatis debitis vitae distinctio, est corrupti
              repudiandae. Animi accusantium assumenda tenetur dicta enim illo
              suscipit harum laboriosam cum? Maiores sint quaerat rerum
              consequatur voluptatum molestiae debitis odit repellat, quidem
              optio vel soluta harum voluptas rem libero iste alias modi
              inventore distinctio accusamus earum temporibus beatae?
              Repellendus dolor dolore repudiandae aliquid, amet, non
              perferendis quae laborum eveniet nulla corrupti itaque eaque
              pariatur sapiente praesentium atque? Iure consectetur assumenda
              dignissimos tempora voluptatibus totam nam labore in ipsam! Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Odio, quas
              pariatur corporis, reprehenderit iste, officia similique nihil id
              necessitatibus iure voluptatibus placeat? Necessitatibus ipsa id
              perspiciatis debitis vitae distinctio, est corrupti repudiandae.
              Animi accusantium assumenda tenetur dicta enim illo suscipit harum
              laboriosam cum? Maiores sint quaerat rerum consequatur voluptatum
              molestiae debitis odit repellat, quidem optio vel soluta harum
              voluptas rem libero iste alias modi inventore distinctio accusamus
              earum temporibus beatae? Repellendus dolor dolore repudiandae
              aliquid, amet, non perferendis quae laborum eveniet nulla corrupti
              itaque eaque pariatur sapiente praesentium atque? Iure consectetur
              assumenda dignissimos tempora voluptatibus totam nam labore in
              ipsam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
