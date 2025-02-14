import React from "react";
import PropTypes from "prop-types";

const Text = ({ label, onUpdate, value }) => {
    return (
        <div className="text-box">
            <span className="label">{label}</span>
            <textarea
                onChange={(evt) => onUpdate(evt.target.value.replace(/(?:\r)/g, "\n\n"))}
                value={value}
            />
        </div>
    );
};

Text.propTypes = {
    onUpdate: PropTypes.func,
    label: PropTypes.string.isRequired,
    value: PropTypes.string
};

export default Text;
