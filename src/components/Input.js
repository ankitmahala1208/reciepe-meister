// // Input Component
// import React from "react";

// const Input = () => {
//     return <></>;
// };

// export default Input;
import React from "react";
import PropTypes from "prop-types";

const Input = ({ label, onInput, value }) => {
    // const handleChange = (event) => {
    //     onInput(event.target.value);
    // };

    return (
        <div className="input-box">
            <span className="label">{label}</span>
            <input type="text" value={value} onChange={onInput} />
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    // value: PropTypes.string.isRequired,
    onInput: PropTypes.func
};

export default Input;
