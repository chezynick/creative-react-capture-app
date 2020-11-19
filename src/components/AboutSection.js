import React from "react";
import home1 from "../img/home1.png";
//styled
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";

const AboutSection = () => {
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };
  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: { duration: 1, ease: "easeOut", staggerChildren: 1 },
    },
  };
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>

          <Hide>
            <motion.h2>
              Your <span>dreams</span>
            </motion.h2>
          </Hide>

          <Hide>
            <motion.h2>come true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography that you have. We have
          professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera here" />
      </Image>
    </About>
  );
};

export default AboutSection;
