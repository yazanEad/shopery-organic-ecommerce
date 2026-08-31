import { useContext } from "react";
import { Link } from "react-router-dom";
import { Category_Product_Context } from "../../context/Context";
import { shoperyIcons } from "../../data/data";
import "./Cart.css";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const MinusIcon = shoperyIcons.decrease;
const PlusIcon = shoperyIcons.increase;
const RemoveIcon = shoperyIcons.remove;

function Cart() {
  const {
    cartItems,
    IncreaseQuantity,
    DecreaseQuantity,
    RemoveProductFromCart,
  } = useContext(Category_Product_Context);

  let TotalAmount = cartItems
    .map((item) => item.quantity * item.price)
    .reduce((a, c) => a + c, 0);
  const temporaryCartSummary = {
    subtotal: currencyFormatter.format(TotalAmount ?? 0),
    shipping: "Free",
    total: currencyFormatter.format(TotalAmount ?? 0),
  };

  // console.log(cartItems);

  
  function handleDiscountPercentage(d) {
    return d.discountPercentage
      ? d.price - d.price * (d.discountPercentage / 100)
      : d.price;
  }

  if (cartItems.length === 0) {
    return (
      
        <main className="cart-empty d-flex flex-column align-items-center justify-content-center">
          <p id="empty-cart-title" className="cart-empty__title">
            Opps!
          </p>
          <p className="cart-empty__message">Your cart is empty</p>
          <Link to="/shop" className="cart-empty__button" type="button">
            Visit Our Shop
          </Link>
        </main>
    );
  }
  return (
    <main className="cart-page">
      <section
        className="cart-page__content container"
        aria-labelledby="cart-page-title"
      >
        <h1 id="cart-page-title" className="cart-page__title text-center">
          My Shopping Cart
        </h1>

        <div className="row g-4 align-items-start">
          <div className="col-12 col-lg-8">
            <div className="cart-page__left-column d-flex flex-column gap-4">
              <section
                className="cart-table-card"
                aria-label="Shopping cart products"
              >
                <div className="table-responsive">
                  <table className="cart-table w-100">
                    <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Subtotal</th>
                        <th scope="col">
                          <span className="visually-hidden">Remove</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.id}>
                          <td className="cart-table__product">
                            <img
                              src={item.thumbnail}
                              alt={item.title}
                              loading="lazy"
                            />
                            <span>{item.title}</span>
                          </td>
                          <td data-label="Price">
                            {currencyFormatter.format(
                              handleDiscountPercentage(item),
                            )}
                          </td>
                          <td data-label="Quantity">
                            <div
                              className="cart-quantity d-inline-flex align-items-center justify-content-between"
                              aria-label={`Quantity ${item.quantity}`}
                            >
                              <button
                                onClick={() => {
                                  DecreaseQuantity(item);
                                }}
                              >
                                <MinusIcon aria-hidden="true" />
                              </button>
                              <span>{item.quantity}</span>
                              <button
                                onClick={() => {
                                  IncreaseQuantity(item);
                                }}
                              >
                                <PlusIcon aria-hidden="true" />
                              </button>
                            </div>
                          </td>
                          <td
                            className="cart-table__subtotal"
                            data-label="Subtotal"
                          >
                            {currencyFormatter.format(
                              handleDiscountPercentage(item) * item.quantity)}
                          </td>
                          <td className="cart-table__remove-cell">
                            <button
                              className="cart-table__remove d-inline-flex align-items-center justify-content-center"
                              onClick={() => {
                                RemoveProductFromCart(item);
                              }}
                            >
                              <RemoveIcon aria-hidden="true" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="cart-table-card__actions d-flex flex-column flex-sm-row justify-content-between gap-3">
                  <Link
                    to="/shop"
                    className="cart-page__secondary-button"
                    type="button"
                  >
                    Return to shop
                  </Link>
                </div>
              </section>

              <section
                className="cart-coupon d-flex flex-column flex-md-row align-items-md-center gap-3 gap-xl-4"
                aria-labelledby="cart-coupon-title"
              >
                <h2 id="cart-coupon-title">Coupon Code</h2>
                <div className="cart-coupon__field input-group flex-grow-1">
                  <label className="visually-hidden" htmlFor="coupon-code">
                    Coupon code
                  </label>
                  <input
                    id="coupon-code"
                    className="form-control"
                    type="text"
                    placeholder="Enter code"
                  />
                  <button type="button">Apply Coupon</button>
                </div>
              </section>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <aside
              className="cart-summary"
              aria-labelledby="cart-summary-title"
            >
              <h2 id="cart-summary-title">Cart Total</h2>
              <dl className="cart-summary__list mb-0">
                <div className="d-flex align-items-center justify-content-between">
                  <dt>Subtotal:</dt>
                  <dd>{temporaryCartSummary.subtotal}</dd>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <dt>Shipping:</dt>
                  <dd>{temporaryCartSummary.shipping}</dd>
                </div>
                <div className="cart-summary__total d-flex align-items-center justify-content-between">
                  <dt>Total:</dt>
                  <dd>{temporaryCartSummary.total}</dd>
                </div>
              </dl>
              <button className="cart-summary__checkout w-100" type="button">
                Proceed to checkout
              </button>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Cart;
