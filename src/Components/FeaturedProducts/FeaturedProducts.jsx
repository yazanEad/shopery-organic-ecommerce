import ProductShowcase from "../ProductShowcase/ProductShowcase";
import ProductSection from "../ProductSection/ProductSection";
import SectionTitle from "../SectionTitle/SectionTitle";

function FeaturedProducts({ productShow, topRated, hotDeals, bestSeller }) {
  return (
    <div>
      <div className=" text-center pt-5">
        <SectionTitle title="Featured Products" />
      </div>
      <ProductShowcase productShow={productShow} />
      {/* ??????????????? */}
      <div className="container pb-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gx-3 gy-4  ">
          <div className="col">
            <ProductSection title="Hot Deals" products={hotDeals} />
          </div>
          <div className="col">
            <ProductSection title="Top Rated" products={topRated} />
          </div>
          <div className="col">
            <ProductSection title="Best Seller" products={bestSeller} />
          </div>
          <div className="col d-none d-xl-block">
            <div style={{ height: "400px", backgroundColor: "red" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts
