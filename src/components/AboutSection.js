import React from 'react'
import home1 from '../img/home1.png';

const AboutSection= () => {
    return (
    <div>
        <div className="description">
            <div className="title">
                <div className="hide">
                    <h2>We work to make</h2>
                </div>
                <div className="hide">
                    <h2>We work to make</h2>
                </div>
                <div className="hide">
                    <h2>Your <span>dreams</span></h2>
                </div>
                <div className="hide">
                    <h2>come true.</h2>
                </div>
                <p>Contact us for any photography or videography that you have. We have professionals with amazing skills.</p>
            <button>Contact Us</button>
            </div>
            <div className="image">
                <img src={home1} alt="guy with a camera here" />
            </div>
        </div>
    </div>
    )
}

export default AboutSection