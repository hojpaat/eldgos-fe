import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";

export default function FunFact() {
    const [funFact, setFunFact] = useState('This is the default fun fact');

    const leadNew = () => {
        setFunFact('This is a new fun fact');
    }

    return (
        <>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">
                    <React.Fragment>
                        <CardContent>
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                Random Fun Fact
                            </Typography>
                            <br />
                            <Typography variant="body2" gutterBottom>
                                {funFact}
                                <br />
                            </Typography>
                        </CardContent>
                    </React.Fragment>
                </Card>
            </Box>
            <Button onClick={leadNew} variant="contained">Get me a new fun fact</Button >
        </>

    )
}