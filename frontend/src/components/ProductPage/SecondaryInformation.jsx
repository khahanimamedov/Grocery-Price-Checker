import { Box, Typography, Button, Stack, Rating } from "@mui/material";
import { StarRounded, StarBorderRounded } from "@mui/icons-material";

const SecondaryInformation = ({ availabilityStatus, stock, averageRating }) => {
  console.log(averageRating);
  return (
    <Box alignSelf={{ xs: "start", md: "center" }}>
      <Box
        sx={{
          width: { xs: "300px", md: "687px" },
          p: 2,
          borderRadius: "10px",
          bgcolor: "#E5E7EB",
          transition: "all .3s linear",
          "&:hover": {
            bgcolor: "#fff",
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <Typography
          variant="body1"
          color="initial"
          sx={{
            pb: 2,
            fontFamily: "Inter",
            color: "#34D399",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          {availabilityStatus}: {stock}
        </Typography>

        <Rating
          value={averageRating}
          precision={0.1}
          readOnly
          icon={<StarRounded color="green"></StarRounded>}
          emptyIcon={<StarBorderRounded fontSize="inherit" />}
        />

        <Stack gap={2} direction="row">
          <Button
            sx={{
              fontFamily: "Poppins",

              textTransform: "capitalize",
              transition: "all .3s linear",
              "&:hover": {
                bgcolor: "#34D399",
                color: "white",
                border: "none",
              },
            }}
            fullWidth
          >
            Add to Cart
          </Button>
          <Button
            fullWidth
            sx={{
              fontFamily: "Poppins",

              textTransform: "capitalize",
              transition: "all .3s linear",
              "&:hover": {
                bgcolor: "#34D399",
                color: "white",
                border: "none",
              },
            }}
          >
            See Comments
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default SecondaryInformation;
