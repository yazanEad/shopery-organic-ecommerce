import { useState } from "react";
import FormField from "../Forms/FormField";
import { formatBlogDate } from "../../data/blogData";

export default function BlogComments({ comments }) {
  const [status, setStatus] = useState("");
  const [allShown, setAllShown] = useState(false);
  return <div className="blog-comments">
    <section aria-labelledby="comment-form-title">
      <h2 id="comment-form-title">Leave a Comment</h2>
      <form onSubmit={event => { event.preventDefault(); setStatus("This is a preview. Your comment has not been posted or saved."); }}>
        <div className="row g-3">
          <FormField className="col-12 col-sm-6" id="comment-name" label="Full Name" placeholder="Your name" autoComplete="name" required />
          <FormField className="col-12 col-sm-6" id="comment-email" label="Email" type="email" placeholder="Your email address" autoComplete="email" required />
          <FormField className="col-12" id="comment-message" as="textarea" label="Message" placeholder="Write your comment here..." rows={3} required />
        </div>
        <div className="form-check my-3"><input className="form-check-input" id="comment-save" type="checkbox" /><label className="form-check-label" htmlFor="comment-save">Save my name and email in this browser for the next time I comment.</label></div>
        <button className="shopery-button" type="submit">Post Comments</button>
        {status && <p className="shopery-form-status" role="status">{status}</p>}
      </form>
    </section>
    <section className="blog-comments__list" aria-labelledby="comments-title">
      <h2 id="comments-title">Comments</h2>
      {comments.length ? <ul className="list-unstyled">{comments.map(comment => <li className="d-flex" key={comment.id}>
        <img src={comment.image} alt={comment.name} width="40" height="40" loading="lazy" />
        <div><p className="blog-comments__name">{comment.name}<span> · <time dateTime={comment.date}>{formatBlogDate(comment.date)}</time></span></p><p>{comment.text}</p></div>
      </li>)}</ul> : <p className="blog-comments__empty">No comments yet.</p>}
      {comments.length > 0 && <button className="shopery-button shopery-button--outline" type="button" onClick={() => setAllShown(true)}>Load More</button>}
      {allShown && <p className="shopery-form-status" role="status">All {comments.length} available comments are shown.</p>}
    </section>
  </div>;
}
