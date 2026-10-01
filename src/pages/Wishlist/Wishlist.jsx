import { shoperyIcons } from "../../data/data";
import "./Wishlist.css";

const wishlistProducts = [
  {
    id: 1,
    name: "Fresh Sujapuri Mango",
    image: "/images/mango-isolated.jpg",
    price: "$09.00",
    stockStatus: "In Stock",
  },
  {
    id: 2,
    name: "Chinese Cabbage",
    image: "/images/napa-cabbage-head.jpg",
    price: "$45.00",
    stockStatus: "In Stock",
  },
  {
    id: 3,
    name: "Green Capsicum",
    image: "/images/green-bell-peppers-large.jpg",
    price: "$14.99",
    stockStatus: "In Stock",
  },
];

function WishlistProductRow({ product }) {
  const CartIcon = shoperyIcons.addToCart;
  const RemoveIcon = shoperyIcons.remove;

  return (
    <article className="wishlist-product-row">
      <div className="wishlist-product-row__product">
        <img
          className="wishlist-product-row__image"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
        <span className="wishlist-product-row__name">{product.name}</span>
      </div>

      <div className="wishlist-product-row__price">{product.price}</div>

      <div className="wishlist-product-row__stock">
        <span className="wishlist-stock-badge">{product.stockStatus}</span>
      </div>

      <div className="wishlist-product-row__actions">
        <button className="wishlist-add-button" type="button">
          <CartIcon aria-hidden="true" />
          <span>Add to Cart</span>
        </button>
        <button
          className="wishlist-remove-button"
          type="button"
          aria-label={`Remove ${product.name} from wishlist`}
        >
          <RemoveIcon aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

function WishlistShare() {
  const socialIcons = [
    ["Facebook", shoperyIcons.facebook],
    ["Twitter", shoperyIcons.twitter],
    ["Pinterest", shoperyIcons.pinterest],
    ["Instagram", shoperyIcons.instagram],
  ];

  return (
    <div className="wishlist-share">
      <span className="wishlist-share__label">Share:</span>
      <div className="wishlist-share__icons">
        {socialIcons.map(([name, Icon]) => (
          <button
            key={name}
            className="wishlist-share__icon"
            type="button"
            aria-label={`Share on ${name}`}
          >
            <Icon aria-hidden="true" />
          </button>
        ))}
      </div>
    </div>
  );
}

function WishlistTable({ products }) {
  return (
    <section className="wishlist-table" aria-label="Wishlist products">
      <div className="wishlist-table__header" aria-hidden="true">
        <span>Product</span>
        <span>Price</span>
        <span>Stock Status</span>
        <span />
      </div>

      <div className="wishlist-table__body">
        {products.map((product) => (
          <WishlistProductRow key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function Wishlist() {
  const BreadcrumbIcon = shoperyIcons.breadcrumbNext;
  const HeartIcon = shoperyIcons.wishlist;

  return (
    <main className="wishlist-page">
      <section className="wishlist-breadcrumb" aria-label="Breadcrumb">
        <div className="container wishlist-breadcrumb__content">
          <nav className="wishlist-breadcrumb__nav" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <BreadcrumbIcon aria-hidden="true" />
            <span>Wishlist</span>
          </nav>
        </div>
      </section>

      <section className="wishlist-content container">
        <h1 className="wishlist-title">
          <span className="wishlist-title__icon" aria-hidden="true">
            <HeartIcon />
          </span>
          My Wishlist
        </h1>

        <div className="wishlist-card">
          <WishlistTable products={wishlistProducts} />
          <WishlistShare />
        </div>
      </section>
    </main>
  );
}

export default Wishlist;

