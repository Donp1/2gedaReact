import ProductMajorCard from "./ProductMajorCard";

const TrendingProduct = () => {
  return (
    <div className="trending-product-container">
      <div className="product-ind">Trending and Hot</div>
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

export default TrendingProduct;
