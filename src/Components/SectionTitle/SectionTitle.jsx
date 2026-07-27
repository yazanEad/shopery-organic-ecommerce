

import "./SectionTitle.css"

function SectionTitle({ title }) {
  return (
    <div className="section-title  ">
      <div className="container">
        <h2>{title}</h2>
        <div className="section-title__dots ">
          <span />
          <span className="is-active" />
          <span />
        </div>
      </div>
    </div>
  );
}

export default SectionTitle;
