import Container from "@mui/material/Container";
import HeroSection from "../components/Products/HeroSection";
import ProductsCardSection from "../components/Products/ProductsCardSection";
import MightCardsSection from "../components/Products/MightCardsSection";
import Subscribe from "../components/Home/Subscibe/Subscribe";
import Footer from "../components/Home/Footer/Footer";

function Products() {
  return (
    <>
      <Container maxWidth="xl">
        <HeroSection></HeroSection>
        <ProductsCardSection></ProductsCardSection>
        <MightCardsSection />
        <Subscribe />
      </Container>
    </>
  );
}

export default Products;
