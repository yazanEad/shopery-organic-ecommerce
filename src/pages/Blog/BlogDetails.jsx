import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import BlogMeta from "../../Components/Blog/BlogMeta";
import BlogSidebar from "../../Components/Blog/BlogSidebar";
import BlogComments from "../../Components/Blog/BlogComments";
import SocialButtons from "../../Components/SocialButtons/SocialButtons";
import { blogPosts, formatBlogDate } from "../../data/blogData";
import { shoperyIcons } from "../../data/data";
import "../../styles/content-pages.css";
import "./Blog.css";
import "./BlogDetails.css";

const ArrowIcon = shoperyIcons.next;

function BlogDetails() {
  const { id } = useParams();
  const post = blogPosts.find((item) => item.id === id);
  if (!post)
    return (
      <main className="shopery-content-page">
        <Breadcrumb
          items={[
            { label: "Blog", to: "/blog" },
            { label: "Article not found" },
          ]}
        />
        <div className="container blog-page__content">
          <h1 className="blog-article__title">Article not found</h1>
          <p className="my-4">This article is not available.</p>
          <Link className="shopery-button" to="/blog">
            Back to Blog
          </Link>
        </div>
      </main>
    );
  return (
    <main className="shopery-content-page blog-details-page">
      <Breadcrumb
        items={[{ label: "Blog", to: "/blog" }, { label: "Single Blog" }]}
      />
      <div className="container blog-page__content">
        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <article className="blog-article">
              <img
                className="blog-article__hero"
                src={post.hero}
                alt={post.heroAlt}
              />
              <header className="blog-article__header">
                <BlogMeta post={post} />
                <h1 className="blog-article__title">{post.headline}</h1>
                <div className="blog-article__author-row d-flex flex-wrap align-items-center justify-content-between gap-3">
                  <div className="d-flex align-items-center gap-3">
                    <img src={post.author.image} alt={post.author.name} />
                    <div>
                      <p>{post.author.name}</p>
                      <span>
                        <time dateTime={post.date}>
                          {formatBlogDate(post.date)}
                        </time>{" "}
                        · {post.readMinutes} min read
                      </span>
                    </div>
                  </div>
                  <SocialButtons
                    includeLink
                    label="Share this article (preview)"
                  />
                </div>
              </header>
              <div className="blog-article__body">
                <p className="blog-article__lead">{post.body.lead}</p>
                <p>{post.body.paragraphs[0]}</p>
                <p>{post.body.paragraphs[1]}</p>
                <div className="row g-4 blog-article__images">
                  {post.body.images.map((item, index) => (
                    <div className="col-12 col-sm-6" key={item.src}>
                      <div
                        className={`blog-article__image blog-article__image--${index + 1}`}
                      >
                        <img src={item.src} alt={item.alt} loading="lazy" />
                      </div>
                    </div>
                  ))}
                </div>
                <p>{post.body.paragraphs[2]}</p>
              </div>
              <aside
                className="blog-article__promotion d-flex align-items-center"
                aria-label="Summer fruit sale"
              >
                <div>
                  <p>Summer Sales</p>
                  <h2>Fresh Fruit</h2>
                  <Link className="shopery-button" to="/shop">
                    Shop Now <ArrowIcon aria-hidden="true" />
                  </Link>
                </div>
                <div className="blog-article__discount">
                  <span>up to</span>
                  <strong>56%</strong>
                  <span>Off</span>
                </div>
              </aside>
            </article>
            <BlogComments key={post.id} comments={post.comments} />
          </div>
          <div className="col-12 col-lg-4 blog-details-page__sidebar">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}

export default BlogDetails;
