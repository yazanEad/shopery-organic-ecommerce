export const mockShopToolbarData = {
  resultCount: 52,
  defaultSort: "latest",
  sortOptions: [
    { value: "latest", label: "Latest" },
    { value: "popular", label: "Most Popular" },
    { value: "price-low", label: "Price: Low to High" },
  ],
};

export const mockShopFiltersData = {
  categories: [
    { id: "fresh-fruit", label: "Fresh Fruit", count: 134 },
    { id: "vegetables", label: "Vegetables", count: 150, selected: true },
    { id: "cooking", label: "Cooking", count: 54 },
    { id: "snacks", label: "Snacks", count: 47 },
    { id: "beverages", label: "Beverages", count: 43 },
    { id: "beauty-health", label: "Beauty & Health", count: 38 },
    { id: "bread-bakery", label: "Bread & Bakery", count: 15 },
  ],
  priceRange: {
    minimum: 50,
    maximum: 1500,
  },
  ratings: [
    { value: 5, label: "5.0", selected: false },
    { value: 4, label: "4.0 & up", selected: false },
    { value: 3, label: "3.0 & up", selected: false },
    { value: 2, label: "2.0 & up", selected: false },
    { value: 1, label: "1.0 & up", selected: false },
  ],

  promotion: {
    discount: "79%",
    title: "Discount",
    subtitle: "on your first order",
    cta: "Shop Now",
    to: "/shop",
    image: "/images/mixed-vegetables-row.jpg",
    imageAlt: "Fresh vegetables arranged on a light background",
  },
  saleProducts: [
    {
      id: "sale-red-capsicum",
      title: "Red Capsicum",
      price: 32,
      rating: 5,
      thumbnail: "/images/red-bell-peppers-large.jpg",
    },
    {
      id: "sale-chanise-cabbage",
      title: "Chanise Cabbage",
      price: 24,
      rating: 5,
      thumbnail: "/images/napa-cabbage-head.jpg",
      isActive: true,
    },
    {
      id: "sale-green-capsicum",
      title: "Green Capsicum",
      price: 32,
      rating: 5,
      thumbnail: "/images/green-bell-peppers-large.jpg",
    },
  ],
};
