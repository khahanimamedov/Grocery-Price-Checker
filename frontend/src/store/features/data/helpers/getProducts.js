const getProductsData = (product) => {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
    category: product.category,
    price: product.price,
    shippingInformation: product.shippingInformation,
    availabilityStatus: product.availabilityStatus,
    reviews: product.reviews,
    warranty: product.warrantyInformation,
    image: product.thumbnail,
    stock: product.stock,
  };
};

export default getProductsData;
