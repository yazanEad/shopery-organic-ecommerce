// Figma checkout preview, used only when the current cart is empty.
// These capsicum products are not present in data/db.json.
export const checkoutPreviewItems = [
  { id: "preview-green-capsicum", title: "Green Capsicum", thumbnail: "/images/green-bell-peppers-large.jpg", price: 14, quantity: 5 },
  { id: "preview-red-capsicum", title: "Red Capsicum", thumbnail: "/images/red-bell-peppers-large.jpg", price: 14, quantity: 1 },
];

export const checkoutRegions = [
  { country: "United States", states: ["California", "Illinois", "South Dakota"] },
  { country: "Canada", states: ["Ontario", "Quebec", "British Columbia"] },
  { country: "Palestine", states: ["Hebron", "Ramallah", "Nablus", "Gaza"] },
];
