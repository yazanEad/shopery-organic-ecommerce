import { Link } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import ClientTestimonials from "../../Components/ClientTestimonials/ClientTestimonials";
import CompanyLogos from "../../Components/CompanyLogos/CompanyLogos";
import TeamSection from "../../Components/About/TeamSection";
import {
  aboutCopy,
  aboutFeatures,
  deliveryBenefits,
} from "../../data/aboutData";
import { shoperyIcons } from "../../data/data";
import "../../styles/content-pages.css";
import "./About.css";

const ArrowIcon = shoperyIcons.next;
const CheckIcon = shoperyIcons.success;

export default function About() {
  return (
    <main className="shopery-content-page about-page">
      <Breadcrumb items={[{ label: "About" }]} />
      <section className="about-intro container">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-lg-6 about-intro__copy">
            <h1>100% Trusted Organic Food Store</h1>
            <p>{aboutCopy.introduction}</p>
          </div>
          <div className="col-12 col-lg-6">
            <img
              className="about-intro__image"
              src="/images/farmer-vegetables-large.jpg"
              alt="Smiling farmer holding a basket of freshly picked vegetables"
            />
          </div>
        </div>
      </section>
      <section
        className="about-features"
        aria-labelledby="about-features-title"
      >
        <div className="about-features__landscape" aria-hidden="true" />
        <img
          className="about-features__farmer"
          src="/images/senior-farmer-vegetables.png"
          alt="Farmer carrying a basket of organic produce"
          loading="lazy"
        />
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 offset-lg-6 about-features__copy">
              <h2 id="about-features-title">
                100% Trusted
                <br />
                Organic Food Store
              </h2>
              <p>{aboutCopy.features}</p>
              <ul className="row row-cols-1 row-cols-sm-2 g-4 list-unstyled">
                {aboutFeatures.map((feature) => {
                  const Icon = shoperyIcons[feature.icon];
                  return (
                    <li className="col" key={feature.title}>
                      <div className="about-feature d-flex align-items-center">
                        <span className="about-feature__icon">
                          <Icon aria-hidden="true" />
                        </span>
                        <div>
                          <h3>{feature.title}</h3>
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        className="about-delivery container"
        aria-labelledby="about-delivery-title"
      >
        <div className="row g-4 align-items-center">
          <div className="col-12 col-lg-5 about-delivery__copy">
            <h2 id="about-delivery-title">
              We Delivered, You Enjoy Your Order.
            </h2>
            <p>{aboutCopy.delivery}</p>
            <ul className="list-unstyled">
              {deliveryBenefits.map((benefit) => (
                <li className="d-flex" key={benefit}>
                  <CheckIcon aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
            <Link className="shopery-button" to="/shop">
              Shop Now <ArrowIcon aria-hidden="true" />
            </Link>
          </div>
          <div className="col-12 col-lg-7">
            <div className="about-delivery__visual">
              <img
                src="/images/delivery-man-walking-groceries-large.png"
                alt="Delivery team member holding a crate of fresh groceries"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <TeamSection />
      <ClientTestimonials variant="about" />
      <CompanyLogos />
    </main>
  );
}
