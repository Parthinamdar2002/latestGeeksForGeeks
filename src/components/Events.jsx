import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { services } from "../constants";
import { logo } from "../assets";
import { mobile } from "../assets";
import { backend } from "../assets";
import { creator } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[280px] xs:h-[363px] w-full'>
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
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[300px] flex justify-evenly items-center flex-col'
      >
        <img
          src={logo}
          alt='web-development'
          className='w-46 h-26 object-contain'
        />

        <h3 className='text-white text-[17px] font-bold text-center'>
            Code@Glance
        </h3>

        <Link to="/events" className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'>Register</Link>

      </div>
    </motion.div>
  </Tilt>
);
const ServiceCard2 = ({ index, title, icon }) => (
  <Tilt className='xs:w-[280px] w-full'>
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
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[300px] flex justify-evenly items-center flex-col'
      >
        <img
          src={logo}
          alt='web-development'
          className='w-46 h-26 object-contain'
        />

        <h3 className='text-white text-[17px] font-bold text-center'>
        Hire Hustle Pseudo Placement Drive
        </h3>

        <Link to="/HireHustle" className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'>Register</Link>

      </div>
    </motion.div>
  </Tilt>
);


const Events = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        {/* <h2 className={styles.sectionHeadText}>Events</h2> */}
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
          <ServiceCard />
          <ServiceCard2/>
      </div>
    </>
  );
};

export default SectionWrapper(Events, "");
