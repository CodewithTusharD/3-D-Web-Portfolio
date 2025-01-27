import {React, useState} from 'react'
import {motion} from  'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { Link } from 'react-router-dom'


const Hero = () => {

  const [active, setActive] = useState("");

  return (
    // <div>Hero</div>
    <section id="about" className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} abolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5"> 
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className=" text-[#915eff]">Tushar</span></h1>
          <p className={`${styles.heroSubText}  mt-2 text-white-100`}>I specialize in crafting efficient, high-performance solutions that excel across both frontend and backend development, blending intuitive design with robust architectures to solve real-world problems and drive innovation.
          
          </p>
          {/* <p className={`${styles.heroSubText} mt-2 text-white-100  hidden sm:block`}>I specialize in creating efficient, high-performance solutions that excel across both frontend and backend development. Whether it's designing intuitive user experiences or building robust architectures, I thrive on delivering impactful solutions that solve real-world problems and drive innovation.</p> */}
        </div>
        
      </div>
      
      <div className="relative w-full h-screen flex flex-col items-center justify-center gap-5 px-5 ">
          <ComputersCanvas />   


          <div className="absolute xs:bottom-45 bottom-16 w-full flex justify-center items-center -mt-5" >

          <Link to="/#about">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                <motion.div
                  animate={{ y: [0, 24, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                  className="w-3 h-3 rounded-full bg-secondary mb-1"
                />
              </div>
          </Link>


        </div>
        
        
      </div>
      
      
    </section>

  )
}

export default Hero

// import { React, Suspense, useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
// import CanvasLoader from "./Loader";

// const Hero = () => {
//   const [text, setText] = useState("");
//   const [isTyping, setIsTyping] = useState(true);

//   // Typewriter content
//   const content ="I  specialize in creating efficient, high-performance solutions that excel across both frontend and backend development. Whether it's designing intuitive user experiences or building robust architectures, I thrive on delivering impactful solutions that solve real-world problems and drive innovation.";

//   useEffect(() => {
//     let index = 0;
//     const typingSpeed = 25; // Speed of typing in ms

//     if (isTyping) {
//       const interval = setInterval(() => {
//         if (index < content.length) {
//           setText((prev) => prev + content[index]);
//           index++;
//         } else {
//           clearInterval(interval);
//           setIsTyping(false); // Typing complete
//         }
//       }, typingSpeed);

//       return () => clearInterval(interval); // Cleanup
//     }
//   }, [isTyping]);

//   return (
//     <section
//       className="relative w-full h-screen mx-auto"
//     >
//       <div
//         className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
//       >
//         {/* Left side violet gradient */}
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915eff]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         {/* Main heading with typewriter */}
//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className=" text-[#915eff]">Tushar</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             {text}
//             {isTyping && <span className="blinking-cursor">|</span>}
//           </p>
//         </div>
//         <br /><br /><br /><br /><br /><br /><br /><br />
//       </div>


//       {/* 3D Model */}
//       <ComputersCanvas />

//       {/* Scroll Down Animation */}
//       <div
//         style={{ marginTop: 100 }}
//         className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"
//       >
//         <a href="#about">
//           <div className=" w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
