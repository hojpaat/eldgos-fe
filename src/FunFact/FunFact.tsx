import { Button } from "@mui/material";
import React, { useState } from "react";
import FunFactCard from "./FunFactCard";

const FunFact: React.FC = () => {
    const [funFact, setFunFact] = useState('This is the default fun fact');
    const [counter, setCounter] = useState(1);
    const getNewFunFact = () => {
        setCounter(counter + 1)
        setFunFact('This is a new fun fact ' + counter);
    }

    return (
        <>
            <FunFactCard text={funFact} />
            <Button onClick={getNewFunFact} variant="contained">Get me a new fun fact</Button >
        </>

    )
}

export default FunFact;