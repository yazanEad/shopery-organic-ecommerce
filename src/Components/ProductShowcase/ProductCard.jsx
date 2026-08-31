import { Link, useNavigate } from "react-router-dom";
import { shoperyIcons } from "../../data/data";
import "./ProductCard.css";
import { useContext } from "react";
import { Category_Product_Context } from "../../context/Context";

const formatPrice = (value) => {
  if (value === undefined || value === null || value === "") return "";
  return `$${Number(value).toFixed(2)}`;
};

function ProductCard({product}) {
  // console.log(product.id)
 let { handleAddToCart, isProductInCart } = useContext(
   Category_Product_Context,
 );



  const CartIcon = shoperyIcons.addToCart;
  const WishlistIcon = shoperyIcons.wishlist;
  const QuickViewIcon = shoperyIcons.quickView;
  const RatingIcon = shoperyIcons.ratingStar;


const {
  id,
  title,
  category,
  thumbnail,
  price,
  rating = 0,
  discountPercentage,
} = product;




const discountedPrice = price - price * (discountPercentage / 100);
  const isInCart = isProductInCart(id);
  const navigate = useNavigate();

 console.log(isProductInCart(product.id));
// let buttonAddToCarr = null
// if (isProductInCart(product.id)){
//   buttonAddToCarr = <h1>Aheme</h1>
// }
// console.log(buttonAddToCarr);
  return (
    <Link to={`/shop/${id}`} className="product-card__link">
      <article className="product-card h-100">
        <div className="product-card__media">
          {discountPercentage ? (
            <span className="product-card__sale">
              {typeof discountPercentage === "number"
                ? `Sale ${discountPercentage}%`
                : discountPercentage}
            </span>
          ) : null}

          <img
            className="product-card__image"
            src={thumbnail}
            alt={title}
            loading="lazy"
          />

          <div
            className="product-card__actions"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <button
              className="product-card__action"
              type="button"
              // aria-label={`Add ${title} to wishlist`}
            >
              <WishlistIcon aria-hidden="true" />
            </button>
            <button
              className="product-card__action"
              type="button"
              // aria-label={`Quick view ${title}`}
            >
              <QuickViewIcon aria-hidden="true" />
            </button>
            <button className="product-card__action"> ok</button>
          </div>
        </div>

        <div
          className={`product-card__body${
            isInCart ? " product-card__body--view-cart" : ""
          }`}
        >
          <div className="product-card__details">
            {category ? (
              <p className="product-card__category">{category}</p>
            ) : null}
            <h3 className="product-card__name">{title}</h3>

            <div
              className="product-card__price"
              aria-label={`Price ${formatPrice(price)}`}
            >
              {discountPercentage ? (
                <>
                  <span>{formatPrice(discountedPrice)}</span>
                  <del>{formatPrice(price)}</del>
                </>
              ) : (
                <span>{formatPrice(price)}</span>
              )}
            </div>

            <div
              className="product-card__rating"
              aria-label={`Rating ${rating} out of 5`}
            >
              {Array.from({ length: 5 }, (_, index) => (
                <RatingIcon
                  key={`${title}-star-${index}`}
                  className={
                    index < Math.floor(rating) ? "is-filled" : "is-empty"
                  }
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>

          {isInCart ? (
            <button
              className="product-card_ViewCart d-inline-flex align-items-center justify-content-center gap-1"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                navigate("/shopping-cart");
              }}
            >
              <CartIcon aria-hidden="true" />
              <span>View Cart</span>
            </button>
          ) : (
            <button
              // is-active
              className="product-card__cart"
              type="button"
              // aria-label={`Add ${title} to cart`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // console.log("Add to cart clicked for product :", {
                //   ...product,
                //   quantity:0 });
                handleAddToCart(product);
              }}
            >
              <CartIcon aria-hidden="true" />
            </button>
          )}
        </div>
      </article>
    </Link>
  );
}

export default ProductCard;
