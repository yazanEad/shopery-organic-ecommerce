import { shoperyIcons } from "../../data/data";

const ChevronIcon = shoperyIcons.dropdown;

function FilterSection({ id, title,show,handelShow, children, className = "" }) {

  
  
  

  return (
    <section
      className={`shop-filter-section ${className}`.trim()}
      // aria-labelledby={id}
    >
      <div
        className="shop-filter-section__header d-flex align-items-center justify-content-between"
        onClick={handelShow}
      >
        <h2 id={id}>{title}</h2>
        <ChevronIcon
          className={`shop-filter-section__chevron ${show && "undescent"}`}
          aria-hidden="true"
        />
      </div>
      {children}
    </section>
  );
}

export default FilterSection;
