import { shoperyIcons } from "../../data/data";
import "./InstagramGallery.css";

const InstagramIcon = shoperyIcons.instagram;

const instagramPosts = [
  {
    id: "tomatoes",
    image: "/images/tomatoes-dark-background.jpg",
    alt: "Fresh tomatoes on a dark background",
    href: null,
  },
  {
    id: "leafy-greens",
    image: "/images/leafy-greens-texture.jpg",
    alt: "Fresh leafy greens covered with water droplets",
    href: null,
  },
  {
    id: "cucumber-leaves",
    image: "/images/cucumber-texture.jpg",
    alt: "Green cucumber leaves covered with water droplets",
    href: null,
  },
  {
    id: "bell-peppers",
    image: "/images/bell-peppers-black-background-02.jpg",
    alt: "Wet orange, green, and red bell peppers on a dark background",
    href: null,
  },
  {
    id: "spinach",
    image: "/images/spinach-leaves-texture.jpg",
    alt: "Fresh spinach leaves",
    href: null,
  },
  {
    id: "orange-splash",
    image: "/images/orange-ice-splash.jpg",
    alt: "Orange slices splashing in water",
    href: null,
  },
];

function InstagramGallery() {
  return (
    <section className="instagram-gallery" aria-labelledby="instagram-title">
      <div className="container ">
        <h2 id="instagram-title" className="instagram-gallery__title">
          Follow us on Instagram
        </h2>

        <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-6 g-3">
          {instagramPosts.map((post) => {
            return (
              <div key={post.id} className="col">
                <a className="instagram-gallery__item ">
                  <img
                    className="instagram-gallery__image"
                    src={post.image}
                    alt={post.alt}
                    width="200"
                    height="200"
                    loading="lazy"
                    decoding="async"
                  />

                  <span
                    className="instagram-gallery__overlay"
                    aria-hidden="true"
                  >
                    <span className="instagram-gallery__icon">
                      <InstagramIcon />
                    </span>
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default InstagramGallery;
