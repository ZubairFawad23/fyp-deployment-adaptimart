import "./UserProfile.css";
import React, { useState } from "react";
import {
  UserProfileCustomerIcon,
  UserProfileEmailIcon,
  UserProfileLocationIcon,
  UserProfilePhoneIcon,
} from "../../Assets";
import Fade from "react-reveal";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const OrderTableRow = ({ data, setOrdersList, index, user_data }) => {
  const navigate = useNavigate();

  // const editOrder = (data) => {
  //   navigate("/edit_order_details", {
  //     state: {
  //       datatosend: data,
  //     },
  //   });
  // };

  const viewOrder = (data) => {
    navigate("/view-order-details", {
      state: {
        datatosend: data,
        user_data: user_data,
      },
    });
  };

  return (
    <>
      <tr
        className="product_table_row"
        onClick={() => {
          viewOrder(data);
        }}
      >
        <td className="product_table_data">{index + 1}</td>
        <td
          className="product_table_data"
          style={{
            color: "#52C1C5",
          }}
        >
          {data.order_id}
        </td>
        <td className="product_table_data">
          {data.order_status === 5
            ? "Placed"
            : data.order_status === 6
            ? "Processed"
            : data.order_status === 7
            ? "Shipped"
            : data.order_status === 8
            ? "Delivered"
            : data.order_status === 9
            ? "Returned"
            : data.order_status === 10
            ? "Catered"
            : ""}
        </td>
        <td className="product_table_data">{data.products[0].product_name}</td>
        <td className="product_table_data">${data.total_price}</td>
        <td
          className="product_table_data"
          style={{
            color: "Green",
          }}
        >
          Paid
        </td>
        <td className="product_table_data">
          {moment(data.order_created_on.split(".")[0]).format("D MMM YY")}
        </td>
      </tr>
    </>
  );
};

