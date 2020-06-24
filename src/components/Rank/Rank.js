import React from 'react';
import "./Rank.css";

const Rank =({name, entries})=>{
    return (
        <div>
            <div className="center topLabel">
                {`${name}! Your current entry is...`}
            </div>
            <div className="center actualRank">
                {entries}
            </div>
        </div>
    )
}

export default Rank;