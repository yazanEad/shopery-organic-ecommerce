import { Link, useSearchParams } from "react-router-dom";
import { shoperyIcons } from "../../data/data";
import FilterSection from "./FilterSection";
import "./ShopFilters.css";
import { useContext, useState } from "react";
import {Category_Product_Context} from "../../context/Context"
import ProductSection from "../ProductSection/ProductSection";
const RatingIcon = shoperyIcons.ratingStar;
const ArrowIcon = shoperyIcons.next;

function ShopFilters({
  promotion,
  reviewRating,

}) {

  let [params] = useSearchParams();

  function handelFilterLink(key,value) {

    let newParams = new URLSearchParams(params);
    if(key === "category"){
      newParams.set(key, value);
    }else if(key === "rating"){
      if(newParams.getAll("rating").includes(value.toString())){
        newParams.delete("rating",value);
      }else{
        newParams.append("rating", value);
      }
    }
    
    return `/shop?${newParams.toString()}`;
  }



  let { products, categorys } = useContext(Category_Product_Context);
  let SaleProducts = products
    .filter((products) => products.discountPercentage)
    .slice(0, 3);
  // const discountedPrice = price - price * (discountPercentage / 100);

  let [show, setShow] = useState({
    filter1: true,
    filter2: true,
    filter3: true,
  });

  function handelShow(filterId) {
    setShow((showFilter) => {
      return { ...show, [filterId]: !showFilter[filterId] };
    });
  }

  

  return (
    <aside
      id="shop-filters"
      className="shop-filters"
      aria-label="Product filters"
    >
      {/* // Filter Section for Categories */}
      <FilterSection
        id="shop-filter-categories"
        title="All Categories"
        className="shop-filter-section--categories"
        show={show.filter1}
        handelShow={() => handelShow("filter1")}
      >
        <section
          className={`shop-filters__options ${show.filter1 ? "" : "unshow"}`}
        >
          {categorys.map((category) => (
            <div key={category.id}>
              <Link to={handelFilterLink("category", category.name)}>
                <label
                  for={`shop-category-${category.id}`}
                  className="shop-filters__category-option d-flex align-items-center"
                >
                  <input
                    id={`shop-category-${category.id}`}
                    type="radio"
                    name="shop-category"
                    checked={params.get("category") === category.name}
                  />
                  <span>
                    {category.name}
                    <span className="shop-filters__count">
                      (
                      {
                        products.filter(
                          (product) => product.category === category.name,
                        ).length
                      }
                      )
                    </span>
                  </span>
                </label>
              </Link>
            </div>
          ))}
        </section>
      </FilterSection>
      {/* // Filter Section for Price */}
      <FilterSection
        id="shop-filter-price"
        title="Price"
        className="shop-filter-section--price"
        show={show.filter2}
        handelShow={() => handelShow("filter2")}
      >
        <section
          className={`shop-filters__options ${show.filter2 ? "" : "unshow"}`}
        >
          <div
            className="shop-filters__price-slider position-relative"
            role="img"
          >
            <span className="shop-filters__price-track position-absolute" />
            <span className="shop-filters__price-active position-absolute" />
            <span className="shop-filters__price-thumb shop-filters__price-thumb--start position-absolute" />
            <span className="shop-filters__price-thumb shop-filters__price-thumb--end position-absolute" />
          </div>
          <p className="shop-filters__price-value">
            Price:
            <strong>50 — 1500</strong>
          </p>
        </section>
      </FilterSection>
      {/* // Filter Section for Rating */}
      <FilterSection
        id="shop-filter-rating"
        title="Rating"
        className="shop-filter-section--rating"
        show={show.filter3}
        handelShow={() => handelShow("filter3")}
      >
        <section
          className={`shop-filters__options ${show.filter3 ? "" : "unshow"}`}
        >
          {reviewRating.map((rating) => (
            <div key={rating.value}>
              <Link to={handelFilterLink("rating", rating.value)}>
                <label className="shop-filters__rating-option d-flex align-items-center">
                  <input
                    type="checkbox"
                    checked={params
                      .getAll("rating")
                      .includes(rating.value.toString())}
                    // onChange={(e) => {
                    //   handelRating(rating.value, e);
                    // }}
                  />
                  <span
                    className="shop-filters__stars d-flex align-items-center"
                    aria-hidden="true"
                  >
                    {Array.from({ length: 5 }, (_, index) => (
                      <RatingIcon
                        key={`${rating.value}-filter-star-${index}`}
                        className={
                          index < rating.value ? "is-filled" : "is-empty"
                        }
                      />
                    ))}
                  </span>
                  <span className="shop-filters__rating-label">
                    {rating.label}
                  </span>
                </label>
              </Link>
            </div>
          ))}
        </section>
      </FilterSection>

      <article className="shop-filters__promotion position-relative overflow-hidden">
        <img
          className="shop-filters__promotion-image position-absolute"
          src={promotion.image}
          alt={promotion.imageAlt}
          loading="lazy"
        />
        <div className="shop-filters__promotion-content position-relative">
          <h2>
            <span>{promotion.discount}</span> {promotion.title}
          </h2>
          <p>{promotion.subtitle}</p>
          <Link
            className="shop-filters__promotion-link d-inline-flex align-items-center"
            to={promotion.to}
          >
            {promotion.cta}
            <ArrowIcon aria-hidden="true" />
          </Link>
        </div>
      </article>

      <section
        className="shop-filters__sale-products"
        aria-labelledby="shop-sale-products-title"
      >
        <ProductSection title="Sale Products" products={SaleProducts} />
      </section>
    </aside>
  );
}

export default ShopFilters;
