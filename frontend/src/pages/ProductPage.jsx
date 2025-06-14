import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import getProductAverageRating from "../helpers/getProductAverageRating";

import {
  Box,
  Stack,
  Container,
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Rating,
  CardActions,
  Link,
  Divider,
} from "@mui/material";
import ProductDescriptions from "../layouts/ProductDescriptions";
import { useEffect, useState } from "react";
import Reviews from "../components/ProductPage/Reviews";
import OveralRating from "../components/ProductPage/OveralRating";
import DescriptionSection from "../components/ProductPage/DescriptionSection";
import ProductImage from "../components/ProductPage/ProductImage";
import MainSideInformation from "../components/ProductPage/MainSideInformation";
import SecondaryInformation from "../components/ProductPage/SecondaryInformation";

const ProductPage = () => {
  const productPageParams = useParams();

  const currentProduct = useSelector(
    (state) => state.dummyJson?.products?.products
  )?.find((item) => item.id == productPageParams.productId);

  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    if (currentProduct?.reviews) {
      const avg = getProductAverageRating(currentProduct?.reviews);

      setAverageRating(Math.round(avg));
    }
  }, [currentProduct?.reviews]);

  function getEntries(sectionValue) {
    return Object.keys(currentProduct || {}).find((entry) => {
      return currentProduct[entry] === sectionValue;
    });
  }

  return (
    <Container>
      <Box
        display="flex"
        justifyContent={{ xs: "center", md: "normal" }}
        alignItems={{ xs: "start", sm: "center" }}
        gap={3}
        flexWrap="wrap"
        sx={{ padding: "20px" }}
      >
        <ProductImage image={currentProduct?.image} />
        <Stack rowGap={1} justifyContent={{ xs: "center", md: "normal" }}>
          <MainSideInformation
            title={currentProduct?.title}
            shippingInformation={currentProduct?.shippingInformation}
            warranty={currentProduct?.warranty}
            price={currentProduct?.price}
          />

          <SecondaryInformation
            availabilityStatus={currentProduct?.availabilityStatus}
            stock={currentProduct?.stock}
            shippingInformation={currentProduct?.shippingInformation}
            price={currentProduct?.price}
            averageRating={averageRating}
          ></SecondaryInformation>
        </Stack>
      </Box>
      <DescriptionSection
        getEntries={getEntries}
        warranty={currentProduct?.warranty}
        description={currentProduct?.description}
        category={currentProduct?.category}
      />

      <Box gap={6} display="flex" justifyContent="space-evenly" flexWrap="wrap">
        <OveralRating averageRating={averageRating} />
        <Reviews reviews={currentProduct?.reviews} />
      </Box>
    </Container>
  );
};

export default ProductPage;
