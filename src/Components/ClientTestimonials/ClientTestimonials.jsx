import { useState } from "react";
import { shoperyIcons } from "../../data/data";
import { clientTestimonialSlides } from "../../data/mockClientTestimonials";
import TestimonialCard from "./TestimonialCard";
import "./ClientTestimonials.css";
import SectionTitle from "../SectionTitle/SectionTitle";

function ClientTestimonials({
  slides = clientTestimonialSlides,
  variant = "default",
}) {
  const [activeSlide, setActiveSlide] = useState(
    Math.min(2, slides.length - 1),
  );
  const PreviousIcon = shoperyIcons.previous;
  const NextIcon = shoperyIcons.next;

  if (!slides.length) {
    return null;
  }

  const showPreviousSlide = () => {
    setActiveSlide((currentSlide) =>
      currentSlide === 0 ? slides.length - 1 : currentSlide - 1,
    );
  };

  const showNextSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
  };

  return (
    <section
      className="client-testimonials"
      aria-labelledby="client-testimonials-title"
    >
      <div className="container client-testimonials__container">
        <header className="client-testimonials__header d-flex align-items-center justify-content-between">
          {variant === "about" ? (
            <h2
              id="client-testimonials-title"
              className="client-testimonials__title"
            >
              Client Testimonial
            </h2>
          ) : (
            <SectionTitle title="Client Testimonial" />
          )}

          <div
            className="client-testimonials__controls d-flex"
            aria-label="Testimonial navigation"
          >
            <button
              className="client-testimonials__arrow"
              type="button"
              onClick={showPreviousSlide}
              aria-label="Show previous testimonials"
            >
              <PreviousIcon aria-hidden="true" />
            </button>
            <button
              className="client-testimonials__arrow"
              type="button"
              onClick={showNextSlide}
              aria-label="Show next testimonials"
            >
              <NextIcon aria-hidden="true" />
            </button>
          </div>
        </header>

        <div className="client-testimonials__cards row g-4" aria-live="polite">
          {slides[activeSlide].map((testimonial) => (
            <div
              className="client-testimonials__item col-12 col-md-6 col-xl-4"
              key={testimonial.id}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        
          <div
            className="client-testimonials__tracker d-flex justify-content-center"
            aria-label="Choose testimonial slide"
          >
            {slides.map((slide, index) => (
              <button
                className={`client-testimonials__dot${
                  index === activeSlide ? " is-active" : ""
                }`}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Show testimonial slide ${index + 1}`}
                aria-current={index === activeSlide ? "true" : undefined}
                key={slide[0]?.id ?? index}
              />
            ))}
          </div>
         
      </div>
    </section>
  );
}

export default ClientTestimonials;
