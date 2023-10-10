import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        {/* <h2 className={styles.sectionHeadText}>About Us</h2> */}
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-10 text-secondary text-[17px] max-w-7xl leading-[30px]'
      >
        Welcome to the GeeksforGeeks Student Chapter at MGM University! We are a dynamic community of passionate tech enthusiasts, dedicated to fostering a culture of coding, programming, and technical excellence within our campus.
        <br /><br />
        Our mission is simple: to empower students with the knowledge and skills needed to excel in the ever-evolving world of technology. Whether you're a seasoned coder or just starting your journey into the world of programming, our chapter is the perfect place to learn, grow, and connect with like-minded individuals.
        <br /><br />
        What sets us apart is our commitment to providing a platform for students to enhance their technical proficiency through a variety of engaging activities. From coding competitions and hackathons to workshops and seminars led by industry experts, we offer a diverse range of opportunities for you to hone your skills and stay ahead in the tech game.
        <br /><br />
        At GeeksforGeeks Student Chapter, we believe that collaboration is key to success. We encourage teamwork, innovation, and creativity, and we strive to create an inclusive environment where everyone's ideas are valued. Join us, and together, we'll embark on a journey of discovery, problem-solving, and endless possibilities in the world of coding and technology.
        <br /><br />
        Whether you're here to learn, compete, or simply geek out with fellow tech enthusiasts, we welcome you to our vibrant community at MGM University. Together, we'll write lines of code, debug errors, and unlock the limitless potential of technology. Join us, and let's code our way to a brighter future!
      </motion.p>

      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "");
