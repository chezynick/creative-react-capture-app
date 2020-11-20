import React from "react";
import Toggle from "./Toggle";
//import styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { AnimateSharedLayout } from "framer-motion";
import { UseScroll } from "./UseScroll";
import { fade } from "../Animation";

const FaqSection = () => {
  const [element, controls] = UseScroll();
  return (
    <Faq variants={fade} animate={controls} initial="hidden" ref={element}>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Asperiores, qui!
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule?" className="question">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Asperiores, qui!
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods?" className="question">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Asperiores, qui!
            </p>
          </div>
        </Toggle>
        <Toggle title="What Products Do You Offer" className="question">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Asperiores, qui!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};
const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
`;
export default FaqSection;
