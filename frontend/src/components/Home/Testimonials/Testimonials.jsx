import { Box, Typography, Container } from "@mui/material";
import TestimonalsCard from "./TestimonalsCard";
import testimonials from "./TestimonalsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Testimonals = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Typography
          variant="body1"
          color="initial"
          textAlign="center"
          sx={{
            fontFamily: "Poppins",
            fontWeight: 600,
            color: "#AAAAAA",
          }}
        >
          What are People saying
        </Typography>

        <Swiper
          slidesPerView={3}
          modules={[Navigation, Keyboard, Autoplay]}
          keyboard={{ enabled: true, pageUpDown: true }}
          speed={1000}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="mt-2 flex">
              <Box display="flex">
                <TestimonalsCard
                  image={testimonial.image}
                  name={testimonial.name}
                  location={testimonial.location}
                  quote={testimonial.quote}
                  rating={testimonial.rating}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Testimonals;
