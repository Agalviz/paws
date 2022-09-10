import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    width: "100%",
    height: "100%",
  },
  media: {
    height: 0,
    margin: ".5rem",

    paddingTop: "56.25%",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },

  itemButton: {
    backgroundColor: "primary",
  },
}));
