import { useEffect, useState } from "react";
import { Category_Product_Context } from "./Context";




export default function Category_ProductContext({children}){
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

  let [cartItems, setCartItems] = useState([]);

  function handleAddToCart(product, count = 1) {
    setCartItems((prevItems) => {
      let existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) => {
          // if (item.id === product.id) {
          //   return { ...item, quantity: item.quantity + count };
          // } else {
          //   return item;
          // }
          return item.id === product.id
            ? { ...item, quantity: item.quantity + count }
            : item;
        });
      }

      return [...prevItems, { ...product, quantity: count }];
    });
  }

  function isProductInCart(productId) {
    return cartItems.some((item) => item.id === productId);
  }

  function IncreaseQuantity(item) {
    setCartItems(
      cartItems.map((product) => {
        return product.id === item.id
          ? { ...item, quantity: item.quantity + 1 }
          : product;
      }),
    );
  }
  function DecreaseQuantity(item) {
    setCartItems(
      cartItems.map((product) => {
        return product.id === item.id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : product;
      }),
    );
  }

  function RemoveProductFromCart(product) {
    setCartItems(
      cartItems.filter((item) => {
        return item.id !== product.id;
      }),
    );
  }

  // Add to favorites

  let [favoriteProducts, setFavoriteProducts] = useState([]);

  
function toggleFavorite(itemProductId) {
  setFavoriteProducts((prevFavorites) => {
    if (prevFavorites.includes(itemProductId)) {
      return prevFavorites.filter((id) => id !== itemProductId);
    } else {
      return [...prevFavorites, itemProductId];
    }
  });
}

function RemoveFromFavorites(itemProductId) {
  setFavoriteProducts(favoriteProducts.filter((id)=> id !== itemProductId));
}
const wishlistProducts = products.filter((product) =>
  favoriteProducts.includes(product.id),
);
console.log(favoriteProducts);


  

  return (
    <>
      <Category_Product_Context
        value={{
          products,
          loading,
          error,
          categorys,
          loadingCategory,
          errorCategory,
          cartItems,
          setCartItems,
          handleAddToCart,
          isProductInCart,
          IncreaseQuantity,
          DecreaseQuantity,
          RemoveProductFromCart,
          favoriteProducts,
          toggleFavorite,
          RemoveFromFavorites,
          wishlistProducts,
        }}
      >
        {children}
      </Category_Product_Context>
    </>
  );
}