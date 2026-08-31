import { shoperyIcons } from "../../data/data";
import "./ShopToolbar.css";

const FilterControlsIcon = shoperyIcons.filterControls;
const DropdownIcon = shoperyIcons.dropdown;

function ShopToolbar({
  resultCount,
  sortOptions,
  defaultSort,
  onFilterClick,
  filterPanelId,
  isFilterOpen = false,
}) {
  return (
    <section className="shop-toolbar" aria-label="Shop product controls">
      <div className="row gx-4 gy-3 align-items-center">
        <div className="col-12 col-lg-3">
          <button
            className="shop-toolbar__filter-button d-inline-flex align-items-center justify-content-center"
            type="button"
            onClick={onFilterClick}
            aria-controls={filterPanelId}
            aria-expanded={isFilterOpen}
          >
            <span>Filter</span>
            <FilterControlsIcon aria-hidden="true" />
          </button>
        </div>

        <div className="col-12 col-lg-9">
          <div className="shop-toolbar__main d-flex flex-wrap align-items-center justify-content-between">
            <div className="shop-toolbar__sort d-flex align-items-center">
              <label htmlFor="shop-sort">Sort by:</label>
              <span className="shop-toolbar__select-wrap position-relative">
                <select id="shop-sort" defaultValue={defaultSort}>
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
              <strong>{resultCount}</strong> Results Found
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopToolbar;
