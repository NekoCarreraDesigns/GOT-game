import React, { useState } from "react";
import axios from "axios"
import "./index.css";

function Card(props) {
    const [characters, setCharacters] = useState(null);
    const apiURL = "https://thronesapi.com/v2/Characters/2"

    const getCharacters = async () => {
        const response = await axios.get(apiURL)
        setCharacters(response.data)

    }

    return (
        <div>
            <div className="show-characters">
                <h1>Game of Thrones</h1>
                <h2>fetch data</h2>
                <div>
                    <button className="fetch-button" onClick={getCharacters}>fetch data</button>
                </div>
            </div>
            <div className="display">
                {characters && characters.map((cCharacter, index) => {

                    return (
                        <div key="index">
                            <h3>Character{index + 1}</h3>
                            <h2>{cCharacter.name}</h2>
                            <div>
                                <p>{this.image}</p>
                                <p>{this.character}</p>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )




}

export default Card;