import { Card, CardMedia } from "@mui/material";

const ProductImage = ({ image }) => {
  return (
    <Card
      sx={{
        // width: "300px",
        textAlign: { xs: "center", lg: "left" },
        transition: "all 0.3s linear",
        "&:hover": {
          transform: "scale(1.3)",

          zIndex: "1",
        },
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt="Whole chicken"
        sx={{
          borderRadius: 2,
          width: "100%",
        }}
      />
    </Card>
  );
};

export default ProductImage;
