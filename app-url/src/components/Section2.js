import React from "react";
import Sciccors from "./images/Scissors.png";

function Section2 () {
    return(
        <div className="section2-container">
            <div>
                <h2>Lorem Ipsum</h2>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to 
                    demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem 
                    ipsum may be used as a placeholder before the final copy is available.</p>
                    <button className="know-more-btn">Learn More</button>
            </div>
            <div>
                <img src={Sciccors} className="scissor" alt="scissor"/>
            </div>
        </div>
    );
}

export default Section2;