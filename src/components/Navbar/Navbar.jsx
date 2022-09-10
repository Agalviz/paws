import React from "react";
import { Link, useLocation } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import logo from "../../assets/Rc581c6e7353273b650a7a415ee5cf34f.png";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
          >
            <img
              src={logo}
              alt="paws-nyc"
              height="25px"
              className={classes.image}
            />
            PAWS-NYC
          </Typography>
          {location.pathname === "/" && (
            <Link className={classes.link} to="/social">
              <div className={classes.grow} />
              <p>BLOG</p>
              <ChatBubbleOutlineIcon className={classes.accountCircleIcon} />
            </Link>
          )}
          {location.pathname === "/shop" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="primary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
