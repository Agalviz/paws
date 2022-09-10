import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  title: {
    marginTop: "2rem",
  },
  emptyButton: {
    backgroundColor: "grey",
    color: "white",
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    minWidth: "150px",
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",
    marginTop: "6%",
    width: "100%",
    justifyContent: "space-between",
  },

  container: {
    height: "91.8vh",
    overflow: "scroll",

    // overflowY: "hidden",
    // overflowX: "hidden",
  },
}));
