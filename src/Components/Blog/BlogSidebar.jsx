import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  blogCategories,
  blogGallery,
  blogPosts,
  blogTags,
  formatBlogDate,
  recentPosts,
} from "../../data/blogData";
import { shoperyIcons } from "../../data/data";

const SearchIcon = shoperyIcons.search;
const CalendarIcon = shoperyIcons.calendar;

export default function BlogSidebar() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  function filterLink(key, value) {
    const next = new URLSearchParams(params);
    next.delete("page");
    if (next.get(key) === value) next.delete(key);
    else next.set(key, value);
    return `/blog?${next.toString()}`;
  }
  function search(event) {
    event.preventDefault();
    const next = new URLSearchParams(params);
    const query = new FormData(event.currentTarget).get("query").trim();
    if (query) next.set("query", query);
    else next.delete("query");
    next.delete("page");
    navigate(`/blog?${next.toString()}`);
  }
  return (
    <aside className="blog-sidebar" aria-label="Blog sidebar">
      <form className="blog-sidebar__search" onSubmit={search} role="search">
        <label className="visually-hidden" htmlFor="blog-search">
          Search articles
        </label>
        <button type="submit" aria-label="Search articles">
          <SearchIcon aria-hidden="true" />
        </button>
        <input
          key={params.get("query") || "all"}
          id="blog-search"
          name="query"
          type="search"
          placeholder="Search..."
          defaultValue={params.get("query") || ""}
        />
      </form>
      <section className="blog-sidebar__section">
        <h2>Top Categories</h2>
        <ul className="list-unstyled blog-sidebar__categories">
          {blogCategories.map((category) => (
            <li key={category}>
              <Link
                to={filterLink("category", category)}
                aria-current={
                  params.get("category") === category ? "true" : undefined
                }
              >
                <span>{category}</span>
                <span>
                  (
                  {
                    blogPosts.filter((post) => post.category === category)
                      .length
                  }
                  )
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="blog-sidebar__section">
        <h2>Popular Tag</h2>
        <div className="blog-sidebar__tags d-flex flex-wrap">
          {blogTags.map((tag) => (
            <Link
              key={tag}
              to={filterLink("tag", tag)}
              aria-current={params.get("tag") === tag ? "true" : undefined}
            >
              {tag}
            </Link>
          ))}
        </div>
      </section>
      <section className="blog-sidebar__section">
        <h2>Our Gallery</h2>
        <div className="row row-cols-4 g-2">
          {blogGallery.map((item) => (
            <div className="col" key={item.src}>
              <img
                className="blog-sidebar__gallery-image"
                src={item.src}
                alt={item.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="blog-sidebar__section">
        <h2>Recently Added</h2>
        <ul className="list-unstyled blog-sidebar__recent">
          {recentPosts.map((post) => (
            <li key={post.id}>
              <Link className="d-flex" to={`/blog/${post.id}`}>
                <img src={post.image} alt={post.imageAlt} loading="lazy" />
                <div>
                  <h3>{post.title}</h3>
                  <time dateTime={post.date}>
                    <CalendarIcon aria-hidden="true" />
                    {formatBlogDate(post.date)}
                  </time>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
