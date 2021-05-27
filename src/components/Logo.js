import React from "react";
import { Avatar } from "@material-ui/core";
import image from "../assets/Images/logo.png";

const Logo = () => {
    return (
        <Avatar
            alt="Remy Sharp"
            style={{
                width: 40,
                height: 40,
            }}
            src={image}
        />
    );
};

export default Logo;
