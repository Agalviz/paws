import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={Product.name}
      />

      <div className={classes.cardContent}>
        <Typography className={classes.cardTitle} variant="body1" gutterBottom>
          {product.name}
        </Typography>
        <Typography gutterBottom variant="p">
          {product.price.formatted_with_symbol}
        </Typography>
        <br />
        <Typography
          className={classes.cardDescription}
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
        />
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton
            aria-label="add to cart"
            onClick={() => onAddToCart(product.id, 1)}
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
};

export default Product;
