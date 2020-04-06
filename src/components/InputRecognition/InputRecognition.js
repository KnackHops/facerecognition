import React from 'react';
import './InputRecognition.css';

const inputRecognition = ( { onInputChange, onButtonSubmit } ) => {
    return (
        <div>
            <div className="center labelInput">
                    {"Link an image in here, and it will identify the face in the picture!"}
            </div>
            <div className = "center">
                <div className = "boxInput">
                    {/** INPUT BOX */ }
                    <input
                    className="inputBox"
                    onChange={onInputChange}
                    />
                    {/** BUTTON */ }
                    <button 
                    className= "inputSubmit"
                    onClick={onButtonSubmit}
                    >
                        {"Detect"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default inputRecognition;