"use client";
import {useState } from 'react'
import Image from 'next/image'
import React from 'react'


interface PropsType {
  active: boolean; // Assuming it's a boolean
  selectTab: React.ReactNode;
  ;children: React.ReactNode;
}
const Tab_Data= [
  {
  title:"Skills", 
  id:"skills",
  content:(
    <ul  data-aos="zoom-in-up">
      <li data-aos="zoom-in-up">HTML</li>
      <li data-aos="zoom-in-up">CSS</li>
      <li data-aos="zoom-in-up">JavaScript</li>
      <li data-aos="zoom-in-up">Next.JS</li>
      <li data-aos="zoom-in-up">React</li>
      <li data-aos="zoom-in-up">Shadcn</li>
      <li data-aos="zoom-in-up">TailwindCss</li>
   </ul>
  )},
  {
    title:"Education",
    id:"education",
    content:(
      <ul>
        <li data-aos="zoom-in-up">Electronics Engineering.</li>
        <li data-aos="zoom-in-up">Full stack web development,</li>
        </ul>
    )},
    {
      title:"Certification",
      id:"certification",
      content:(
        <ul>
          <li data-aos="zoom-in-up">BE-Electronics,</li>
          <li data-aos="zoom-in-up">Mehran University of Engineering.</li>
          <li data-aos="zoom-in-up">Doing certification of web development</li>
           
       </ul>
      )},
]
const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id:string) => {
    setTab(id);
  };

  return (
    <section id="about">
      <div className="about-grid">
        <Image src="/about.jpg" alt="About Me" width={500} height={500} className="about-image" /> 
        <div className="text-left flex flex-col h-full">
          <h1 data-aos="zoom-in-up" className="about-heading">About Me!</h1>
          <p data-aos="zoom-in-up" className="about-paragraph">
            I am a full stack developer with a passion for creating interactive and responsive web applications.
            I have experience working with HTML, CSS, JavaScript, React, Redux, Next.js, and Git.
          </p>
          <div className="tab-button-wrapper">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certification")} active={tab === "certification"}>
              Certification
            </TabButton>
          </div>
          <div className="tab-content">{Tab_Data.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  );
};

const TabButton: React.FC<PropsType> = ({ active, selectTab, children }) => (
  <button onClick={selectTab} className={`tab-button ${active ? "active" : ""}`}>
    {children}
  </button>
);

  


export default AboutSection
