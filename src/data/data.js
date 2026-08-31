import {
  PiMagnifyingGlass,
  PiHeart,
  PiShoppingBag,
  PiShoppingCart,
  PiUser,
  PiEye,
  PiPlus,
  PiMinus,
  PiX,
  PiCaretDown,
  PiCaretRight,
  PiArrowRight,
  PiArrowLeft,
  PiTruck,
  PiHeadset,
  PiShieldCheck,
  PiPackage,
  PiStarFill,
  PiMapPin,
  PiPhoneCall,
  PiEnvelopeSimple,
  PiCalendarBlank,
  PiTag,
  PiChatCircleText,
  PiQuotes,
  PiTrash,
  PiFunnel,
  PiSlidersHorizontal,
  PiGridFour,
  PiListBullets,
  PiHouse,
  PiCheckCircle,
  PiCreditCard,
  PiLockKey,
  PiLeaf,
} from "react-icons/pi";

import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { IoIosArrowDown } from "react-icons/io";
export const shoperyIcons = {

  IoIosArrowDown:IoIosArrowDown,
  // Header / Navigation
  search: PiMagnifyingGlass,
  wishlist: PiHeart,
  cart: PiShoppingBag,
  shoppingCart: PiShoppingCart,
  account: PiUser,
  dropdown: PiCaretDown,
  breadcrumbNext: PiCaretRight,
  home: PiHouse,

  // Product cards
  addToCart: PiShoppingBag,
  quickView: PiEye,
  addToWishlist: PiHeart,
  ratingStar: PiStarFill,
  saleTag: PiTag,

  // Feature strip
  freeShipping: PiTruck,
  support: PiHeadset,
  securePayment: PiShieldCheck,
  moneyBack: PiPackage,

  // Shop / Listing
  filter: PiFunnel,
  filterControls: PiSlidersHorizontal,
  gridView: PiGridFour,
  listView: PiListBullets,
  next: PiArrowRight,
  previous: PiArrowLeft,

  // Cart / Checkout
  increase: PiPlus,
  decrease: PiMinus,
  remove: PiX,
  delete: PiTrash,
  checkout: PiCreditCard,
  secureCheckout: PiLockKey,
  success: PiCheckCircle,

  // Contact / Footer
  location: PiMapPin,
  phone: PiPhoneCall,
  email: PiEnvelopeSimple,

  // Blog / News
  calendar: PiCalendarBlank,
  comment: PiChatCircleText,

  // Testimonials
  quote: PiQuotes,

  // Brand / organic theme
  leaf: PiLeaf,

  // Social
  facebook: FaFacebookF,
  twitter: FaTwitter,
  pinterest: FaPinterestP,
  instagram: FaInstagram,
  youtube: FaYoutube,
};
