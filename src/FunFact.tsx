import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";

export default function FunFact() {
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
                            This is a random Fact about Iceland
                            <br />
                            </Typography>
                        </CardContent>
                </React.Fragment>
                </Card>
            </Box>
            <Button variant="contained">Get me a new fun fact</Button>
        </>
        
    )
}