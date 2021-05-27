import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Input } from "@material-ui/core";

const useStyles = makeStyles({
    inputStyle: {
        background: "#000",
        backgroundColor: "#000",
        borderRadius: 3,
        height: 30,
        width: "15rem",
        color: "#fff",
        fontSize: 14,
        paddingLeft: 10,
    },
});

const InputValue = ({ placeholder, onChange }) => {
    const classes = useStyles();
    return (
        <Input
            className={classes.inputStyle}
            onChange={onChange}
            type="text"
            name="name"
            disableUnderline={true}
            placeholder={placeholder}
        />
    );
};

InputValue.defaultProps = {
    placeholder: "Add a city",
};

InputValue.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default InputValue;
