import { Button } from "@mui/material";
import React, { useState } from "react";
import FunFactCard from "./FunFactCard";

const FunFact: React.FC = () => {
    const [funFact, setFunFact] = useState('This is the default fun fact');

    const getNewFunFact = () => {
        const index = Math.floor(Math.random() * 10);
        fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
            .then((response) => response.json())
            .then(responseJson => {
                if (responseJson[index]) {
                    setFunFact(responseJson[index].title);
                } else {
                    setFunFact("Try again");
                }
            })
            .catch(e => {
                console.log("this is the err: " + e);
                setFunFact("Something went wrong, please try again later.");
            });
    }

    return (
        <>
            <FunFactCard text={funFact} />
            <Button onClick={getNewFunFact} variant="contained">Get me a new fun fact</Button >
        </>
    )
}

export default FunFact;