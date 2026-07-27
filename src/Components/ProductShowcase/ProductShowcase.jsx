import ProductCard from "./ProductCard";

function ProductShowcase({ productShow }) {
  return (
    <div>
      <div className="container pb-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5  g-4 mt-1">
          {productShow.map((product) => (
            <div className="col" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductShowcase
