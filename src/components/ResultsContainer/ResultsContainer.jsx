import React from "react";
import NameCard from "../NameCard/NameCard";
import './ResultsContainer.css';
const ResultsContainer = ({ suggestedNames }) => {
    const suggestNameList = suggestedNames.map(suggestedName => {
        return <NameCard suggestedName={suggestedName} />;
    });
    return (
        <div className="result-container">{suggestNameList}</div>
    );
};

export default ResultsContainer;