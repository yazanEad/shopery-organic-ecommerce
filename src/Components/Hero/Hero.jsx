import { shoperyIcons } from "../../data/data";
import "./Hero.css";

const featureItems = [
  {
    icon: shoperyIcons.freeShipping,
    title: "Free Shipping",
    description: "Free shipping on all your order",
  },
  {
    icon: shoperyIcons.support,
    title: "Customer Support 24/7",
    description: "Instant access to support",
  },
  {
    icon: shoperyIcons.securePayment,
    title: "100% Secure Payment",
    description: "We ensure your money is safe",
  },
  {
    icon: shoperyIcons.moneyBack,
    title: "Money-Back Guarantee",
    description: "30 Days Money-Back Guarantee",
  },
];

function Hero() {
  const ArrowRight = shoperyIcons.next;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero__banner overflow-hidden">
          <div className="hero__image" aria-hidden="true" />

          <div className="row hero__content align-items-center">
            <div className="col-12 col-lg-7 col-xl-6">
              <div className="hero__copy">
                <p className="hero__eyebrow">Welcome to Shopery</p>
                <h1 id="hero-title" className="hero__title">
                  Fresh &amp; Healthy
                  <span>Organic Food</span>
                </h1>
                <p className="hero__offer">
                  Sale up to <strong>30% OFF</strong>
                </p>
                <p className="hero__caption">
                  Free shipping on all your order, we deliver, you enjoy
                </p>
                <a className="hero__cta" href="/shop">
                  Shop now
                  <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="hero__dots" aria-label="Hero slides">
            <span />
            <span className="is-active" />
            <span />
          </div>
        </div>

        <div className="hero__features row g-0" aria-label="Shopery benefits">
          {featureItems.map(({ icon: Icon, title, description }) => (
            <div className="col-12 col-sm-6 col-lg-3" key={title}>
              <div className="hero__feature">
                <Icon className="hero__feature-icon" aria-hidden="true" />
                <div>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
