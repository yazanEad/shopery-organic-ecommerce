// import { Link } from "react-router-dom";
import { shoperyIcons } from "../../data/data";
import { useEffect, useRef, useState } from "react";
import "./Navigation.css";
function NavBarOne() {
    
    const LocationIcon = shoperyIcons.location;
     const ArrowDown = shoperyIcons.IoIosArrowDown;

    // let a = ""
    
    let  [currency, setCurrency] = useState("USD $")
    let [onShowCurrencyList, setShowCurrencyList] = useState(false)

    let [language, setLanguage] = useState("English");
    let [onShowLanguageList, setShowLanguageList] = useState(false);
    
  const menuRefCurrency = useRef();
  const menuRefLanguage = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        // menuRefCurrency.current &&
        !menuRefCurrency.current.contains(event.target)
      ) {
        setShowCurrencyList(false);
      }
      if (
        menuRefLanguage.current &&
        !menuRefLanguage.current.contains(event.target)
      ) {
        setShowLanguageList(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
    
      return (
        <div className="navbar-one w-100">
          <div className="container navbar-one__inner d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-2 ">
            <div className="navbar-one__location d-flex align-items-center gap-2 flex-grow-1">
              <LocationIcon className="navbar-one__location-icon" />
              <p className="navbar-one__location-text">
                Store Location: Lincoln- 344, Illinois, Chicago, USA
              </p>
            </div>
            <div className="navbar-one__actions d-flex align-items-center align-self-end align-self-sm-auto gap-4">
              <div
                className="navbar-one__select currency position-relative"
                onClick={() => setShowCurrencyList(!onShowCurrencyList)}
                ref={menuRefCurrency}
              >
                <p className="navbar-one__select-label d-flex align-items-center gap-1 mb-0">
                  {currency}
                  <ArrowDown className="navbar-one__arrow" />
                </p>
                {onShowCurrencyList && (
                  <ul className="currency-list">
                    <li onClick={() => setCurrency("USD $")}>USD $</li>
                    <li onClick={() => setCurrency("EUR")}>EUR </li>
                  </ul>
                )}
              </div>
              <div
                className="navbar-one__select language position-relative"
                onClick={() => setShowLanguageList(!onShowLanguageList)}
                ref={menuRefLanguage}
              >
                <p className="navbar-one__select-label d-flex align-items-center gap-1 mb-0">
                  {language}
                  <ArrowDown className="navbar-one__arrow" />
                </p>
                {onShowLanguageList && (
                  <ul className="language-list">
                    <li onClick={() => setLanguage("English")}>English</li>
                    <li onClick={() => setLanguage("Espanol")}>Espanol</li>
                    <li onClick={() => setLanguage("Francais")}>Francais</li>
                  </ul>
                )}
              </div>
              {/* <div>{a ? <Link>Sign In</Link> : <Link>Sign Up</Link>}</div> */}
            </div>
          </div>
        </div>
      );
}

export default NavBarOne
