import React from "react";
import PropTypes from 'prop-types';

const Input = ({
    type,value,onChange,placeholder
}) => {
    return (
        <input 
        type= {type}
        value={value}
        onChange={onChange}
        placeholder={placeholder} />

)};
Input.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string
};

export default Input;