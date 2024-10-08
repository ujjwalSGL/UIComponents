import React from 'react';

const Card = ({ title, content, image, buttonText, onButtonClick }) => {
    return (
        <div className="max-w-sm rounded mx-32 shadow-lg bg-white">
            {image && (
                <img className="w-full h-48 object-cover" src={image} alt={title} />
            )}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {content}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button
                    className="bg-blue-500 hover:bg-zinc-400 text-white font-bold py-2 px-4 rounded-2xl"
                    onClick={onButtonClick}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};
export default Card;