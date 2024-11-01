"use client";
import { useState } from 'react';
//ed6f5847-3d77-4390-a179-e2b8a96e3b56
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';



const EmailSection = () => {
  const [result, setResult] = useState("Send Message");

  // Update the event type to React.FormEvent<HTMLFormElement>
  const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.currentTarget); // Use event.currentTarget

    formData.append("access_key", "ed6f5847-3d77-4390-a179-e2b8a96e3b56");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="contact-section">
      {/* First Column (Text & Social Links) */}
      <div className="z-10">
        <h5 data-aos="zoom-in-up" className="section-heading">
          Let's Connect
        </h5>
        <p data-aos="zoom-in-up" className="section-description">
          I am currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I will try my best
          to get back to you.
        </p>
        <div data-aos="zoom-in-up" className="socials">
          <Link href="https://github.com" target="_blank">
            <FaGithub className="social-icon" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <FaLinkedin className="social-icon" />
          </Link>
        </div>
        <div>
          <div data-aos="zoom-in-up" className="contact-info">
            <AiOutlineMail className="email-icon" /> bilqeesshahid@gmail.com
          </div>
          <div data-aos="zoom-in-up" className="contact-info">
            <BsTelephone className="email-icon" /> (021) 000-0000
          </div>
        </div>
      </div>

      {/* Second Column (Form) */}
      <div>
        <form onSubmit={sendMessage} className="form-container">
          <div className="mb-6">
            <label data-aos="zoom-in-up" className="label">
              Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              required
              className="input"
              placeholder="Enter your name.."
            />
          </div>
          <div className="mb-6">
            <label data-aos="zoom-in-up" htmlFor="subject" className="label">
              Email
            </label>
            <input
              name="email"
              type="text"
              id="email"
              required
              className="input"
              placeholder="Enter your email..."
            />
          </div>
          <div className="mb-6">
            <label data-aos="zoom-in-up" className="label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="textarea"
              placeholder="Enter your message..."
            />
          </div>
          <button type="submit" className="submit-button">
            {result}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
