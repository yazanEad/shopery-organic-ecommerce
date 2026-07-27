
import "./CategoryCard.css";

function CategoryCard({ category }) {


  return (
    <div className="category-card d-flex flex-column align-items-center text-center">
      <div className="category-card__media flex-shrink-0">
        <img
          className="category-card__image"
          src={category.image}
          alt={category.slug}
        />
      </div>

      <div className="category-card__info d-flex flex-column">
        <h3 className="category-card__title" title={name}>
          {category.name}
        </h3>
        {/* {category.slug ? (
          <p className="category-card__details">{category.slug}</p>
        ) : null} */}
      </div>
    </div>
  );
}

export default CategoryCard;
