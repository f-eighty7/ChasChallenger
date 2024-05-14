import React, { useState } from "react";

function ButtonOne({ buttonText, bgColor, hoverBgColor, textColor, buttonType }) {
    const background = bgColor || "bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500";
    const hoverBackground = hoverBgColor || "hover:bg-gradient-to-b";
    const text = textColor || "text-gray-900";
    const buttonTxt = buttonText || 'add buttonText'
    const type = buttonType || 'button'

    return (
        <div>
            <button
            type={type}
            className={`
            ${background} 
            ${hoverBackground} 
            ${text} 
            font-regular py-2 px-4 rounded-full font-medium text-sm text-center me-2 mb-2`}
            >
                {buttonTxt}
            </button>

        </div>
    )
}


export default ButtonOne;  



