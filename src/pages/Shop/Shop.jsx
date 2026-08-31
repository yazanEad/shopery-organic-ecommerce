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

function Shop() {
  let { products } = useContext(Category_Product_Context);
  // console.log(products);

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  let [filters, setfilters] = useState({ category: "", rating: [] });

  let [reviewRating, setReviewRating] = useState(mockShopFiltersData.ratings);



  function openFilters() {
    if (window.matchMedia("(max-width: 991.98px)").matches) {
      setIsFiltersOpen(true);
    }
  }

  function closeFilters() {
    setIsFiltersOpen(false);
  }


  function handelRating(ratingValue, e) {

    setReviewRating(
      reviewRating.map((rating) =>
        rating.value === ratingValue
          ? { ...rating, selected: e.target.checked }
          : rating,
      ),
    );
    // اذا كان الزر محددًا، أضف قيمة التقييم إلى مصفوفة التقييمات المحددة، وإلا قم بإزالة القيمة من المصفوفة. 
    if (e.target.checked) {
      setfilters({
        ...filters,
        rating: [...filters.rating, ratingValue],
      });
    } else {
      setfilters({
        ...filters,
        rating: [...filters.rating.filter((r) => r !== ratingValue)],
      });
    }
 
  }

  // Math.floor(prod.rating)
  
let filtersProducts = products.filter(prod =>{
  // اضهار جميع المنتجات اذا لم يتم اختيار اي تصنيف
  if (filters.category === "") {
    return true
  }
  // اضهار المنتجات التي تطابق التصنيف المحدد والتصنيف المحدد
    return prod.category === filters.category && filters.rating.length === 0
      ? true
      : filters.rating.includes(Math.floor(prod.rating)) &&
          prod.category === filters.category;
})


 console.log(filtersProducts);


  return (
    <main className="py-5">
      <div className="container">
        <ShopToolbar
          {...mockShopToolbarData}
          filterPanelId="shop-filters-panel"
          isFilterOpen={isFiltersOpen}
          onFilterClick={openFilters}
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
                  filters={filters}
                  setfilters={setfilters}
                  reviewRating={reviewRating}
                  handelRating={handelRating}
                  {...mockShopFiltersData}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-9">
            <ProductShowcase
              productShow={filtersProducts}
            />
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
