import { Link, useLocation } from "react-router-dom";
import { shoperyIcons } from "../../data/data";
import { primaryEmail, primaryPhone } from "../../data/contactData";
import "./Footer.css";
import Newsletter from "./Newslette"
const footerLinkGroups = [
  {
    title: "My Account",
    links: [
      { label: "My Account" },
      { label: "Order History" },
      { label: "Shopping Cart" },
      { label: "Wishlist", to: "/my-wishlist" },
      { label: "Settings" },
    ],
  },
  {
    title: "Helps",
    links: [
      { label: "Contact", to: "/contact-us" },
      { label: "Faqs" },
      { label: "Terms & Condition" },
      { label: "Privacy Policy" },
    ],
  },
  {
    title: "Proxy",
    links: [
      { label: "About", to: "/about-us" },
      { label: "Shop", to: "/shop" },
      { label: "Product", to: "/ProductDetails" },
      { label: "Products Details", to: "/ProductDetails" },
      { label: "Track Order" },
    ],
  },
];

const appBadges = [
  {
    name: "App Store",
    eyebrow: "Download on the",
    icon: "/images/footer/apple.svg",
  },
  {
    name: "Google play",
    eyebrow: "Download on the",
    icon: "/images/footer/google-play.svg",
  },
];

const socialItems = [
  { name: "Facebook", icon: shoperyIcons.facebook, isFeatured: true },
  { name: "Twitter", icon: shoperyIcons.twitter },
  { name: "Pinterest", icon: shoperyIcons.pinterest },
  { name: "Instagram", icon: shoperyIcons.instagram },
];

const paymentMethods = [
  {
    name: "Apple Pay",
    image: "/images/footer/apple-pay.svg",
    className: "footer__payment-logo--apple-pay",
  },
  {
    name: "Visa",
    image: "/images/footer/visa.svg",
    className: "footer__payment-logo--visa",
  },
  {
    name: "Discover",
    className: "footer__payment-composite--discover",
    pieces: [
      {
        image: "/images/footer/discover-wordmark.svg",
        className: "footer__payment-piece--discover-wordmark",
      },
      {
        image: "/images/footer/discover-o.svg",
        className: "footer__payment-piece--discover-o",
      },
      {
        image: "/images/footer/discover-stripe.svg",
        className: "footer__payment-piece--discover-stripe",
      },
    ],
  },
  {
    name: "Mastercard",
    className: "footer__payment-composite--mastercard",
    pieces: [
      {
        image: "/images/footer/mastercard-red.svg",
        className: "footer__payment-piece--mastercard-red",
      },
      {
        image: "/images/footer/mastercard-yellow.svg",
        className: "footer__payment-piece--mastercard-yellow",
      },
      {
        image: "/images/footer/mastercard-orange.svg",
        className: "footer__payment-piece--mastercard-orange",
      },
    ],
  },
];

function Footer() {

const SecureCheckoutIcon = shoperyIcons.secureCheckout;


  const { pathname } = useLocation();
  const isCurrentRoute = (to) =>
    pathname.toLowerCase() === to;

  

  return (
    <footer className="footer">
    
    <Newsletter/>

      <div className="footer__main">
        <div className="container">
          <div className="row footer__columns">
            <section
              className="footer__about col-12 col-lg-4 col-xl-3"
              aria-labelledby="footer-about-title"
            >
              <h2 id="footer-about-title" className="footer__heading">
                About Shopery
              </h2>
              <p className="footer__about-description">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magna congue nec.
              </p>
              <address className="footer__contact d-flex flex-wrap align-items-center">
                <a href={primaryPhone.href}>{primaryPhone.label}</a>
                <span className="footer__contact-separator">or</span>
                <a href={primaryEmail.href}>{primaryEmail.label}</a>
              </address>
            </section>

            {footerLinkGroups.map((group) => {
              const titleId = `footer-${group.title
                .toLowerCase()
                .replaceAll(" ", "-")}-title`;

              return (
                <nav
                  key={group.title}
                  className="footer__link-group col-6 col-sm-4 col-lg-2 col-xl"
                  aria-labelledby={titleId}
                >
                  <h2 id={titleId} className="footer__heading">
                    {group.title}
                  </h2>
                  <ul className="footer__link-list d-grid">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          className={`footer__link${
                            isCurrentRoute(link.to) ? " is-active" : ""
                          }`}
                          to={link.to}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              );
            })}

            <section
              className="footer__download col-12 col-lg-6 col-xl-3"
              aria-labelledby="footer-download-title"
            >
              <h2 id="footer-download-title" className="footer__heading">
                Download our Mobile App
              </h2>
              <ul
                className="footer__app-list d-flex flex-column flex-sm-row"
                aria-label="Mobile applications"
              >
                {appBadges.map((app) => (
                  <li
                    key={app.name}
                    className="footer__app-badge d-flex flex-shrink-0 align-items-center"
                  >
                    <img
                      className="footer__app-icon flex-shrink-0"
                      src={app.icon}
                      alt=""
                      aria-hidden="true"
                    />
                    <span className="footer__app-copy d-grid">
                      <span className="footer__app-eyebrow">{app.eyebrow}</span>
                      <span className="footer__app-name">{app.name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="row align-items-center footer__bottom">
            <div className="col-12 col-md-6 col-lg-3">
              <ul
                className="footer__social-list d-flex align-items-center justify-content-center justify-content-md-start"
                aria-label="Social media"
              >
                {socialItems.map((social) => {
                  const SocialIcon = social.icon;

                  return (
                    <li key={social.name}>
                      <span
                        className={`footer__social-item d-inline-flex align-items-center justify-content-center${
                          social.isFeatured ? " is-featured" : ""
                        }`}
                        aria-label={social.name}
                        role="img"
                      >
                        <SocialIcon aria-hidden="true" />
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="col-12 col-lg-5 order-3 order-lg-0">
              <p className="footer__copyright">
                Ecobazar eCommerce &copy; 2021. All Rights Reserved
              </p>
            </div>

            <ul
              className="footer__payment-list col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center justify-content-md-end"
              aria-label="Payment methods"
            >
              {paymentMethods.map((payment) => (
                <li
                  key={payment.name}
                  className="footer__payment-card d-inline-flex align-items-center justify-content-center overflow-hidden"
                  title={payment.name}
                  aria-label={payment.pieces ? payment.name : undefined}
                >
                  {payment.pieces ? (
                    <span
                      className={`footer__payment-composite position-relative d-block flex-shrink-0 ${payment.className}`}
                      aria-hidden="true"
                    >
                      {payment.pieces.map((piece) => (
                        <img
                          key={piece.image}
                          className={`footer__payment-piece position-absolute ${piece.className}`}
                          src={piece.image}
                          alt=""
                        />
                      ))}
                    </span>
                  ) : (
                    <img
                      className={`footer__payment-logo ${payment.className}`}
                      src={payment.image}
                      alt={payment.name}
                    />
                  )}
                </li>
              ))}
              <li
                className="footer__payment-card footer__payment-card--secure d-inline-flex align-items-center justify-content-center overflow-hidden"
                aria-label="Secure payment"
              >
                <SecureCheckoutIcon aria-hidden="true" />
                <span className="d-grid">
                  <span>Secure</span>
                  <strong>Payment</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
