import { useParams } from "react-router-dom";
import { shoperyIcons } from "../../data/data";
import "./ProductDetails.css";
import { useContext, useEffect, useState } from "react";
import { Category_Product_Context } from "../../context/Context";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ProductShowcase from "../../Components/ProductShowcase/ProductShowcase";
;

// const productDescription = [
//   "These crisp organic green apples are selected for their bright color, firm texture, and naturally refreshing tart flavor. They are a versatile everyday fruit for lunch boxes, salads, baking, or fresh juices.",
//   "Carefully handled and packed to preserve their quality, each apple brings a clean, juicy bite and the dependable freshness expected from Shopery Organics.",
// ];


  const CartIcon = shoperyIcons.addToCart;
  const WishlistIcon = shoperyIcons.addToWishlist;
  const RatingIcon = shoperyIcons.ratingStar;
  const MinusIcon = shoperyIcons.decrease;
  const PlusIcon = shoperyIcons.increase;
  // const ChevronIcon = shoperyIcons.dropdown;
  const FacebookIcon = shoperyIcons.facebook;
  const TwitterIcon = shoperyIcons.twitter;
  const PinterestIcon = shoperyIcons.pinterest;
  const InstagramIcon = shoperyIcons.instagram;
  // const TagIcon = shoperyIcons.saleTag;
  const LeafIcon = shoperyIcons.leaf;
  // const PlayIcon = shoperyIcons.next;
  // const CheckIcon = shoperyIcons.success;

