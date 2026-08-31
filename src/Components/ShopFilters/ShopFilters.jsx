import { Link } from "react-router-dom";
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
  filters,
  setfilters,
  reviewRating,
  handelRating,
}) {
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
            <label
              key={category.id}
              className="shop-filters__category-option d-flex align-items-center"
            >
              <input
                type="radio"
                name="shop-category"
                value={category.id}
                onChange={() =>
                  setfilters({ ...filters, category: category.name })
                }
              />
              <span>
                {category.name}
                <span className="shop-filters__count">
                  (  
                    {products.filter(
                      (product) => product.category === category.name,
                    ).length}
                  )
                </span>
              </span>
            </label>
          ))}
        </section>
      </FilterSection>

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
            <strong>
              50 — 1500
            </strong>
          </p>
        </section>
      </FilterSection>

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
            <label
              key={rating.value}
              className="shop-filters__rating-option d-flex align-items-center"
            >
              <input
                type="checkbox"
                checked={rating.selected}
                onChange={(e) => {
                  handelRating(rating.value, e);
                }}
              />
              <span
                className="shop-filters__stars d-flex align-items-center"
                aria-hidden="true"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <RatingIcon
                    key={`${rating.value}-filter-star-${index}`}
                    className={index < rating.value ? "is-filled" : "is-empty"}
                  />
                ))}
              </span>
              <span className="shop-filters__rating-label">{rating.label}</span>
            </label>
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
