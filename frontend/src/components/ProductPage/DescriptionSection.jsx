import { Box } from "@mui/material";
import ProductDescriptions from "@/layouts/ProductDescriptions";

const DescriptionSection = ({
  category,
  description,
  warranty,
  getEntries,
}) => {
  return (
    <Box
      sx={{
        width: "89%",
        maxWidth: "100%",
        borderRadius: "20px",
        padding: "20px",
        bgcolor: "#E5E7EB",
        transition: "all .5s linear",
        cursor: "pointer",
        m: "20px 15px",
        "&:hover": {
          boxShadow: "0px 4px 33px rgba(0, 0, 0, 0.25)",
          bgcolor: "white",
        },
      }}
    >
      <ProductDescriptions title={category} section={getEntries(category)} />
      <ProductDescriptions
        title={description}
        section={getEntries(description)}
      />

      <ProductDescriptions
        title={warranty}
        section={getEntries(warranty)}
      ></ProductDescriptions>
    </Box>
  );
};

export default DescriptionSection;
