import { shoperyIcons } from "../../data/data";
import "./Pagination.css";

const PreviousIcon = shoperyIcons.previous;
const NextIcon = shoperyIcons.next;

export default function Pagination({ page, pageCount, onChange }) {
  if (pageCount < 2) return null;
  return (
    <nav className="content-pagination" aria-label="Blog pages">
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => onChange(page - 1)}
        aria-label="Previous page"
      >
        <PreviousIcon aria-hidden="true" />
      </button>
      {Array.from({ length: pageCount }, (_, index) => index + 1).map(
        (number) => (
          <button
            type="button"
            key={number}
            aria-current={page === number ? "page" : undefined}
            onClick={() => onChange(number)}
          >
            {number}
          </button>
        ),
      )}
      <button
        type="button"
        disabled={page >= pageCount}
        onClick={() => onChange(page + 1)}
        aria-label="Next page"
      >
        <NextIcon aria-hidden="true" />
      </button>
    </nav>
  );
}
