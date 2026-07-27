import "./CompanyLogos.css";

const companyLogos = [
  {
    id: "steps",
    src: "/images/logos/steps.svg",
    alt: "Steps logo",
    width: 82,
    height: 32,
    isHighlighted: true,
  },
  {
    id: "mango",
    src: "/images/logos/mango.svg",
    alt: "Mango logo",
    width: 67,
    height: 32,
  },
  {
    id: "food-network",
    src: "/images/logos/food-network.svg",
    alt: "Food Network logo",
    width: 60,
    height: 32,
  },
  {
    id: "food",
    src: "/images/logos/food.svg",
    alt: "Food logo",
    width: 83,
    height: 32,
  },
  {
    id: "bookoff",
    src: "/images/logos/bookoff.svg",
    alt: "BookOff logo",
    width: 132,
    height: 32,
  },
  {
    id: "g-series",
    src: "/images/logos/g-series.svg",
    alt: "G-Series logo",
    width: 96,
    height: 32,
  },
];

function CompanyLogos() {
  return (
    <section className="company-logos" aria-label="Partner companies">
      <div className="container company-logos__inner">
        <div className=" row row-cols-2 row-cols-sm-3 row-cols-lg-6 g-5">
          {companyLogos.map((logo, index) => (
            <div key={logo.id} className="col">
              <div
                className={`company-logos__item  ${
                  logo.isHighlighted ? " is-highlighted" : ""
                }`}
              >
                <img
                  className="company-logos__image"
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {index < companyLogos.length - 1 && (
                <span className="company-logos__separator" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompanyLogos;
