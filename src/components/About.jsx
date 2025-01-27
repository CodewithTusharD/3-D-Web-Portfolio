import React from 'react'
import Tilt from 'react-parallax-tilt'

import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({index, title, icon})=>{
  return (
    <Tilt  className="xs:w-[250px] w-full">
      <motion.div 
      variants={fadeIn("right" , "spring", 0.5*index , 0.75 )}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{
          max:45, scale:1, speed:450 
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] 
        flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} 
          className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
      
    </Tilt>
  )
}

const About = () => {
  return (
    < >
      <motion.div variants={textVariant()} style={{marginTop: "100px"}}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 style={{color:"#ffffff"}} className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      I am a passionate and skilled Full-Stack Developer, adept in creating innovative solutions that bridge real-world challenges with technology. Currently pursuing a B.E. in Electronics and Communications Engineering at Thapar Institute of Engineering and Technology, Tushar specializes in programming (C++, Java, SQL) and web development using modern technologies such as HTML, CSS, JavaScript, React, Node.js, and MySQL.
      <br />
      <a href="https://leetcode.com/u/tdhingra_2003_/" target="_blank" style={{color:"#915eff"}}>LeetCode |</a>
      <a href="https://github.com/CodewithTusharD/" target="_blank" style={{color:"#915eff"}}>| GitHub |</a>
      <a href="https://www.linkedin.com/in/tushar-dhingra-9b8b48230/" target="_blank" style={{color:"#915eff"}}>| Linked-In</a>
      </motion.p>
      
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service,index) =>(
          <ServiceCard key={service.title}
          index={index}{...service}/>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About,"about")