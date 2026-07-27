
import { useEffect, useState } from "react";
import Hero from "../../Components/Hero/Hero";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import CategoryCard from "../../Components/Category/CategoryCard";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ProductShowcase from "../../Components/ProductShowcase/ProductShowcase";
import PromotionBanners from "../../Components/PromotionBanners/PromotionBanners";
import ClientTestimonials from "../../Components/ClientTestimonials/ClientTestimonials";
import CompanyLogos from "../../Components/CompanyLogos/CompanyLogos";
import InstagramGallery from "../../Components/InstagramGallery/InstagramGallery";


function Home() {
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(false);

  useEffect(() => {
    async function fetchProdect() {
      try {
        let response = await fetch("http://localhost:3000/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        let data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProdect();
  }, []);

  let [categorys, setCategorys] = useState([]);

  let [loadingCategory, setLoadingCategory] = useState(true);
  let [errorCategory, setErrorCategory] = useState(false);

  useEffect(() => {
    async function dataCategory() {
      try {
        let responseDataCategory = await fetch(
          "http://localhost:3000/categories",
        );
        if (!responseDataCategory.ok) {
          throw new Error("Failed to fetch products");
        }
        let data = await responseDataCategory.json();

        setCategorys(data);
      } catch (error) {
        setErrorCategory(true);
        console.log(error);
      } finally {
        setLoadingCategory(false);
      }
    }
    dataCategory();
  }, []);

  if (loading) {
    return <h1>جاري التحميل.........</h1>;
  }
  if (error) {
    return <h1>حدث خطأ أثناء تحميل المنتجات</h1>;
  }

  let featuredProducts = products
    .filter((product) => product.rating >= 4.5)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);
  //  اعلى تقييم
  const topRated = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);
  // اقوى التخفيضات
  const hotDeals = [...products]
    .sort((a, b) => b.discountPercentage - a.discountPercentage)
    .slice(0, 3);
  // الاكتر مبيعا
  const bestSeller = [...products]
    .sort((a, b) => a.stock - b.stock)
    .slice(0, 3);

let newestProducts = products.slice(-5);



  // categorys

  console.log(categorys);
  if (loadingCategory) {
    return <h2>جاري تحميل الفئاة</h2>;
  }
  if (errorCategory) {
    return <h2>هناك خطا</h2>;
  }

  return (
    <div>
      <Hero />
      <FeaturedProducts
        productShow={featuredProducts}
        topRated={topRated}
        hotDeals={hotDeals}
        bestSeller={bestSeller}
      />
      {/*  Top Category*/}
      <div className=" container p-5">
        <div className=" text-center ">
          <SectionTitle title="Top Category" />
        </div>
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-6  g-3 mt-1">
          {categorys.map((category) => {
            return (
              <div key={category.id} className="col">
                <CategoryCard category={category} />
              </div>
            );
          })}
        </div>
      </div>

      <PromotionBanners />

      {/* Newest Products */}
      <div className=" container">
        <div className="pt-5">
          <SectionTitle title="Newest Products" />
        </div>
        <ProductShowcase productShow={newestProducts} />
      </div>


      {/* Client  Testimonials */}
      <ClientTestimonials />

      <CompanyLogos />

      <InstagramGallery />

      
    </div>
  );
}

export default Home;
