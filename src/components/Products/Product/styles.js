import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "fit content",
  },
  media: {
    margin: ".5rem",
    height: "100%",
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    height: "100%",
    padding: ".5rem",
    display: "flex",
    flexDirection: "column",
  },

  cardTitle: {
    fontSize: ".9rem",
  },
  cardDescription: {
    height: "5rem",
    fontSize: ".9rem",
  },
}));
