import React from "react";

function ButtonOne({ buttonText, bgColor, hoverBgColor, textColor, buttonType, paddingClass, marginClass }) {
    // Define as classes padrão
    const background = bgColor || "bg-radial-gradient from-custom-yellow to-custom-green";
    const hoverBackground = hoverBgColor || "hover:bg-radial-gradient";
    const text = textColor || "text-gray-900";
    const buttonTxt = buttonText || 'add buttonText';
    const type = buttonType || 'button';
    const padding = paddingClass || 'px-4 py-2';
    const margin = marginClass || 'm-0';

    return (
        <div className={margin}>
            <button
                type={type}
                className={`${background} ${hoverBackground} ${text} ${padding} border-0 transition-all duration-300 ease-in-out transform rounded-full hover:scale-105 hover:shadow-lg hover:brightness-125 active:brightness-100`}
            >
                {buttonTxt}
            </button>
        </div>
    );
}

export default ButtonOne;


