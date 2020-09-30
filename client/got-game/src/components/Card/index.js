import React from "react";
import "./index.css";

function Card(props) {
    return (
        <div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src="#" alt="character-image"></img>
                    </div>
                    <div className="flip-card-back">
                        <p>Info</p>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Card;