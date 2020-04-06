import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({inputURL}) =>{
    return (
        <div className="center">
            <img className="faceDisplay" alt="" src={inputURL} width="600" height="auto"></img>
        </div>
    )
}

export default FaceRecognition;