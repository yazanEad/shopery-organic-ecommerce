import { Fragment } from "react";
import { Link } from "react-router-dom";
import { shoperyIcons } from "../../data/data";
import { promotionBanners } from "../../data/mockPromotionBanners";
import "./PromotionBanners.css";

function PromotionBannerDetail({ detail }) {
  if (detail.type === "countdown") {
    return (
      <div
        className="promotion-banner__countdown d-flex justify-content-center"
        aria-label={detail.items
          .map((item) => `${item.value} ${item.label}`)
          .join(", ")}
      >
        {detail.items.map((item, index) => (
          <Fragment key={item.label}>
            <span className="promotion-banner__countdown-item d-flex flex-column align-items-center">
              <span className="promotion-banner__countdown-value">
                {item.value}
              </span>
              <span className="promotion-banner__countdown-label">
                {item.label}
              </span>
            </span>
            {index < detail.items.length - 1 && (
              <span
                className="promotion-banner__countdown-separator"
                aria-hidden="true"
              >
                :
              </span>
            )}
          </Fragment>
        ))}
      </div>
    );
  }

  if (detail.type === "price") {
    return (
      <p className="promotion-banner__price d-flex justify-content-center align-items-center">
        <span>{detail.prefix}</span>
        <strong>{detail.value}</strong>
      </p>
    );
  }

  return (
    <p className="promotion-banner__discount d-flex justify-content-center align-items-center">
      <span>{detail.prefix}</span>
      <strong>{detail.value}</strong>
    </p>
  );
}

function PromotionBanner({ banner }) {
  const ArrowIcon = shoperyIcons.next;

  return (
    <article
      className={`promotion-banner promotion-banner--${banner.variant}`}
    >
      <img
        className="promotion-banner__image"
        src={banner.image}
        alt={banner.imageAlt}
        loading="lazy"
      />

      <div className="promotion-banner__content d-flex flex-column align-items-center text-center">
        <p className="promotion-banner__eyebrow">{banner.eyebrow}</p>
        <h2 className="promotion-banner__title">{banner.title}</h2>

        <PromotionBannerDetail detail={banner.detail} />

        <Link
          className="promotion-banner__button"
          to={banner.href}
          aria-label={`${banner.buttonLabel}: ${banner.title}`}
        >
          <span>{banner.buttonLabel}</span>
          <ArrowIcon className="promotion-banner__button-icon" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

function PromotionBanners({ banners = promotionBanners }) {
  return (
    <section className="promotion-banners" aria-label="Promotional offers">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {banners.map((banner) => (
            <div
              className="promotion-banners__item col-12 col-md-6 col-xl-4"
              key={banner.id}
            >
              <PromotionBanner banner={banner} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PromotionBanners;
