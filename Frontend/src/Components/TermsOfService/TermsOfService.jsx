import "./TermsOfService.css";
import React from "react";
import Modal from "react-modal";

const disableScrollOnOpen = () => {
  document.body.style.overflow = "hidden";
};
const disableScrollOnClose = () => {
  document.body.style.overflow = "auto";
};

export default function TermsOfService({ termsofservice, settermsofservice }) {
  return (
    <>
      <Modal
        className={"termsofservice_container"}
        overlayClassName="termsofservice_modal_Overlay"
        onAfterOpen={disableScrollOnOpen}
        onAfterClose={disableScrollOnClose}
        isOpen={termsofservice}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => {
          settermsofservice(false);
          console.log("termsofservice", termsofservice);
        }}
        shouldCloseOnEsc={true}
      >
        <div className="termsofservice_box">
          <div className="termsofservice_header">
            <div className="termsofservice_title">Terms of Service</div>

            <button
              className="termsofservice_close_btn"
              onClick={(e) => {
                e.preventDefault();
                settermsofservice(false);
              }}
            >
              X
            </button>
          </div>

          <div className="termsofservice_content">
            At Adapti Mart, we take your privacy seriously and are dedicated to
            protecting the personal information you share with us. This Privacy
            Policy applies to all services provided by Adapti Mart, including
            our website, and outlines the types of information we collect from
            users of our services and how we use that information. We strongly
            encourage all users and visitors to read this policy carefully to
            understand how we manage and safeguard your personal information.
            This Policy is applicable to all users and visitors of our Services.
            <br />
            <br />
            We may periodically update this Privacy Policy to reflect changes in
            our business or to comply with applicable laws and regulations. In
            the event of significant changes to the Policy, we will notify you
            by sending a notice to your primary email address or prominently
            displaying a notice on our website. Minor changes or clarifications
            will take effect immediately. We recommend that you review this
            Privacy Policy regularly, including the date of the last update, to
            stay informed of any changes. Your continued use of our Services
            following the publication or notification of changes to this Policy
            signifies your acceptance of the updated Policy, including any
            alterations to the collection, use, and sharing of your Personal
            Information.
            <br />
            <br />
            <span className="termsofservice_content_headings">
              What Information Do We Collect?
            </span>
            <br />
            <br />
            We gather data, including Personal Information, to ensure the
            effective operation of our services and to offer you the finest
            experiences. Some of this information is provided directly by you,
            such as when you establish an account or reach out to us for
            support. We acquire additional information through the recording of
            your interactions with the Services, employing technologies like
            cookies, and by receiving error reports or usage data from the
            software running on your device.
            <br />
            <br />
            We collect, retain, and utilize the following information,
            encompassing Personal Information:
            <br />
            <b>Information You Provide: </b>
            <br />
            <ul>
              <li>
                - Details shared during the creation of an account on our
                website or when accessing our Services. This includes your name,
                email address, postal address, gender, zip code, country, and
                telephone number.
              </li>
              <li>
                - Your responses to surveys or reviews that we may request to
                assist in research or to guide our company's endeavors.
              </li>

              <li>
                - Additional Personal Information you voluntarily submit, such
                as your profession, date of birth, and your profile picture.
              </li>
              <li>
                - The name, email address, title, telephone number, and other
                contact details of your representative.
              </li>
              <li>- Any information you disclose when contacting us.</li>
            </ul>
          </div>
        </div>
      </Modal>
      {/* Apply blur effect to the rest of the page when modal is open */}
      {termsofservice && <div className="blurEffect"></div>}
    </>
  );
}
