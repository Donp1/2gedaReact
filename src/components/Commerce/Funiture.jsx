import ProductMajorCard from "./ProductMajorCard";

const FurnitureProduct = () => {
  return (
    <div className="trending-product-container">
      <div className="product-ind">Furnitures & Decoration</div>
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

export default FurnitureProduct;
