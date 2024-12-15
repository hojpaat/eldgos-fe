import { Box, Card, CardContent, Typography } from "@mui/material";
import React, { ReactElement } from "react";

export interface FunFactCardProps {
    text: string
}
const FunFactCard: React.FC<FunFactCardProps> = (props: FunFactCardProps): ReactElement => {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                            Random Fun Fact
                        </Typography>
                        <br />
                        <Typography variant="body2" gutterBottom>
                            {props.text}
                            <br />
                        </Typography>
                    </CardContent>
                </React.Fragment>
            </Card>
        </Box>
    )
}

export default FunFactCard;