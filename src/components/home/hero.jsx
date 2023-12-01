import { Button } from "@mui/material";

function Hero() {
    return (
        <div className="hero">
            <div className="left">
                <h1>
                    You’ve got <span>7 book</span>
                </h1>
                <p>
                    Your task today
                </p>
            </div>
            <div className="right">
                <input type="text" placeholder="Enter your name" />
                <Button variant="contained" className="btn">+ Create a book</Button>
            </div>
        </div>
    );
}

export default Hero;