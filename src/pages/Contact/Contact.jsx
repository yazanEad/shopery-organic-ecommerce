import { useState } from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import FormField from "../../Components/Forms/FormField";
import { contactDetails, contactMap } from "../../data/contactData";
import { shoperyIcons } from "../../data/data";
import "../../styles/content-pages.css";
import "./Contact.css";

export default function Contact() {
  const [status, setStatus] = useState("");
  return (
    <main className="shopery-content-page contact-page">
      <Breadcrumb items={[{ label: "Contact" }]} />
      <div className="container contact-page__content">
        <div className="row g-4 align-items-stretch">
          <div className="col-12 col-lg-3">
            <aside
              className="contact-info h-100"
              aria-label="Contact information"
            >
              <address className="m-0">
                {contactDetails.map((detail) => {
                  const Icon = shoperyIcons[detail.icon];
                  return (
                    <section
                      className="contact-info__item"
                      key={detail.id}
                      aria-label={detail.label}
                    >
                      <Icon aria-hidden="true" />
                      <div>
                        {detail.lines.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </section>
                  );
                })}
              </address>
            </aside>
          </div>
          <div className="col-12 col-lg-9">
            <section
              className="contact-form h-100"
              aria-labelledby="contact-title"
            >
              <h1 id="contact-title">Just Say Hello!</h1>
              <p className="contact-form__intro">
                Do you fancy saying hi to me or you want to get started with
                your project and you need my help? Feel free to contact me.
              </p>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setStatus(
                    "This is a preview. Your message has not been sent or saved.",
                  );
                }}
              >
                <div className="row g-3">
                  <FormField
                    className="col-12 col-sm-6"
                    id="contact-name"
                    label="Full name"
                    hideLabel
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                  <FormField
                    className="col-12 col-sm-6"
                    id="contact-email"
                    label="Email address"
                    hideLabel
                    placeholder="Your email address"
                    autoComplete="email"
                    type="email"
                    required
                  />
                  <FormField
                    className="col-12"
                    id="contact-subject"
                    label="Subject"
                    hideLabel
                    placeholder="Subject"
                    required
                  />
                  <FormField
                    className="col-12"
                    id="contact-message"
                    as="textarea"
                    label="Message"
                    hideLabel
                    placeholder="Your message"
                    rows={3}
                    required
                  />
                </div>
                <button className="shopery-button" type="submit">
                  Send Message
                </button>
                {status && (
                  <p className="shopery-form-status" role="status">
                    {status}
                  </p>
                )}
              </form>
            </section>
          </div>
        </div>
      </div>
      <figure className="contact-map m-0">
        <img src={contactMap.src} alt={contactMap.alt} loading="lazy" />
      </figure>
    </main>
  );
}
