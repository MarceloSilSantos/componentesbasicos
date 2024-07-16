import React from "react";
import PropTypes from 'prop-types';
//import './Button.css';

const Button  = ({onClick,label,className}) => {
    return (
        <Button className={className} onClick={onClick}>
            {label}
        </Button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Button;