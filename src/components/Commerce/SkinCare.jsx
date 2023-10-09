import ProductMajorCard from "./ProductMajorCard";

const SkinCareProduct = () => {
  return (
    <div className="trending-product-container">
      <div className="product-ind"> Skin Care</div>
      <div className="product-card-row">
        <ProductMajorCard />
        <ProductMajorCard />
        <ProductMajorCard />
        <ProductMajorCard />
        <ProductMajorCard />
        <ProductMajorCard />
        <ProductMajorCard />
        <ProductMajorCard />
        <ProductMajorCard />
      </div>
    </div>
  );
};

export default SkinCareProduct;
