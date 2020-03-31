import React from 'react';
import "./Rank.css";

const Rank = () => {
    return (
        <div>
            <div className="center topLabel">
                {"Heyyo! Your current rank is..."}
            </div>
            <div className="center actualRank">
                {"1ST!"}
            </div>
        </div>
    )
}

export default Rank;