import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    fStyle: {
        backgroundColor: "#414141",
        textAlign: "center",
        padding: "8px",
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
    },
    pStyle: {
        fontSize: 12,
        color: '#b7b3b3'
    },
});

const Footer = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.fStyle}>
            <p className={classes.pStyle}>{children}</p>
        </div>
    );
};
Footer.propTypes = {
    children: PropTypes.string
};
export default Footer;

