import { useContext, useState } from "react";
import { Category_Product_Context } from "../../context/Context";
import ShopToolbar from "../../Components/ShopToolbar/ShopToolbar";
import ShopFilters from "../../Components/ShopFilters/ShopFilters";
import {
  mockShopFiltersData,
  mockShopToolbarData,
} from "../../data/mockShopFilters";
import ProductShowcase from "../../Components/ProductShowcase/ProductShowcase";
import "./Shop.css";
import { Link, useSearchParams } from "react-router-dom";

function Shop() {


  let { products } = useContext(Category_Product_Context);
  // console.log(products);

  let [params] = useSearchParams();

  // console.log(params.getAll("rating"));



  let reviewRating = mockShopFiltersData.ratings
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);


  function openFilters() {
    if (window.matchMedia("(max-width: 991.98px)").matches) {
      setIsFiltersOpen(true);
    }
  }

  function closeFilters() {
    setIsFiltersOpen(false);
  }



const category = params.get("category");
const ratings = params.getAll("rating");

const filtersProducts = products.filter((prod) => {
  const matchesCategory = !category || prod.category === category;

  const matchesRating =
    ratings.length === 0 ||
    ratings.some((rating) => prod.rating >= Number(rating));

  return matchesCategory && matchesRating;
});



//  console.log(filtersProducts);


  return (
    <main className="py-5">
      <div className="container">
        <ShopToolbar
          {...mockShopToolbarData}
          onFilterClick={openFilters}
          NumberResults={filtersProducts.length}
        />

        <div className="row gx-2 mt-4">
          <div className="col-12 col-md-6 col-lg-3">
            <div
              id="shop-filters-panel"
              className={`shop-filters-panel offcanvas-lg offcanvas-start${
                isFiltersOpen ? " show" : ""
              }`}
              // tabIndex="-1"
              // role={isFiltersOpen ? "dialog" : undefined}
              // aria-modal={isFiltersOpen ? "true" : undefined}
              // aria-labelledby="shop-filters-panel-title"
            >
              <div className="offcanvas-header d-lg-none">
                <h2
                  id="shop-filters-panel-title"
                  className="shop-filters-panel__title"
                >
                  Filters
                </h2>
                <button
                  className="btn-close"
                  type="button"
                  aria-label="Close filters"
                  onClick={closeFilters}
                />
              </div>

              <div className="offcanvas-body">
                <ShopFilters
                  reviewRating={reviewRating}
                  {...mockShopFiltersData}
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-9">
            {(category || ratings >= 0) && (
              <div className=" shop-page__active-filter d-flex flex-wrap justify-content-between gap-2">
                <div className="d-flex flex-wrap gap-2">
                  {params.get("category") && (
                    <span className="border rounded-pill px-3 py-1">
                      {params.get("category")}
                    </span>
                  )}

                  {ratings.map((rating) => (
                    <span
                      key={rating}
                      className="border rounded-pill px-3 py-1"
                    >
                      rating: {rating}/5
                    </span>
                  ))}
                </div>
                <Link to="/shop">Clear filters</Link>
              </div>
            )}

            <ProductShowcase productShow={filtersProducts} />
          </div>
        </div>
      </div>

      {isFiltersOpen && (
        <button
          className="shop-filters-backdrop offcanvas-backdrop fade show d-lg-none"
          type="button"
          aria-label="Close filters"
          onClick={closeFilters}
        />
      )}
    </main>
  );
}

export default Shop;
