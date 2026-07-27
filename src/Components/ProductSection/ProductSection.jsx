import ProductSectionCard from "./ProductSectionCard";

function ProductSection({title,products}) {
  const sectionId = `product-section-${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;

  return (
    <section className="product-section" aria-labelledby={sectionId}>
      <div className="product-section__column">
        <h2 id={sectionId} className="product-section__title">
          {title}
        </h2>
        <div className="d-flex flex-column gap-2">
          {products.map((product) => (
            <ProductSectionCard
              key={product.id}
              product={product}
              // isActive={product.isActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
