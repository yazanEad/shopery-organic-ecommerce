export const promotionBanners = [
  {
    id: "sale-of-month",
    variant: "countdown",
    image: "/images/promo-sale-of-month.jpg",
    imageAlt: "Fresh vegetables and fruit on a blue background",
    eyebrow: "Best Deals",
    title: "Sale of the Month",
    detail: {
      type: "countdown",
      items: [
        { value: "00", label: "Days" },
        { value: "02", label: "Hours" },
        { value: "18", label: "Mins" },
        { value: "46", label: "Secs" },
      ],
    },
    buttonLabel: "Shop Now",
    href: "/shop",
  },
  {
    id: "low-fat-meat",
    variant: "price",
    image: "/images/promo-low-fat-meat.jpg",
    imageAlt: "Raw fresh meat on a black stone board",
    eyebrow: "85% Fat Free",
    title: "Low-Fat Meat",
    detail: {
      type: "price",
      prefix: "Started at",
      value: "$79.99",
    },
    buttonLabel: "Shop Now",
    href: "/shop",
  },
  {
    id: "fresh-fruit",
    variant: "discount",
    image: "/images/promo-fresh-fruit.jpg",
    imageAlt: "Fresh summer fruit in colorful cups on a yellow background",
    eyebrow: "Summer Sale",
    title: "100% Fresh Fruit",
    detail: {
      type: "discount",
      prefix: "Up to",
      value: "64% OFF",
    },
    buttonLabel: "Shop Now",
    href: "/shop",
  },
 
];