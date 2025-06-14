const getProductAverageRating = (reviews) => {
  return (
    reviews
      ?.map((review) => review.rating)
      .reduce((arg, item) => {
        arg += item;
        return arg;
      }, 0) / reviews.length
  );
};

export default getProductAverageRating;
