import React from 'react'
//import styles
import { About, Description, Image} from '../styles'
import styled from 'styled-components'

const FaqSection = () => {
return (

    <Faq >
        <h2>Any Questions <span>FAQ</span></h2>
        <div className="question">
            <h4>How Do I Start?</h4>
            <div className="answer"><p>Lorem ipsum dolor sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, qui!</p></div>
        <div className="faq-line"></div>
        </div>
        <div className="question">
            <h4>Daily Schedule?</h4>
            <div className="answer"><p>Lorem ipsum dolor sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, qui!</p></div>
            <div className="faq-line"></div>
        </div>
        <div className="question">
            <h4>Different Payment Methods?</h4>
            <div className="answer"><p>Lorem ipsum dolor sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, qui!</p></div>
            <div className="faq-line"></div>
        </div>
        <div className="question">
            <h4>What Products Do You Offer</h4>
            <div className="answer"><p>Lorem ipsum dolor sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, qui!</p></div>
            <div className="faq-line"></div>
        </div>
    </Faq>
)
}
const Faq =styled(About) `  
display:block;
span {
    display:block;

}
.faq-line{
    background:#cccccc;
    height:0.2rem;
    margin:2rem 0rem;
    width:100%;
}
.question {
    padding:3rem 0rem;
    cursor:pointer;
}
.answer{
    padding:2rem 0rem;
    p{
        padding:1rem 0rem;
    }
}
h2 {
    padding-bottom:2rem;
    font-weight:lighter;
}
`
export default FaqSection