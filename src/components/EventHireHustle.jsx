import React from "react";
import Experience from "./Experience";
import { motion } from "framer-motion";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { imgTest } from "../assets";

const ExperienceCard = ({ experience }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        // icon={
        //   <div className='flex justify-center items-center w-full h-full'>
        //     <img
        //       src={experience.icon}
        //       alt={experience.company_name}
        //       className='w-[60%] h-[60%] object-contain'
        //     />
        //   </div>
        // }
      >
        <div>
          <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
          <br />
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {experience.event_info}
          </p>
        </div>
  
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    );
  };

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        {/* <h2 className={styles.sectionHeadText}>About Us</h2> */}
      </motion.div>

      <div className="mt-5 w-full">
        <img
          src={imgTest}
          alt="Image Alt Text"
          className="w-screen h-screen object-cover object-center w-full"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>



      <p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-10 text-secondary text-[17px] max-w-7xl leading-[30px]'
      >
        Hire Hustle, also known as the Pseudo Placement Drive, is an exciting and innovative event designed to test the skills and abilities of aspiring job seekers. The event comprises three rounds that challenge participants in different areas.
        <br /><br />
        The first round kicks off with an aptitude test conducted on the Kahoot platform. Participants will be presented with a series of questions covering various subjects, including logical reasoning, quantitative analysis, and problem-solving. This round aims to assess their analytical and critical thinking abilities under time constraints, allowing employers to gauge their aptitude for the job.
        <br /><br />
        Following the aptitude round, participants move on to the second round, which involves a spirited debate. Here, participants will be divided into groups and given topics related to current affairs, technology, or business. They must present their arguments and engage in a constructive debate, showcasing their communication skills, knowledge, and ability to think on their feet.
        <br /><br />
        The final round is a thrilling programming competition, where participants will face coding challenges and problem-solving tasks. This round aims to evaluate their programming proficiency, logical reasoning, and ability to write clean and efficient code.
        <br /><br />
        Hire Hustle provides a unique platform for both employers and job seekers to connect and assess each other's potential. The event tests a wide range of skills, from aptitude and communication to programming expertise, ensuring a comprehensive evaluation of the participants. It promises to be an intense and rewarding experience, offering participants an opportunity to showcase their talents and secure their dream job.
      </p>

      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}

        <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
        </div>

    </>
  );
};

export default SectionWrapper(About, "");