function ProductDetails() {
  
  let { products, loading, error } = useContext(Category_Product_Context);
  
  let { productId } = useParams();
  let [img, setImg] = useState(null);
  let [imgIndex, setImgIndex] = useState(0);
let {handleAddToCart} = useContext(Category_Product_Context);

let [cartCount, setCartCount] = useState(1);


  useEffect(() => {
    const selectedProduct = products.find(
      (product) => product.id == productId,
    );

    setImg(selectedProduct?.thumbnail ?? null);
    setImgIndex(0);
  }, [products, productId]);


if (loading) {
  return <div>Loading...</div>;
}

if (error) {
  return (
    <main className="product-details">
      <div className="container py-5" role="alert">
        Unable to load product details. Please try again later.
      </div>
    </main>
  );
}

   
  let productDetails = products.find((product) => product.id == productId);

if (!productDetails) {
  return (
    <main className="product-details">
      <div className="container py-5" role="alert">
        Product not found.
      </div>
    </main>
  );
}

 
 
 
 

  const discountedPrice =
    productDetails.price - productDetails.price * (productDetails.discountPercentage / 100);



 
   
  function handleThumbnailClick(image) {
    setImg(image);
  }


const relatedProducts = products
  .filter(
    (product) =>
      product.category === productDetails?.category &&
      product.id !== productDetails?.id,
  )
  .slice(0, 4);

  return (
    <main className="product-details">
      <section
        className="product-details__overview container"
        aria-labelledby="product-details-title"
      >
        <div className="row g-4">
          <div className="col-12 col-lg-6">
            <div className="product-gallery">
              <div
                className="product-gallery__rail"
                aria-label="Product images"
              >
                <div className="product-gallery__thumbnails">
                  {productDetails.images.map((image, index) => (
                    <button
                      className={`product-gallery__thumbnail${
                        index === imgIndex ? " is-active" : ""
                      }`}
                      onClick={() => {
                        handleThumbnailClick(image);
                        setImgIndex(index);
                      }}
                      type="button"
                      key={image}
                      aria-label={`View product image ${index + 1}`}
                    >
                      <img
                        src={image}
                        alt={`${productDetails.title} view ${index + 1}`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="product-gallery__main">
                <img
                  src={img ?? productDetails.thumbnail}
                  alt={productDetails.title}
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <article className="product-info">
              <header className="product-info__header">
                <div className="product-info__title-row d-flex flex-wrap align-items-center">
                  <h1 id="product-details-title">{productDetails.title}</h1>
                  <span className="product-info__stock">
                    {productDetails.availabilityStatus}
                  </span>
                </div>

                <div className="product-info__rating-row d-flex flex-wrap align-items-center">
                  <span
                    className="product-info__stars d-flex align-items-center"
                    aria-label={`Rating ${productDetails.rating} out of 5`}
                  >
                    {Array.from({ length: 5 }, (_, index) => (
                      <RatingIcon
                        key={`product-rating-${index}`}
                        className={
                          index < Math.round(productDetails.rating)
                            ? "is-filled"
                            : "is-empty"
                        }
                        aria-hidden="true"
                      />
                    ))}
                  </span>
                  <span className="product-info__review-count">
                    {productDetails.reviews.length}
                    {productDetails.reviews.length === 1
                      ? " Review"
                      : " Reviews"}
                  </span>
                  <span className="product-info__separator" aria-hidden="true">
                    •
                  </span>
                  <span className="product-info__sku">
                    <strong>SKU:</strong> {productDetails.sku}
                  </span>
                </div>

                <div className="product-info__price-row d-flex flex-wrap align-items-center">
                  {productDetails.discountPercentage && (
                    <del>${productDetails.price.toFixed(2)}</del>
                  )}

                  <strong>${discountedPrice.toFixed(2)}</strong>

                  {productDetails.discountPercentage && (
                    <span>{productDetails.discountPercentage}% Off</span>
                  )}
                </div>
              </header>

              <div className="product-info__summary">
                <div className="product-info__brand-share d-flex flex-wrap align-items-center justify-content-between">
                  <div className="product-info__brand d-flex align-items-center">
                    <strong>Brand:</strong>
                    <span className="product-info__brand-mark d-inline-flex align-items-center">
                      <LeafIcon aria-hidden="true" />
                      <span>{productDetails.brand}</span>
                    </span>
                  </div>

                  <div className="product-info__share d-flex align-items-center">
                    <strong>Share item:</strong>
                    <span className="product-info__socials d-flex align-items-center">
                      <span className="product-info__social is-active">
                        <FacebookIcon aria-hidden="true" />
                      </span>
                      <span className="product-info__social">
                        <TwitterIcon aria-hidden="true" />
                      </span>
                      <span className="product-info__social">
                        <PinterestIcon aria-hidden="true" />
                      </span>
                      <span className="product-info__social">
                        <InstagramIcon aria-hidden="true" />
                      </span>
                    </span>
                  </div>
                </div>

                <p className="product-info__description">
                  {productDetails.description}
                </p>
              </div>

              <div className="product-info__cta d-flex align-items-center">
                <div className="product-info__quantity d-flex align-items-center justify-content-between">
                  <button
                    onClick={() => {
                      setCartCount(cartCount > 1 ? cartCount - 1 : 1);
                    }}
                  >
                    <MinusIcon aria-hidden="true" />
                  </button>
                  <span>{cartCount}</span>
                  <button
                    onClick={() => {
                      setCartCount(cartCount + 1);
                    }}
                  >
                    <PlusIcon aria-hidden="true" />
                  </button>
                </div>

                <button
                  className="product-info__cart d-inline-flex align-items-center justify-content-center"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    handleAddToCart(productDetails, cartCount);
                  }}
                  // disabled={handleClick(productDetails) ? true : false}
                >
                  <span>Add to Cart</span>
                  <CartIcon aria-hidden="true" />
                </button>

                <button
                  className="product-info__wishlist d-inline-flex align-items-center justify-content-center"
                  type="button"
                  aria-label={`Add ${productDetails.title} to wishlist`}
                >
                  <WishlistIcon aria-hidden="true" />
                </button>
              </div>

              <dl className="product-info__details">
                <div className="d-flex flex-wrap">
                  <dt>Category:</dt>
                  <dd>{productDetails.category}</dd>
                </div>
                <div className="d-flex flex-wrap">
                  <dt>Tag:</dt>
                  <dd className="product-info__tags d-flex flex-wrap">
                    {productDetails.tags.map((tag) => (
                      <span
                        className={tag === "apples" ? "is-active" : ""}
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </article>
          </div>
        </div>
      </section>

      {/* <section className="product-description" aria-label="Product information">
        <nav
          className="product-description__tabs"
          aria-label="Product detail sections"
        >
          <button className="is-active" type="button">
            Descriptions
          </button>
          <button type="button">Additional Information</button>
          <button type="button">Customer Feedback</button>
        </nav>

        <div className="product-description__content container">
          <div className="product-description__copy">
            {productDescription.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <ul className="product-description__features">
              <li>
                <CheckIcon aria-hidden="true" />
                Fresh organic apples selected for consistent color and texture.
              </li>
              <li>
                <CheckIcon aria-hidden="true" />
                Bright tart flavor for snacking, salads, baking, and juices.
              </li>
              <li>
                <CheckIcon aria-hidden="true" />
                Packed with care to help preserve natural freshness.
              </li>
              <li>
                <CheckIcon aria-hidden="true" />
                One kilogram of quality fruit from Shopery Organics.
              </li>
            </ul>

            <p>
              Store in a cool place or refrigerate after delivery for the best
              texture and flavor.
            </p>
          </div>

          <aside className="product-description__aside">
            <div className="product-description__media">
              <img
                src="/images/delivery-man-box-vegetables-02.png"
                alt="Fresh organic groceries prepared for delivery"
              />
              <span className="product-description__play" aria-hidden="true">
                <PlayIcon />
              </span>
            </div>

            <div className="product-description__benefits d-flex">
              <div className="product-description__benefit d-flex align-items-center">
                <TagIcon aria-hidden="true" />
                <span>
                  <strong>{productDetails.discountPercentage}% Discount</strong>
                  <small>
                    Save your {productDetails.discountPercentage}% money with us
                  </small>
                </span>
              </div>
              <div className="product-description__benefit d-flex align-items-center">
                <LeafIcon aria-hidden="true" />
                <span>
                  <strong>100% Organic</strong>
                  <small>100% Organic fresh fruit</small>
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section> */}
      <section>
        <div className="text-center">
          <SectionTitle title="Related Products" />
        </div>
        <ProductShowcase productShow={relatedProducts} />
      </section>
    </main>
  );
}

export default ProductDetails;
