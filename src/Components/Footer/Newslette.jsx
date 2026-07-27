import "./Footer.css";
import { shoperyIcons } from "../../data/data";
import { Link } from "react-router-dom";

function Newslette() {
  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
  };

const LeafIcon = shoperyIcons.leaf;

  return (
    <section
      className="footer__newsletter"
      aria-labelledby="footer-newsletter-title"
    >
      <div className="container">
        <div className="row align-items-center footer__newsletter-row">
          <div className="col-12 col-md-5 col-xl-3">
            <Link
              className="footer__brand d-inline-flex align-items-center"
              to="/"
              aria-label="Shopery home page"
            >
              {/* <img
                className="footer__brand-mark flex-shrink-0"
                src="/images/footer/ecobazar-mark.svg"
                alt=""
                width="39"
                height="36"
                aria-hidden="true"
              />
              <span>Ecobazar</span> */}
              <LeafIcon className="footer__brand-mark" aria-hidden="true" />
              <span className="">Shopery</span>
            </Link>
          </div>

          <div className="col-12 col-md-7 col-xl-4 footer__newsletter-copy">
            <h2
              id="footer-newsletter-title"
              className="footer__newsletter-title"
            >
              Subscribe our Newsletter
            </h2>
            <p className="footer__newsletter-description">
              Pellentesque eu nibh eget mauris congue mattis matti.
            </p>
          </div>

          <div className="col-12 col-xl-5">
            <form
              className="footer__newsletter-form position-relative"
              onSubmit={handleNewsletterSubmit}
            >
              <label className="visually-hidden" htmlFor="footer-email">
                Email address
              </label>
              <input
                id="footer-email"
                className="footer__newsletter-input"
                type="email"
                name="email"
                placeholder="Your email address"
                autoComplete="email"
                required
              />
              <button
                className="footer__newsletter-button position-absolute top-0 end-0 d-inline-flex align-items-center justify-content-center"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newslette;
