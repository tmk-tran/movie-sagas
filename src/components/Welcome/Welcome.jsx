import { Card, CardContent, Typography, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import "./Welcome.css";

export default function() {
    const history = useHistory();

    return (
        <div>
            <Card id="welcome-card">
                <CardContent>
                    <Typography className="welcome-text" variant="h3">
                        WELCOME
                    </Typography>
                    <div className="welcome-image">
                        <img src="http://blogs.studentlife.utoronto.ca/lifeatuoft/files/2015/02/FullSizeRender.jpg" />
                    </div>
                    <Button className="enter" onClick={() => history.push("/home")}>ENTER</Button>
                </CardContent>
            </Card>
        </div>
    );
}