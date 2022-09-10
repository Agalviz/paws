import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    height: "7vh",
    display: "flex",
    gap: "1.5rem",
    color: "white",
    backgroundColor: "#9792E3",
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
  title: {
    color: "white",
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
  },
  image: {
    marginRight: "10px",
    height: "20px",
    width: "20px",
  },
  grow: {
    flexGrow: 1,
  },

  inputRoot: {
    color: "inherit",
  },
  input: {
    padding: ".3rem",
    margin: ".2rem",
    borderRadius: "10px",
    color: "grey",
    fontStyle: "italic",
    fontSize: ".7rem",
    textAlign: "start",
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
      width: "12ch",
    },
  },

  accountCircleIcon: {
    display: "flex",
    alignSelf: "center",
    color: "white",
    margin: "3.2px",
    marginTop: ".5rem",
    display: "content",
  },

  Link: {
    margin: "3.2px",
    padding: "3.2px",
  },
  icon: {
    color: "red",
    height: "2rem",
    width: "2rem",
  },
}));
