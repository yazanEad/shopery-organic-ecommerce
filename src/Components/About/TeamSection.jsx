import { useRef } from "react";
import { aboutCopy, aboutTeam } from "../../data/aboutData";
import { shoperyIcons } from "../../data/data";
import SocialButtons from "../SocialButtons/SocialButtons";

const PreviousIcon = shoperyIcons.previous;
const NextIcon = shoperyIcons.next;

export default function TeamSection() {
  const track = useRef(null);
  function move(direction) {
    const element = track.current;
    const atEnd =
      element.scrollLeft + element.clientWidth >= element.scrollWidth - 1;
    const atStart = element.scrollLeft <= 1;
    const target =
      direction > 0 && atEnd
        ? 0
        : direction < 0 && atStart
          ? element.scrollWidth
          : element.scrollLeft + direction * element.clientWidth;
    element.scrollTo({
      left: target,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }
  return (
    <section className="about-team" aria-labelledby="about-team-title">
      <div className="container position-relative">
        <header className="about-team__heading text-center">
          <h2 id="about-team-title">Our Awesome Team</h2>
          <p>{aboutCopy.team}</p>
        </header>
        <div
          className="about-team__track d-flex"
          ref={track}
          id="about-team-members"
        >
          {aboutTeam.map((person) => (
            <article className="about-team__card card" key={person.name}>
              <div className="about-team__photo">
                <img src={person.image} alt={person.name} loading="lazy" />
                <div className="about-team__social">
                  <SocialButtons
                    label={`${person.name} social profiles (preview)`}
                  />
                </div>
              </div>
              <div className="about-team__info">
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="about-team__controls d-flex justify-content-center gap-3">
          <button
            className="about-team__arrow about-team__arrow--previous"
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous team members"
            aria-controls="about-team-members"
          >
            <PreviousIcon aria-hidden="true" />
          </button>
          <button
            className="about-team__arrow about-team__arrow--next"
            type="button"
            onClick={() => move(1)}
            aria-label="Next team members"
            aria-controls="about-team-members"
          >
            <NextIcon aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
