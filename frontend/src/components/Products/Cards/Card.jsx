import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const ProductCard = (props) => {
  const [{ title, price, id, image }] = useState(props);

  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 600,
        width: 270,
        fontSize: "10px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "10px",
      }}
    >
      <CardMedia
        component="img"
        image={image}
        sx={{
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
          borderRadius: "8px",
        }}
      />
      <CardContent sx={{ paddingLeft: "0" }}>
        <Typography
          variant="body1"
          color="initial"
          whiteSpace="nowrap"
          sx={{ fontFamily: "Poppins", fontWeight: 600, fontSize: "14px" }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          color="green"
          fontWeight="bold"
          my={2}
          sx={{ fontFamily: "Poppins", fontSize: "12px", color: "#34D399" }}
        >
          £{price}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ justifyContent: "space-evenly", padding: 0, margin: "10px 0" }}
      >
        <Button
          disableRipple
          disableFocusRipple
          fullWidth
          sx={{
            bgcolor: "#4CAF50",

            color: "white",
            fontFamily: "Poppins",
            textTransform: "capitalize",
            fontWeight: 600,
            marginTop: "0 auto",
            borderRadius: "10px",
            background: "#34D399",
            transition: "all .5s linear",
            "&:hover": {
              outline: "1px solid rgba(0, 0, 0, 0.1)",
              backgroundColor: "#45a049",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
              transform: "translateY(-5px)",
            },
          }}
        >
          Add to Cart
        </Button>
        <Button
          sx={{
            color: "black",
            fontSize: "10px",
            fontFamily: "Poppins",
            color: "white",
            fontFamily: "Poppins",
            textTransform: "capitalize",
            fontWeight: 600,
            marginTop: "0 auto",
            borderRadius: "10px",
            background: "#34D399",
            border: "none",
            transition: "all .5s linear",
            fontSize: "15px",
            "&:hover": {
              outline: "1px solid rgba(0, 0, 0, 0.1)",
              backgroundColor: "#45a049",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
              transform: "translateY(-5px)",
            },
          }}
          fullWidth
          variant="outlined"
          component={NavLink}
          to={`/product/${id}`}
        >
          Explore...
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
