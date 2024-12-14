import React from 'react';
const Logo: React.FC<{ width?: number; height?: number }> = ({ width = 50, height = 50 }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 200 240"
        >
            <circle cx="100" cy="100" r="90" fill="#000000" />
            <path
                d="M60 140 L60 60 L140 140 L140 60"
                stroke="white"
                fill="none"
            />
            <text
                x="100"
                y="220"
                fill="white"
                fontSize="48"
                textAnchor="middle"
                fontFamily="Arial, sans-serif"
                fontWeight="bold"
            >
                NOEL
            </text>
        </svg>
    );
};
export default Logo;