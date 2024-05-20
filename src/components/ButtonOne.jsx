import React, { useState } from "react";

function ButtonOne({ buttonText, bgColor, hoverBgColor, textColor, buttonType, paddingClass, marginClass }) {
    const background = bgColor || "bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500";
    const hoverBackground = hoverBgColor || "hover:bg-gradient-to-b";
    const text = textColor || "text-gray-900";
    const buttonTxt = buttonText || 'add buttonText';
    const type = buttonType || 'button';

    return (
        <div>
            <button
            type={type}
            className={`_story-button_plvvd_35`}
            >
                {buttonTxt}
            </button>

        </div>
    )
}


export default ButtonOne;  



