import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ inputURL , box}) =>{
    return (
        <div className="center">
            <div className="wrapper">
                <img id="faceDisplay" alt="" src={inputURL} width="600" height="auto"></img>
                <div className="borderFace" style={{top: box.topRow, left: box.leftCol, right: box.rightCol, bottom: box.bottomRow}}>
            </div>
            </div>
        </div>
    )
}

export default FaceRecognition;