import { useNavigate } from "react-router-dom";
import { CheckoutPathArrow } from "../../Assets";
import CheckoutReceipt from "../../Components/CheckoutReceipt/CheckoutReceipt";
import PrivacyPolicy from "../../Components/PrivacyPolicy/PrivacyPolicy";
import RefundPolicy from "../../Components/RefundPolicy/RefundPolicy";
import ShippingPolicy from "../../Components/ShippingPolicy/ShippingPolicy";
import TermsOfService from "../../Components/TermsOfService/TermsOfService";
import "./Checkout.css";
import React, { useState } from "react";
import { Fade } from "react-reveal";

export default function Checkout() {
  const [refundpolicy, setrefundpolicy] = useState(false);
  const [shippingpolicy, setshippingpolicy] = useState(false);
  const [privacypolicy, setprivacypolicy] = useState(false);
  const [termsofservice, settermsofservice] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      <RefundPolicy
        refundpolicy={refundpolicy}
        setrefundpolicy={setrefundpolicy}
      />
      <ShippingPolicy
        shippingpolicy={shippingpolicy}
        setshippingpolicy={setshippingpolicy}
      />
      <PrivacyPolicy
        privacypolicy={privacypolicy}
        setprivacypolicy={setprivacypolicy}
      />
      <TermsOfService
        termsofservice={termsofservice}
        settermsofservice={settermsofservice}
      />

      <div className="checkout_main_box">
        <Fade left>
          <div className="checkout_box">
            <div className="checkout_heading">Checkout</div>
            <div className="checkout_path_container">
              <div
                className="checkout_path_label"
                style={{
                  color: "var(--color-main)",
                }}
              >
                Information
              </div>

              <img
                src={CheckoutPathArrow}
                alt="Path Arrow"
                className="checkout_path_arrow_img"
              />
              <div className="checkout_path_label">Payment</div>
            </div>

            <form className="checkout_form">
              <div className="checkout_information_label_container">
                <div className="checkout_label">Contact Information</div>
                <div className="checkout_label">
                  Already have an account?{" "}
                  <span
                    className="checkout_login_link"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Log in
                  </span>
                </div>
              </div>

              <input
                type="email"
                className="checkout_input"
                placeholder="borkat2042@gmail.com"
              />
              <div className="checkout_label">Shipping Address</div>
              <input
                type="text"
                className="checkout_input"
                placeholder="First Name"
              />
              <input
                type="text"
                className="checkout_input"
                placeholder="Last Name"
              />
              <input
                type="text"
                className="checkout_input"
                placeholder="Phone Number"
              />
              <input
                type="text"
                className="checkout_input"
                placeholder="Country"
              />
              <input
                type="text"
                className="checkout_input"
                placeholder="City"
              />
              <input
                type="text"
                className="checkout_input"
                placeholder="Postal Code"
              />
              {/* <input
              type="text"
              className="checkout_input"
              placeholder="Last Name"
            /> */}

              <button
                className="checkout_continue_shipping_btn"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/checkout-payment");
                }}
              >
                Continue to Shipping
              </button>
            </form>

            <div className="checkout_policy_links_container">
              <div
                className="checkout_policy_link"
                onClick={(e) => {
                  e.preventDefault();
                  setrefundpolicy(true);
                }}
              >
                Refund Policy
              </div>
              <div
                className="checkout_policy_link"
                onClick={(e) => {
                  e.preventDefault();
                  setshippingpolicy(true);
                }}
              >
                Shipping Policy
              </div>
              <div
                className="checkout_policy_link"
                onClick={(e) => {
                  e.preventDefault();
                  setprivacypolicy(true);
                }}
              >
                Privacy Policy
              </div>
              <div
                className="checkout_policy_link"
                onClick={(e) => {
                  e.preventDefault();
                  settermsofservice(true);
                }}
              >
                Terms of Service
              </div>
            </div>
          </div>
        </Fade>

        <CheckoutReceipt />
        {/* </Fade> */}
      </div>
    </>
  );
}
