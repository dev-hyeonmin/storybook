import React from "react";
import PropTypes from "prop-types";

export default function Box({ children, title, column }) {
    return (
        <div className={`item-box ${column}`}>
            <div className="box-title">{title}</div>

            <div className="box-content">
                {children}
            </div>
        </div>
    )
}

Option.propTypes = {
    children: PropTypes.children,
    title: PropTypes.string.isRequired,
    column: PropTypes.oneOf(["co2", "co4"]),
};
