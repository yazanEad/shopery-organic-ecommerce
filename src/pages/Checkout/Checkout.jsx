import { useContext, useState } from "react";
import { Category_Product_Context } from "../../context/Context";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import FormField from "../../Components/Forms/FormField";
import { checkoutPreviewItems, checkoutRegions } from "../../data/checkoutData";
import "../../styles/content-pages.css";
import "./Checkout.css";

const formatPrice = (price) => `$${price.toFixed(2)}`;

function AddressFields({ prefix }) {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const regions =
    checkoutRegions.find((item) => item.country === country)?.states ?? [];
  return (
    <div className="row g-3">
      <FormField
        className="col-12 col-sm-6 col-xl-4"
        id={`${prefix}-first-name`}
        label="First name"
        placeholder="Your first name"
        autoComplete={`${prefix} given-name`}
        required
      />
      <FormField
        className="col-12 col-sm-6 col-xl-4"
        id={`${prefix}-last-name`}
        label="Last name"
        placeholder="Your last name"
        autoComplete={`${prefix} family-name`}
        required
      />
      <FormField
        className="col-12 col-xl-4"
        id={`${prefix}-company`}
        label={
          <>
            Company Name <span className="text-secondary">(optional)</span>
          </>
        }
        placeholder="Company name"
        autoComplete={`${prefix} organization`}
      />
      <FormField
        className="col-12"
        id={`${prefix}-address`}
        label="Street Address"
        placeholder="Street address"
        autoComplete={`${prefix} street-address`}
        required
      />
      <FormField
        className="col-12 col-sm-4"
        as="select"
        id={`${prefix}-country`}
        label="Country / Region"
        autoComplete={`${prefix} country-name`}
        value={country}
        onChange={(event) => {
          setCountry(event.target.value);
          setRegion("");
        }}
        required
      >
        <option value="" disabled>
          Select
        </option>
        {checkoutRegions.map((item) => (
          <option key={item.country}>{item.country}</option>
        ))}
      </FormField>
      <FormField
        className="col-12 col-sm-4"
        as="select"
        id={`${prefix}-state`}
        label="States"
        autoComplete={`${prefix} address-level1`}
        value={region}
        onChange={(event) => setRegion(event.target.value)}
        required
        disabled={!country}
      >
        <option value="" disabled>
          Select
        </option>
        {regions.map((state) => (
          <option key={state}>{state}</option>
        ))}
      </FormField>
      <FormField
        className="col-12 col-sm-4"
        id={`${prefix}-zip`}
        label="Zip Code"
        placeholder="Zip Code"
        autoComplete={`${prefix} postal-code`}
        required
      />
    </div>
  );
}

function Checkout() {
  const { cartItems = [] } = useContext(Category_Product_Context);
  const [differentAddress, setDifferentAddress] = useState(false);
  const [status, setStatus] = useState("");
  const items = cartItems.length ? cartItems : checkoutPreviewItems;
  // Match the cart's existing summary calculation without changing its context.
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <main className="shopery-content-page checkout-page">
      <Breadcrumb
        items={[
          { label: "Shopping Cart", to: "/shopping-cart" },
          { label: "Checkout" },
        ]}
      />
      <form
        className="container checkout-page__content"
        onSubmit={(event) => {
          event.preventDefault();
          setStatus(
            "This checkout is a preview. No order has been placed and no payment has been taken.",
          );
        }}
      >
        <div className="row g-4 align-items-start">
          <div className="col-12 col-lg-8">
            <section aria-labelledby="billing-title">
              <h1 id="billing-title" className="checkout-page__heading">
                Billing Information
              </h1>
              <AddressFields prefix="billing" />
              <div className="row g-3 mt-0">
                <FormField
                  className="col-12 col-sm-6"
                  id="billing-email"
                  label="Email"
                  type="email"
                  placeholder="Email Address"
                  autoComplete="email"
                  required
                />
                <FormField
                  className="col-12 col-sm-6"
                  id="billing-phone"
                  label="Phone"
                  type="tel"
                  placeholder="Phone number"
                  autoComplete="tel"
                  required
                />
              </div>
              <div className="form-check checkout-page__ship-toggle">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="different-address"
                  checked={differentAddress}
                  onChange={(event) =>
                    setDifferentAddress(event.target.checked)
                  }
                  aria-controls="shipping-address"
                  aria-expanded={differentAddress}
                />
                <label className="form-check-label" htmlFor="different-address">
                  Ship to a different address
                </label>
              </div>
              {differentAddress && (
                <section
                  id="shipping-address"
                  className="checkout-page__shipping"
                  aria-labelledby="shipping-title"
                >
                  <h2 id="shipping-title" className="checkout-page__heading">
                    Shipping Information
                  </h2>
                  <AddressFields prefix="shipping" />
                </section>
              )}
            </section>
            <section
              className="checkout-page__additional"
              aria-labelledby="additional-title"
            >
              <h2 id="additional-title" className="checkout-page__heading">
                Additional Info
              </h2>
              <FormField
                as="textarea"
                id="order-notes"
                label="Order Notes (Optional)"
                placeholder="Notes about your order, e.g. special notes for delivery"
                rows={3}
              />
            </section>
          </div>
          <div className="col-12 col-lg-4">
            <aside
              className="checkout-summary"
              aria-labelledby="order-summary-title"
            >
              <h2 id="order-summary-title">Order Summary</h2>
              <ul className="checkout-summary__products">
                {items.map((item) => (
                  <li key={item.id} className="d-flex align-items-center">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      width="60"
                      height="60"
                    />
                    <span className="checkout-summary__product-name">
                      {item.title}{" "}
                      <span className="text-nowrap">×{item.quantity}</span>
                    </span>
                    <strong className="ms-auto text-nowrap">
                      {formatPrice(item.price * item.quantity)}
                    </strong>
                  </li>
                ))}
              </ul>
              <dl className="checkout-summary__totals">
                <div>
                  <dt>Subtotal:</dt>
                  <dd>{formatPrice(subtotal)}</dd>
                </div>
                <div>
                  <dt>Shipping:</dt>
                  <dd>Free</dd>
                </div>
                <div className="checkout-summary__total">
                  <dt>Total:</dt>
                  <dd>{formatPrice(subtotal)}</dd>
                </div>
              </dl>
              <fieldset className="checkout-summary__payment">
                <legend>Payment Method</legend>
                {["Cash on Delivery", "Paypal", "Amazon Pay"].map(
                  (method, index) => (
                    <div className="form-check" key={method}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="payment"
                        id={`payment-${index}`}
                        value={method}
                        defaultChecked={index === 0}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`payment-${index}`}
                      >
                        {method}
                      </label>
                    </div>
                  ),
                )}
              </fieldset>
              <button className="shopery-button w-100" type="submit">
                Place Order
              </button>
              {status && (
                <p className="shopery-form-status" role="status">
                  {status}
                </p>
              )}
            </aside>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Checkout;
