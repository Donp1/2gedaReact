import ProductMajorCard from "./ProductMajorCard";

const AutomobileProduct = () => {
  return (
    <div className="trending-product-container">
      <div className="product-ind">Automobile</div>
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

export default AutomobileProduct;