export default function UserProfile() {
  let data = {
    user_id: 3,
    first_name: "Ateeb",
    last_name: "Ahmed",
    email: "ateebah626@gmail.com",
    phone: "300123456789",
    otp: null,
    otp_generation_time: null,
    verified: 0,
    password: "Testing123",
    user_status: 2,
    role_id: 1,
    profile_pic: "profile_pic_1711488593968_1084264.png",
    address: "House no. 195, i11/1, street 17",
    city: "Islamabad",
    state: "Punjab",
    country: "Pakistan",
    postal_code: "38090",
    created_on: "2024-03-26T16:29:54.000Z",
    orders: [
      {
        order_id: 3,
        order_status: 5,
        date_placed: "2024-03-26T21:32:02.000Z",
        date_processed: null,
        date_shipped: null,
        date_delivered: null,
        total_price: 1500,
        discount: null,
        promo_code: null,
        payment_status: null,
        action_type: 1,
        order_created_on: "2024-03-26T21:32:02.000Z",
        edited_on: null,
        products: [
          {
            product_id: 1,
            quantity: 5,
            product_name: "Classic Mattress",
            product_price: 100,
            product_description: "Top Quality",
            product_image: "image_1711488689690_1273810.png",
          },
        ],
      },
      {
        order_id: 3,
        order_status: 5,
        date_placed: "2024-03-26T21:32:02.000Z",
        date_processed: null,
        date_shipped: null,
        date_delivered: null,
        total_price: 1500,
        discount: null,
        promo_code: null,
        payment_status: null,
        action_type: 1,
        order_created_on: "2024-03-26T21:32:02.000Z",
        edited_on: null,
        products: [
          {
            product_id: 1,
            quantity: 10,
            product_name: "Classic Mattress",
            product_price: 100,
            product_description: "Top Quality",
            product_image: "image_1711488689690_1273810.png",
          },
        ],
      },
      {
        order_id: 4,
        order_status: 5,
        date_placed: "2024-03-26T21:33:10.000Z",
        date_processed: null,
        date_shipped: null,
        date_delivered: null,
        total_price: 1500,
        discount: null,
        promo_code: null,
        payment_status: null,
        action_type: 1,
        order_created_on: "2024-03-26T21:33:10.000Z",
        edited_on: null,
        products: [
          {
            product_id: 1,
            quantity: 5,
            product_name: "Classic Mattress",
            product_price: 100,
            product_description: "Top Quality",
            product_image: "image_1711488689690_1273810.png",
          },
        ],
      },
      {
        order_id: 4,
        order_status: 5,
        date_placed: "2024-03-26T21:33:10.000Z",
        date_processed: null,
        date_shipped: null,
        date_delivered: null,
        total_price: 1500,
        discount: null,
        promo_code: null,
        payment_status: null,
        action_type: 1,
        order_created_on: "2024-03-26T21:33:10.000Z",
        edited_on: null,
        products: [
          {
            product_id: 1,
            quantity: 10,
            product_name: "Classic Mattress",
            product_price: 100,
            product_description: "Top Quality",
            product_image: "image_1711488689690_1273810.png",
          },
        ],
      },
    ],
  };
  const [OrdersList, setOrdersList] = useState(data.orders);

  return (
    <>
      <div className="user_profile_box">
        <Fade top>
          <div className="user_profile_page_title">User Profile</div>
          <div className="user_profile_first_row_container">
            <div className="user_profile_info_card">
              <div className="user_profile_info_card_title_container">
                <div>Customer</div>
                {/* <div>Processing</div> */}
              </div>

              <div className="user_profile_content_row_container">
                <div className="user_profile_content_row_title_container">
                  <img
                    src={UserProfileCustomerIcon}
                    alt=""
                    className="user_profile_content_icon_img"
                  />
                  <div>Customer</div>
                </div>

                <div>{data.first_name + " " + data.last_name}</div>
              </div>
              <div className="user_profile_content_row_container">
                <div className="user_profile_content_row_title_container">
                  <img
                    src={UserProfileEmailIcon}
                    alt=""
                    className="user_profile_content_icon_img"
                  />
                  <div>Email</div>
                </div>

                <div>{data.email}</div>
              </div>
              <div className="user_profile_content_row_container">
                <div className="user_profile_content_row_title_container">
                  <img
                    src={UserProfilePhoneIcon}
                    alt=""
                    className="user_profile_content_icon_img"
                  />
                  <div>Phone</div>
                </div>

                <div>{data.phone}</div>
              </div>
            </div>

            <div className="user_profile_info_card">
              <div className="user_profile_info_card_title_container">
                <div>Address</div>
                {/* <div>Processing</div> */}
              </div>

              <div className="user_profile_address_row_container">
                <div className="user_profile_address_row_title_container">
                  <img
                    src={UserProfileLocationIcon}
                    alt=""
                    className="user_profile_content_icon_img"
                  />
                  <div className="user_profile_address_container">
                    <div className="user_profile_address_title">Billing</div>
                    <div className="user_profile_address_content">
                      {data.address + ", " + data.city}
                    </div>
                  </div>
                </div>
                <div className="user_profile_content_row_title_container">
                  <img
                    src={UserProfileLocationIcon}
                    alt=""
                    className="user_profile_content_icon_img"
                  />
                  <div className="user_profile_address_container">
                    <div className="user_profile_address_title">Shipping</div>
                    <div className="user_profile_address_content">
                      {data.address + ", " + data.city}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className="user_profile_table_heading">Your Orders</div>
          <div className="product_table_container">
            <table
              className="product_table"
              style={{
                // borderSpacing: "0 10px",
                borderCollapse: "separate",
              }}
            >
              <thead>
                <tr className="table_heading_row">
                  <th className="table_heading">No.</th>
                  <th className="table_heading">Order ID</th>
                  <th className="table_heading">Status</th>
                  <th className="table_heading">Product Name</th>
                  <th className="table_heading">Total</th>
                  <th className="table_heading">Payment Status</th>
                  <th className="table_heading">Date Added</th>
                </tr>
              </thead>

              <tbody>
                {OrdersList
                  ? OrdersList.map((item, index) => (
                      <OrderTableRow
                        data={item}
                        setOrdersList={setOrdersList}
                        index={index}
                        user_data={data}
                      />
                    ))
                  : ""}
              </tbody>
            </table>
          </div>
        </Fade>
      </div>
    </>
  );
}
