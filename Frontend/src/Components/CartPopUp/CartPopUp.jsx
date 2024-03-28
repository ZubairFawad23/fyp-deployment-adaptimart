import "./CartPopUp.css";
import React from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

const disableScrollOnOpen = () => {
  document.body.style.overflow = "hidden";
};
const disableScrollOnClose = () => {
  document.body.style.overflow = "auto";
};

export default function CartPopUp({ cartpopup, setcartpopup }) {
  const progress = 50;
  const navigate = useNavigate();
  //   const progress = (totalAmount / freeShippingThreshold) * 100;
  return (
    <>
      <Modal
        className={"cart_popup_container"}
        overlayClassName="modal_Overlay"
        onAfterOpen={disableScrollOnOpen}
        onAfterClose={disableScrollOnClose}
        isOpen={cartpopup}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => {
          setcartpopup(false);
          console.log("cartpopup", cartpopup);
        }}
        shouldCloseOnEsc={true}
      >
        <div className="cart_popup_box">
          <div className="cart_popup_header">
            <div className="cart_popup_title">Cart</div>

            <button
              className="cart_popup_close_btn"
              onClick={(e) => {
                e.preventDefault();
                setcartpopup(false);
              }}
            >
              X
            </button>
          </div>

          <div className="cart_popup_progress_container">
            <div className="cart_popup_progress_text">
              You're $63 away from free shipping
            </div>

            <div className="progress_bar_container">
              <div
                className="progress_bar"
                style={{ width: `${progress}%` }}
                // style={{ width: 50 }}
              ></div>
            </div>
          </div>
        </div>

        <div className="cart_popup_footer">
          <div className="cart_popup_subtotal_box">
            <div className="cart_popup_subtotal_heading">Subtotal</div>

            <div className="cart_popup_subtotal_amount">$145</div>
          </div>
          <button
            className="cart_popup_checkout_btn"
            onClick={(e) => {
              e.preventDefault();
              setcartpopup(false);
              navigate("/checkout");
            }}
          >
            Continue to Checkout
          </button>
        </div>
      </Modal>
      {/* Apply blur effect to the rest of the page when modal is open */}
      {cartpopup && <div className="blurEffect"></div>}
    </>
  );
}
