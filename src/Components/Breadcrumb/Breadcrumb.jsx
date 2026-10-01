import { Link } from "react-router-dom";
import { shoperyIcons } from "../../data/data";
import "./Breadcrumb.css";

const HomeIcon = shoperyIcons.home;
const ChevronIcon = shoperyIcons.breadcrumbNext;

export default function Breadcrumb({ items }) {
  return (
    <nav className="page-breadcrumb" aria-label="Breadcrumb">
      <ol className="container d-flex align-items-center flex-wrap gap-3">
        <li><Link to="/" aria-label="Home"><HomeIcon aria-hidden="true" /></Link></li>
        {items.map((item, index) => (
          <li className="d-flex align-items-center gap-3" key={item.label}>
            <ChevronIcon aria-hidden="true" />
            {index < items.length - 1 && item.to ? (
              <Link to={item.to}>{item.label}</Link>
            ) : <span aria-current="page">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
