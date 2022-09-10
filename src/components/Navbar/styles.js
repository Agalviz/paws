import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    gap: ".5rem",
  },
  appBar: {
    height: "7vh",
    color: "white",
    backgroundColor: "#9792E3",
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
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
}));
