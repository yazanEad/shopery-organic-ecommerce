import { useContext, useState } from "react";
import { shoperyIcons } from "../../data/data";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { Category_Product_Context } from "../../context/Context";

function NavbarTwo() {
  const LeafIcon = shoperyIcons.leaf;
  const SearchIcon = shoperyIcons.search;
  const WishlistIcon = shoperyIcons.wishlist;
  const CartIcon = shoperyIcons.cart;
  const MenuIcon = shoperyIcons.listView;
  const CloseIcon = shoperyIcons.remove;
  const Account = shoperyIcons.account;
  // const DropdownIcon = shoperyIcons.dropdown;
  const PhoneIcon = shoperyIcons.phone;


   

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  let navbarLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Pages", href: "/pages" },

    { name: "Blog", href: "/blog" },

    { name: "About Us", href: "/about-us" },

    { name: "Contact Us", href: "/contact-us" },
  ];

   let { cartItems, favoriteProducts } = useContext(Category_Product_Context);

  return (
    <nav className="navbar-two" aria-label="Main navigation">
      <div className="container d-flex align-items-center justify-content-between gap-4">
        <Link
          className="navbar-two__brand d-flex align-items-center gap-2"
          to="/"
        >
          <LeafIcon className="navbar-two__brand-icon" aria-hidden="true" />
          <span className="navbar-two__brand-name">Shopery</span>
        </Link>
        <form
          className="navbar-two__search input-group d-none d-lg-flex"
          role="search"
        >
          <input
            className="form-control navbar-two__search-input"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="navbar-two__search-button"
            type="submit"
            aria-label="Submit search"
          >
            <SearchIcon aria-hidden="true" />
          </button>
        </form>
        <div className="navbar-two__tools d-flex flex-row align-items-center gap-3">
          <div className="navbar-two__actions d-flex align-items-center gap-3">
            <Link to="/my-wishlist">
              <button
                className="navbar-two__icon-button"
                type="button"
                aria-label="Wishlist"
              >
                {/*  asdasDASDsaSAdasDSA */}
                <WishlistIcon aria-hidden="true" />
                <span className="navbar-two__badge">
                  {favoriteProducts ? favoriteProducts.length : 0}
                </span>
              </button>
            </Link>
            <button
              className="navbar-two__icon-button"
              type="button"
              aria-label="Account"
            >
              <Account aria-hidden="true" />
            </button>
            <span className="navbar-two__divider" aria-hidden="true" />
            <Link to="/shopping-cart">
              <button
                className="navbar-two__icon-button"
                type="button"
                aria-label="Shopping cart"
              >
                <CartIcon aria-hidden="true" />
                <span className="navbar-two__badge">
                  {cartItems ? cartItems.length : 0}
                </span>
              </button>
            </Link>
            <div className="navbar-two__cart-total d-none d-sm-block">
              <span className="navbar-two__cart-label">Shopping cart:</span>
              <strong>$57.00</strong>
            </div>
          </div>

          <button
            className="navbar-two__mobile-trigger d-lg-none"
            type="button"
            aria-expanded={isDrawerOpen}
            aria-controls="navbar-two-mobile-drawer"
            aria-label={isDrawerOpen ? "Close mobile menu" : "Open mobile menu"}
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <MenuIcon aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="navbar-two__menu-bar">
        <div className="container">
          <div className="navbar-two__menu-content d-lg-flex align-items-lg-center justify-content-lg-between gap-lg-4">
            <ul className="navbar-two__menu-links d-flex flex-column flex-lg-row align-items-lg-center gap-1 gap-lg-4 mb-0">
              {navbarLinks.map((link) => {
                return (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="navbar-two__menu-link navbar-two__menu-link--active d-flex align-items-center gap-1"
                      href="/"
                    >
                      <span>{link.name}</span>
                      {/* <DropdownIcon
                        className="navbar-two__menu-arrow"
                        aria-hidden="true"
                      /> */}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              className="navbar-two__phone d-none d-lg-flex align-items-center gap-2"
              href="tel:+12195550114"
            >
              <PhoneIcon aria-hidden="true" />
              <span>(219) 555-0114</span>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`navbar-two__drawer-overlay ${isDrawerOpen ? "is-open" : ""}`}
        aria-hidden="true"
        onClick={() => setIsDrawerOpen(false)}
      />

      <aside
        id="navbar-two-mobile-drawer"
        className={`navbar-two__drawer ${isDrawerOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!isDrawerOpen}
      >
        <div className="navbar-two__drawer-header d-flex align-items-center justify-content-between gap-3">
          <Link
            className="navbar-two__brand d-flex align-items-center gap-2"
            to="/"
          >
            <LeafIcon className="navbar-two__brand-icon" aria-hidden="true" />
            <span className="navbar-two__brand-name">Shopery</span>
          </Link>
          <button
            className="navbar-two__drawer-close"
            type="button"
            aria-label="Close mobile menu"
            onClick={() => setIsDrawerOpen(false)}
          >
            <CloseIcon aria-hidden="true" />
          </button>
        </div>

        <form className="navbar-two__drawer-search input-group" role="search">
          <input
            className="form-control navbar-two__drawer-search-input"
            type="search"
            placeholder="Search for products"
            aria-label="Search for products"
          />
          <button
            className="navbar-two__drawer-search-button"
            type="submit"
            aria-label="Submit search"
          >
            <SearchIcon aria-hidden="true" />
          </button>
        </form>

        <ul className="navbar-two__drawer-links d-flex flex-column gap-1 mb-0">
          {navbarLinks.map((link) => {
            return (
              <li key={link.name}>
                <Link
                  className="navbar-two__drawer-link d-flex align-items-center justify-content-between gap-3"
                  to={link.href}
                  onClick={() => setIsDrawerOpen(false)}
                >
                  <span>{link.name}</span>
                  {/* <DropdownIcon aria-hidden="true" /> */}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </nav>
  );
}

export default NavbarTwo;
