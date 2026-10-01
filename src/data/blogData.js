// Local editorial fixtures from the requested Figma screens; no remote content.
const cardTitle =
  "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.";
export const blogAuthor = {
  name: "Cameron Williamson",
  role: "Admin",
  image: "/images/female-doctor-portrait.png",
};
export const blogCategories = [
  "Fresh Fruit",
  "Vegetables",
  "Cooking",
  "Snacks",
  "Beverages",
  "Beauty & Health",
  "Bread & Bakery",
];
export const blogTags = [
  "Healthy",
  "Low fat",
  "Vegetarian",
  "Bread",
  "Kid foods",
  "Vitamins",
  "Snacks",
  "Tiffin",
  "Meat",
  "Lunch",
  "Dinner",
];
export const blogComments = [
  {
    id: 1,
    name: "Annette Black",
    date: "2021-04-26",
    image: "/images/male-portrait-beard-outdoor.png",
    text: "In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.",
  },
  {
    id: 2,
    name: "Devon Lane",
    date: "2021-04-24",
    image: "/images/camera-portrait.png",
    text: "Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit. Nam hendrerit, velit ut aliquam euismod, nibh tortor rutrum nisi, ac sodales nunc eros porta nisi. Sed scelerisque, est eget aliquam venenatis, est sem tempor eros.",
  },
  {
    id: 3,
    name: "Jacob Jones",
    date: "2021-04-20",
    image: "/images/male-portrait-professional.png",
    text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    id: 4,
    name: "Jane Cooper",
    date: "2021-04-18",
    image: "/images/male-portrait-smiling.png",
    text: "Pellentesque feugiat, nibh vel vehicula pretium, nibh nibh bibendum elit, a volutpat arcu dui nec orci. Aenean dui odio, ullamcorper quis turpis ac, volutpat imperdiet ex.",
  },
  {
    id: 5,
    name: "Darrell Steward",
    date: "2021-04-07",
    image: "/images/female-portrait-pink-background.png",
    text: "Nulla molestie interdum ultricies.",
  },
];
export const blogBody = {
  lead: "Maecenas lacinia felis nec placerat sollicitudin. Quisque placerat dolor at scelerisque imperdiet. Phasellus tristique felis dolor.",
  paragraphs: [
    "Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus. Fusce malesuada sed velit ut dictum. Morbi faucibus vitae orci at euismod. Integer auctor augue in erat vehicula, quis fermentum ex finibus.",
    "Mauris pretium elit a dui pulvinar, in ornare sapien euismod. Nullam interdum nisl ante, id feugiat quam euismod commodo. Sed ultrices lectus ut iaculis rhoncus. Aenean non dignissim justo, at fermentum turpis. Sed molestie, ligula ut molestie ultrices, tellus ligula viverra neque, malesuada consectetur diam sapien volutpat risus. Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit.",
    "Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate quis vehicula ut, vestibulum ut mauris. Nullam non felis varius dui rutrum rutrum in a nisi. Suspendisse elementum rutrum lorem sed luctus. Proin iaculis euismod metus non sollicitudin. Duis vel luctus lacus. Nullam faucibus iaculis convallis. In ullamcorper nibh ipsum, eget lacinia eros pulvinar a. Integer accumsan arcu nec faucibus ultricies.",
  ],
  images: [
    {
      src: "/images/oranges-pile-large.jpg",
      alt: "Fresh oranges piled together",
    },
    {
      src: "/images/mango-plate-drink.jpg",
      alt: "Sliced mango with a fresh fruit drink",
    },
  ],
};
const articleImages = [
  [
    "citrus-slices-pattern-02.jpg",
    "Slices of colorful citrus fruit",
    "Fresh Fruit",
  ],
  [
    "lemon-frame-blue.png",
    "Lemon arranged as a light bulb on blue",
    "Fresh Fruit",
  ],
  [
    "root-vegetables-dark-still-life-03.jpg",
    "Fresh vegetables against a dark background",
    "Vegetables",
  ],
  ["market-produce-spread.jpg", "Fresh produce at a farmers market", "Cooking"],
  [
    "bell-peppers-black-background-02.jpg",
    "Colorful peppers splashing in water",
    "Vegetables",
  ],
  [
    "orange-blue-background-02.jpg",
    "An orange against a blue background",
    "Beverages",
  ],
  [
    "oranges-on-branch-tall.jpg",
    "Oranges hanging from a leafy branch",
    "Fresh Fruit",
  ],
  ["strawberry-isolated.jpg", "A ripe red strawberry", "Snacks"],
  [
    "green-lemons-on-tree.jpg",
    "Green citrus growing on a tree",
    "Beauty & Health",
  ],
  [
    "orange-water-slices-blue-tall.jpg",
    "Orange slices falling into water",
    "Fresh Fruit",
  ],
  ["mango-halves-large.jpg", "Fresh mango halves", "Fresh Fruit"],
  ["oranges-on-branch-tall.jpg", "Ripe oranges on a branch", "Fresh Fruit"],
  ["blueberries-bowl.jpg", "A bowl of fresh blueberries", "Snacks"],
];
const recentTitles = [
  "Curabitur porttitor orci eget nequ accumsan.",
  "Donec mattis arcu faucibus suscipit viverra.",
  "Quisque posuere tempus rutrum. Integer velit ex.",
];
export const blogPosts = articleImages.map(
  ([image, imageAlt, category], index) => ({
    id: String(index + 1),
    title: index < 10 ? cardTitle : recentTitles[index - 10],
    headline:
      index === 0
        ? "Maecenas tempor urna sed quam mollis, a placerat dui fringill Suspendisse."
        : index < 10
          ? cardTitle
          : recentTitles[index - 10],
    image: `/images/${image}`,
    imageAlt,
    category,
    label: "Food",
    hero:
      index === 0
        ? "/images/orange-slices-isolated-02.jpg"
        : `/images/${image}`,
    heroAlt: index === 0 ? "Fresh oranges and orange slices" : imageAlt,
    date: index < 10 ? "2021-11-18" : "2021-04-25",
    readMinutes: 6,
    author: blogAuthor,
    body: blogBody,
    comments: index === 0 ? blogComments : [],
    tags: [
      "Healthy",
      "Low fat",
      index % 2 ? "Vitamins" : "Vegetarian",
      index === 7 ? "Kid foods" : "Dinner",
    ],
    hasVideoPreview: index === 3,
  }),
);
export const recentPosts = blogPosts.slice(-3);
export const blogGallery = [
  {
    src: "/images/root-vegetables-dark-still-life-03.jpg",
    alt: "Fresh vegetables",
  },
  { src: "/images/broccoli-isolated.jpg", alt: "Broccoli" },
  { src: "/images/salad-bowl-overhead.jpg", alt: "Vegetable salad" },
  { src: "/images/bell-peppers-black-background-02.jpg", alt: "Bell peppers" },
  { src: "/images/carrots-closeup.jpg", alt: "Fresh carrots" },
  { src: "/images/green-chili-wood.jpg", alt: "Green chili" },
  { src: "/images/oranges-on-branch-tall.jpg", alt: "Oranges" },
  { src: "/images/cucumber-slices-dark.jpg", alt: "Cucumber slices" },
];
export const formatBlogDate = (
  date,
  options = { month: "short", day: "numeric", year: "numeric" },
) =>
  new Intl.DateTimeFormat("en-US", { ...options, timeZone: "UTC" }).format(
    new Date(`${date}T12:00:00Z`),
  );
