import { shoperyIcons } from "../../data/data";
import "./ProductCard.css";

const formatPrice = (value) => {
  if (value === undefined || value === null || value === "") return "";
  return `$${Number(value).toFixed(2)}`;
};

function ProductCard({product}) {
  // console.log(product.id)

  const CartIcon = shoperyIcons.addToCart;
  const WishlistIcon = shoperyIcons.wishlist;
  const QuickViewIcon = shoperyIcons.quickView;
  const RatingIcon = shoperyIcons.ratingStar;


const {
  title,
  category,
  thumbnail,
  price,
  rating = 0,
  discountPercentage,
} = product;

const discountedPrice = price - price * (discountPercentage / 100);
  return (
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

        <div className="product-card__actions">
          <button
            className="product-card__action"
            type="button"
            aria-label={`Add ${title} to wishlist`}
          >
            <WishlistIcon aria-hidden="true" />
          </button>
          <button
            className="product-card__action"
            type="button"
            aria-label={`Quick view ${title}`}
          >
            <QuickViewIcon aria-hidden="true" />
          </button>
          <button className="product-card__action"> ok</button>
        </div>
      </div>

      <div className="product-card__body">
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

        <button
          className={`product-card__cart`}
          type="button"
          aria-label={`Add ${title} to cart`}
        >
          <CartIcon aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
