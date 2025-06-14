import { Typography, Box, Button } from "@mui/material";
import ProductCard from "./Cards/Card";
import { randomProducts } from "@/data/products.js";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ProductsCardSection = () => {
  // console.log(randomProducts);

  const productsList = useSelector((state) =>
    state.dummyJson?.products?.products?.slice(0, 4)
  );

  return (
    <>
      <Typography
        variant="body1"
        color="initial"
        textAlign="center"
        sx={{
          fontFamily: "Poppins",
          fontWeight: "bold",
          fontSize: 50,
          margin: "50px 0",
        }}
      >
        Products
      </Typography>

      <Box display="flex" gap={3} flexWrap="wrap" justifyContent="center">
        {productsList ? (
          <>
            {productsList?.map((product) => (
              <ProductCard {...product} />
            ))}
          </>
        ) : (
          <Typography>
            Data is temporarily unavailable. Please try again later.
          </Typography>
        )}
      </Box>

      <Box textAlign="center" margin="50px 0">
        <Button
          disableRipple
          disableElevation
          sx={{
            bgcolor: "#4CAF50",
            color: "white",
            width: "271px",
            maxWidth: "100%",
            borderRadius: "10px",
            fontFamily: "Poppins",
            fontWeight: "bold",
            textTransform: "capitalize",
            transform: "all .3s linear ease",
            background: "#34D399",
            transition: "all .5s linear",
            "&:hover": {
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
              backgroundColor: "#45a049",
              transform: "translateY(-1px)",
            },
          }}
        >
          Load More
        </Button>
      </Box>
    </>
  );
};

export default ProductsCardSection;
