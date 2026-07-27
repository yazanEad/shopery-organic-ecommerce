import { shoperyIcons } from "../../data/data";

function TestimonialCard({ testimonial }) {
  const QuoteIcon = shoperyIcons.quote;
  const RatingIcon = shoperyIcons.ratingStar;

  return (
    <article className="client-testimonials__card">
      <QuoteIcon
        className="client-testimonials__quote-icon"
        aria-hidden="true"
      />

      <p className="client-testimonials__quote">{testimonial.quote}</p>

      <footer className="client-testimonials__card-footer d-flex align-items-center justify-content-between">
        <div className="client-testimonials__reviewer d-flex align-items-center">
          <img
            className="client-testimonials__avatar"
            src={testimonial.avatar}
            alt=""
            loading="lazy"
          />
          <div className="client-testimonials__reviewer-info">
            <cite className="client-testimonials__reviewer-name">
              {testimonial.name}
              
            </cite>
            <span className="client-testimonials__reviewer-role">
              {testimonial.role}
            </span>
          </div>
        </div>

        <div
          className="client-testimonials__rating d-flex"
          aria-label={`Rating ${testimonial.rating} out of 5`}
        >
          {Array.from({ length: 5 }, (_, index) => (
            <RatingIcon
              key={`${testimonial.name}-star-${index}`}
              className={`client-testimonials__star ${
                index < Math.floor(testimonial.rating)
                  ? "is-filled"
                  : "is-empty"
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
      </footer>
    </article>
  );
}

export default TestimonialCard;
