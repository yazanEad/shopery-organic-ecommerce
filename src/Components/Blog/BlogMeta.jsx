import { shoperyIcons } from "../../data/data";

const TagIcon = shoperyIcons.saleTag;
const AuthorIcon = shoperyIcons.account;
const CommentIcon = shoperyIcons.comment;

export default function BlogMeta({ post }) {
  return <div className="blog-meta d-flex flex-wrap align-items-center">
    <span><TagIcon aria-hidden="true" />{post.label}</span>
    <span><AuthorIcon aria-hidden="true" /><span className="blog-meta__by">By</span> {post.author.role}</span>
    <span><CommentIcon aria-hidden="true" />{post.comments.length} Comments</span>
  </div>;
}
