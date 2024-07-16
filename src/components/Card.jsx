import React from "react";
const Card = ({title, description, imageUrl}) => {
    return (
        <div className="card">
            {imageUrl &&(
                <img src={imageUrl} alt="img" className="card-img-top" />
            )}
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
        </div>
        
        
    );
};
export default Card;