import React from "react";
import PropTypes from "prop-types";

export const Button = ({ primary, notice, backgroundColor, size, label, ...props }) => {
    const isPrimary = primary ? 'primary' : '';
    const isNotice = notice ? 'notice' : ''; 

    return (
        <button
            type='button'
            className={["button", `button--${size}`, isPrimary, isNotice].join(" ")}
            style={backgroundColor && { backgroundColor }}
            {...props}
        >
            {label}
      </button>
    );
};

Button.propTypes = {
    primary: PropTypes.bool,
    notice: PropTypes.bool,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: "medium",
    onClick: undefined,
};
