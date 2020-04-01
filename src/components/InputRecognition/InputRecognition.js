import React from 'react';
import './InputRecognition.css';

const inputRecognition = () => {
    return (
        <div>
            <div className="center labelInput">
                    {"Link an image in here, and it will identify the face in the picture!"}
            </div>
            <div className = "center">
                <div className = "boxInput">
                    <input type={Text} className="inputBox"/>
                    <div className= "inputSubmit">
                        {"Detect"}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default inputRecognition;