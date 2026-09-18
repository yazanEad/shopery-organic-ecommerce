import { useContext } from "react";
import { shoperyIcons } from "../../data/data";
import "./WishlistPage.css";
import { Category_Product_Context } from "../../context/Context";
import { Link } from "react-router-dom";



// const socialItems = [
//   { name: "Facebook", Icon: shoperyIcons.facebook, active: true },
//   { name: "Twitter", Icon: shoperyIcons.twitter },
//   { name: "Pinterest", Icon: shoperyIcons.pinterest },
//   { name: "Instagram", Icon: shoperyIcons.instagram },
// ];

function WishlistProductRow({ product }) {
 let { RemoveFromFavorites, cartItems, handleAddToCart } = useContext(
   Category_Product_Context,
 );
  const RemoveIcon = shoperyIcons.delete;
  const discountedPrice = product.price - product.price * (product.discountPercentage / 100);


  return (
    <tr className="wishlist-view__row">
      <td className="wishlist-view__product-cell">
        <Link to={`/shop/${product.id}`}>
          <div className="wishlist-view__product d-flex align-items-center">
            <img
              className="wishlist-view__image flex-shrink-0"
              src={product.thumbnail}
              alt={product.title}
              width="100"
              height="100"
            />
            <span>{product.title}</span>
          </div>
        </Link>
      </td>
      <td>
        <span className="wishlist-view__mobile-label d-block d-lg-none">
          Price
        </span>
        <div className="wishlist-view__price d-flex align-items-center flex-wrap">
          {product.discountPercentage ? (
            <>
              <span className="visually-hidden">Original price:</span>
              <span>{discountedPrice.toFixed(2)}</span>
              <del>{product.price}</del>
            </>
          ) : (
            <span>{product.price}</span>
          )}
        </div>
      </td>
      <td>
        <span className="wishlist-view__mobile-label d-block d-lg-none">
          Stock Status
        </span>
        <span
          className={`wishlist-view__stock d-inline-block${product.availabilityStatus === "In Stock" ? "" : " wishlist-view__stock--unavailable"} `}
        >
          {product.availabilityStatus}
        </span>
      </td>
      <td className="wishlist-view__actions-cell">
        <div className="wishlist-view__actions d-flex align-items-center">
          <button
            className="wishlist-view__cart btn rounded-pill"
            type="button"
            disabled={
              cartItems.some((item) => item.id === product.id) ||
              product.availabilityStatus === "Out of Stock"
            }
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
          <button
            className="wishlist-view__remove d-inline-flex align-items-center justify-content-center rounded-circle flex-shrink-0 p-0"
            type="button"
            onClick={() => RemoveFromFavorites(product.id)}
          >
            <RemoveIcon aria-hidden="true" />
          </button>
        </div>
      </td>
    </tr>
  );
}

// function WishlistShare({ items }) {
//   return (
//     <div className="wishlist-view__share d-flex align-items-center">
//       <span>Share:</span>
//       <div className="wishlist-view__socials d-flex align-items-center">
//         {items.map(({ name, Icon, active }) => (
//           <button
//             key={name}
//             className={`wishlist-view__social d-inline-flex align-items-center justify-content-center rounded-circle p-0${active ? " wishlist-view__social--active" : ""}`}
//             type="button"
//             aria-label={`Share on ${name}`}
//           >
//             <Icon aria-hidden="true" />
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

function WishlistTable() {
 let {  wishlistProducts } = useContext(
   Category_Product_Context,
 );
 

  return (
    <div className="wishlist-view__card">
      <div className="wishlist-view__table-wrap position-relative">
        <table className="wishlist-view__table table align-middle mb-0">
          <thead>
            <tr>
              <th className="wishlist-view__product-col" scope="col">
                Product
              </th>
              <th className="wishlist-view__price-col" scope="col">
                Price
              </th>
              <th className="wishlist-view__stock-col" scope="col">
                Stock Status
              </th>
              <th className="wishlist-view__actions-col" scope="col">
                <span className="visually-hidden">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {wishlistProducts.map((product) => (
              <WishlistProductRow key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
          {/* <WishlistShare items={socialItems} /> */}
    </div>
  );
}

export default function WishlistPage() {

  let { favoriteProducts }= useContext(
    Category_Product_Context,
  );
  return (
    <main className="wishlist-view">
      <section
        className="wishlist-view__content container"
        aria-labelledby="wishlist-title"
      >
        <h1 id="wishlist-title" className="wishlist-view__title text-center">
          My Wishlist
        </h1>
        {favoriteProducts.length === 0 ? (
          <p className="fs-2 text-center">
            Your wishlist is empty.
          </p>
        ) : (
          <WishlistTable />
        )}
      </section>
    </main>
  );
}
