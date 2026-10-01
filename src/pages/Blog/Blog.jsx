import { useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import ShopToolbar from "../../Components/ShopToolbar/ShopToolbar";
import BlogCard from "../../Components/Blog/BlogCard";
import BlogSidebar from "../../Components/Blog/BlogSidebar";
import Pagination from "../../Components/Pagination/Pagination";
import { blogPosts } from "../../data/blogData";
import "../../styles/content-pages.css";
import "./Blog.css";

const sortOptions = [
  { value: "latest", label: "Latest" },
  { value: "oldest", label: "Oldest" },
];
const pageSize = 10;

function Blog() {
  const [params, setParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(true);
  const query = (params.get("query") || "").toLowerCase();
  const category = params.get("category");
  const tag = params.get("tag");
  const sort = params.get("sort") === "oldest" ? "oldest" : "latest";
  const posts = blogPosts
    .filter(
      (post) =>
        (!query ||
          `${post.title} ${post.headline} ${post.imageAlt} ${post.category} ${post.tags.join(" ")}`
            .toLowerCase()
            .includes(query)) &&
        (!category || post.category === category) &&
        (!tag || post.tags.includes(tag)),
    )
    .sort((a, b) =>
      sort === "latest"
        ? b.date.localeCompare(a.date)
        : a.date.localeCompare(b.date),
    );
  const pageCount = Math.ceil(posts.length / pageSize);
  const page = Math.min(
    Math.max(1, Number.parseInt(params.get("page"), 10) || 1),
    pageCount || 1,
  );
  function updateParam(key, value) {
    const next = new URLSearchParams(params);
    next.set(key, String(value));
    if (key !== "page") next.delete("page");
    setParams(next);
  }
  
  
  return (
    <main className="shopery-content-page blog-page">
      <Breadcrumb items={[{ label: "Blog" }]} />
      <div className="container blog-page__content">
        <h1 className="visually-hidden">Blog</h1>
        <ShopToolbar
          variant="blog"
          resultCount={posts.length}
          sortOptions={sortOptions}
          sortValue={sort}
          onSortChange={(event) => updateParam("sort", event.target.value)}
          onFilterClick={() => setFilterOpen((open) => !open)}
          filterPanelId="blog-filters"
          isFilterOpen={filterOpen}
        />
        <div className="row g-4 blog-page__layout">
          <div
            id="blog-filters"
            className="col-12 col-lg-4"
            hidden={!filterOpen}
          >
            <BlogSidebar />
          </div>
          <div className={filterOpen ? "col-12 col-lg-8" : "col-12"}>
            {(query || category || tag) && (
              <div className="blog-page__active-filter d-flex flex-wrap justify-content-between gap-2">
                <span>
                  {[query && `Search: ${params.get("query")}`, category, tag]
                    .filter(Boolean)
                    .join(" · ")}
                </span>
                <Link to="/blog">Clear filters</Link>
              </div>
            )}
            <div className="row g-4" aria-live="polite">
              {posts
                .slice((page - 1) * pageSize, page * pageSize)
                .map((post) => (
                  <div
                    className={
                      filterOpen
                        ? "col-12 col-md-6"
                        : "col-12 col-md-6 col-xl-4"
                    }
                    key={post.id}
                  >
                    <BlogCard post={post} />
                  </div>
                ))}
              {!posts.length && (
                <p className="blog-page__empty">
                  No articles found. Try another search or clear the filters.
                </p>
              )}
            </div>
            <Pagination
              page={page}
              pageCount={pageCount}
              onChange={(number) => updateParam("page", number)}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Blog;
