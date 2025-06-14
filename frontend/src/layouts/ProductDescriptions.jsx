import { Box, Typography } from "@mui/material";

const ProductDescriptions = ({ title, section = "some" }) => {
  return (
    <Box mb={3}>
      <Typography
        variant="body1"
        color="initial"
        mb={2}
        sx={{
          fontFamily: "Poppins",
          fontSize: "12px",
          fontWeight: "bold",
          textTransform: "capitalize",
        }}
      >
        {section}
      </Typography>
      <Typography
        variant="body1"
        color="initial"
        sx={{
          mx: "20px",
          my: "10px",
          textTransform: "capitalize",
          fontWeight: "300",
          fontSize: "12px",
          fontFamily: "Poppins",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default ProductDescriptions;
