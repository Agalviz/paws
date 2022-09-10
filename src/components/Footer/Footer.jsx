import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Toolbar, Typography } from "@material-ui/core";
import twitter from "../../assets/Icon-twitter.svg";
import facebook from "../../assets/Icon-facebook.svg";
import instagram from "../../assets/Icon-instagram.svg";

import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();
  // const location = useLocation();
  return (
    <>
      <Toolbar position="fixed" className={classes.appBar} color="inherit">
        <Typography
          component={Link}
          to="/"
          variant="h6"
          className={classes.title}
        >
          CONTACT US
        </Typography>
        <img
          className={classes.icon}
          src={twitter}
          alt="twitter link"
          height="25px"
        />
        <img
          className={classes.icon}
          src={facebook}
          alt="twitter link"
          height="25px"
        />
        <img
          className={classes.icon}
          src={instagram}
          alt="twitter link"
          height="25px"
        />
      </Toolbar>
    </>
  );
};

export default Footer;
