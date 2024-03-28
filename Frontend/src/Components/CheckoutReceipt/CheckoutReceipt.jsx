import "./CheckoutReceipt.css";
import React from "react";
import Fade from "react-reveal";

export default function CheckoutReceipt() {
  return (
    <>
      <Fade right>
        <div className="checkout_receipt">
          <div className="checkout_receipt_promo_container">
            <input
              type="text"
              className="checkout_receipt_promo_input"
              placeholder="Enter Promo Code"
            />
            <button className="checkout_receipt_promo_btn">Apply</button>
          </div>

          <hr
            style={{
              margin: "4em 0",
            }}
          />

          <div className="checkout_receipt_subtotal_box">
            <div className="checkout_receipt_subtotal_text">Subtotal</div>
            <div className="checkout_receipt_subtotal_amount">$145</div>
          </div>
          <div className="checkout_receipt_subtotal_box">
            <div className="checkout_receipt_subtotal_text">Shipping</div>
            <div className="checkout_receipt_subtotal_amount">
              Calculated at next step
            </div>
          </div>
          <hr
            style={{
              margin: "4em 0",
            }}
          />
          <div className="checkout_receipt_subtotal_box">
            <div className="checkout_receipt_total_text">Total</div>
            <div className="checkout_receipt_total_amount">$145</div>
          </div>
        </div>
      </Fade>
    </>
  );
}
