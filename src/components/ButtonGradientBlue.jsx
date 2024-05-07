import React, { useState } from "react";

function ButtonGradientBlue({ buttonText }) {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div>
            <button
            onMouseEnter={handleClick}
            onMouseLeave={handleClick}
            style={{
                background: isClicked ? 'linear-gradient(to right, #287ED2, #02DDFB)' 
                : '#BFBBBB',
                transition: 'background-color 0.3s ease',
                width: '15rem',
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                position: "absolute",

            }}>
                {buttonText}
            </button>

        </div>
    )
}


export default ButtonGradientBlue;  