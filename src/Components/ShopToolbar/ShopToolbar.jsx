import { shoperyIcons } from "../../data/data";
import "./ShopToolbar.css";

const FilterControlsIcon = shoperyIcons.filterControls;
const DropdownIcon = shoperyIcons.dropdown;

function ShopToolbar({
  sortOptions,
  defaultSort,
  onFilterClick,

  variant = "shop",
  sortValue,
  onSortChange,
  NumberResults,
}) {
  return (
    <section
      className="shop-toolbar"
      aria-label={
        variant === "blog" ? "Blog controls" : "Shop product controls"
      }
    >
      <div className="row gx-4 gy-3 align-items-center">
        <div
          className={`col-12 ${variant === "blog" ? "col-lg-4" : "col-lg-3"}`}
        >
          <button
            className="shop-toolbar__filter-button d-inline-flex align-items-center justify-content-center"
            type="button"
            onClick={onFilterClick}
          >
            <span>Filter</span>
            <FilterControlsIcon aria-hidden="true" />
          </button>
        </div>

        <div
          className={`col-12 ${variant === "blog" ? "col-lg-8" : "col-lg-9"}`}
        >
          <div className="shop-toolbar__main d-flex flex-wrap align-items-center justify-content-between">
            <div className="shop-toolbar__sort d-flex align-items-center">
              <label htmlFor="shop-sort">Sort by : </label>
              <span className="shop-toolbar__select-wrap position-relative">
                <select
                  id="shop-sort"
                  defaultValue={
                    sortValue === undefined ? defaultSort : undefined
                  }
                  value={sortValue}
                  onChange={onSortChange}
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <DropdownIcon
                  className="shop-toolbar__select-icon position-absolute"
                  aria-hidden="true"
                />
              </span>
            </div>

            <p className="shop-toolbar__results">
              <strong>{NumberResults}</strong> Results Found
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopToolbar;
