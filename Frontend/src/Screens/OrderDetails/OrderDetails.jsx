import { useLocation } from "react-router-dom";
import "./OrderDetails.css";
import React from "react";
import {
  AdaptiMartLogoCart,
  UserProfileCustomerIcon,
  UserProfileDateIcon,
  UserProfileDeliveredIcon,
  UserProfileEmailIcon,
  UserProfileLocationIcon,
  UserProfilePaymentIcon,
  UserProfilePhoneIcon,
  UserProfilePlacedIcon,
  UserProfileProcessedIcon,
  UserProfileShippedIcon,
  UserProfileShippingIcon,
} from "../../Assets";
import moment from "moment";
import { Fade } from "react-reveal";

const OrderViewTableRow = ({ data, setOrdersList, index }) => {
  //   const deleteProduct = (data) => {
  //     console.log("delete product called");

  //     let delObj = {
  //       id: data ? data.id : 0,
  //     };
  //     deleteproduct(delObj)
  //       .then((res) => {
  //         console.log("resp", res);

  //         if (res.status === 200) {
  //           if (res.data.affectedRows === 1) {
  //             console.log("resp", res);
  //             alert("Product Deleted Successfully");
  //             getAllProducts(setProductsList);
  //           }
  //         }
  //       })
  //       .catch((err) => {
  //         console.log("err", err);
  //         alert("Please check your connection");
  //       });
  //   };

  return (
    <>
      <tr className="product_table_row">
        <td className="product_table_data">
          <div className="product_table_data_name_container">
            <img
              src={AdaptiMartLogoCart}
              // src={
              //   data.product_image
              //     ? "http://localhost:4000/" + data.product_image
              //     : AdaptiMartLogoCart
              // }
              alt=""
              className="product_table_data_img"
            />
            <div>{data.product_name}</div>
          </div>
        </td>
        <td
          className="product_table_data"
          style={{
            color: "#52C1C5",
          }}
        >
          {data.product_id}
        </td>
        <td className="product_table_data">{data.quantity}</td>
        <td className="product_table_data">${data.product_price}</td>
        <td className="product_table_data">
          ${data.quantity * data.product_price}
        </td>
      </tr>
    </>
  );
};

export default function OrderDetails() {
  const location = useLocation();
  let data = location.state ? location.state.datatosend : null;
  let user_data = location.state ? location.state.user_data : null;
  const products_count = Object.keys(data.products).length;
  const ShippingRate = 5.0;

  return (
    <>
      <div className="order_details_box">
        <Fade top>
          <div className="user_profile_page_title">Order Details</div>
          <div className="order_details_first_row_container">
            <div className="order_details_info_card">
              <div className="user_profile_info_card_title_container">
                <div>Order #{data.order_id}</div>
                <div className="user_profile_info_card_status">
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
                </div>
              </div>

              <div className="user_profile_content_row_container">
                <div className="user_profile_content_row_title_container">
                  <img
                    src={UserProfileDateIcon}
                    alt=""
                    className="user_profile_content_icon_img"
                  />
                  <div>Added</div>
                </div>

                <div>
                  {moment(data.order_created_on.split(".")[0]).format(
                    "D MMM YY"
                  )}
                </div>
              </div>
              <div className="user_profile_content_row_container">
                <div className="user_profile_content_row_title_container">
                  <img
                    src={UserProfilePaymentIcon}
                    alt=""
                    className="user_profile_content_icon_img"
                  />
                  <div>Payment Method</div>
                </div>

                <div>Cash On Delivery</div>
              </div>
              <div className="user_profile_content_row_container">
                <div className="user_profile_content_row_title_container">
                  <img
                    src={UserProfileShippingIcon}
                    alt=""
                    className="user_profile_content_icon_img"
                  />
                  <div>Shipping ID</div>
                </div>

                <div>{data.order_id}</div>
              </div>
            </div>
            <div className="order_details_info_card">
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

                <div>{user_data.first_name + " " + user_data.last_name}</div>
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

                <div>{user_data.email}</div>
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

                <div>{user_data.phone}</div>
              </div>
            </div>

            <div className="order_details_info_card">
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
                      {user_data.address + ", " + user_data.city}
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
                      {user_data.address + ", " + user_data.city}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <div className="order_details_second_row_container">
          <Fade left>
            <div className="order_details_table_container">
              <div className="order_details_title_container">
                <div className="order_details_title">Products List</div>
                <div className="order_details_product_count">
                  {products_count} Products
                </div>
              </div>

              <div className="order_details_container">
                <table
                  className="order_details_table"
                  style={{
                    // borderSpacing: "0 10px",
                    borderCollapse: "separate",
                  }}
                >
                  <thead>
                    <tr className="table_heading_row">
                      {/* <th className="order_details_table_heading">No.</th> */}
                      <th className="table_heading">Product Name</th>
                      <th className="table_heading">SKU</th>
                      <th className="table_heading">Quantity</th>
                      <th className="table_heading">Price</th>
                      <th className="table_heading">Total Price</th>
                    </tr>
                  </thead>

                  <tbody>
                    {data.products
                      ? data.products.map((item, index) => (
                          <OrderViewTableRow data={item} index={index} />
                        ))
                      : ""}
                  </tbody>
                </table>
              </div>
              <div className="order_details_bill_summary_container">
                <div className="order_details_total_price_container">
                  <div className="order_details_price_title">Sub Total</div>
                  <div className="order_details_price">${data.total_price}</div>
                </div>
                <div className="order_details_total_price_container">
                  <div className="order_details_price_title">Shipping Rate</div>
                  <div className="order_details_price">${ShippingRate}</div>
                </div>
                <div className="order_details_total_price_container">
                  <div className="order_details_price_title">Grand Total</div>
                  <div className="order_details_price">
                    <b>${data.total_price + ShippingRate}</b>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="order_details_timeline_container">
              <div className="order_details_timeline_title">Order Status</div>

              <div className="order_details_timeline_status_infocards_container">
                {data.date_placed ? (
                  <div className="order_details_timeline_infocard">
                    <img
                      src={UserProfilePlacedIcon}
                      alt=""
                      className="order_details_timeline_status_img"
                    />

                    <div className="order_details_timeline_infocard_content_container">
                      <div className="order_details_timeline_infocard_title">
                        Order Placed
                      </div>
                      <div className="order_details_timeline_infocard_content">
                        An order has been placed.
                      </div>

                      <div className="order_details_timeline_infocard_date">
                        {moment(data.date_placed.split(".")[0]).format(
                          "D MMM YY"
                        )}
                        , {moment(data.date_placed).format("HH:mm")}
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {data.date_processed ? (
                  <div className="order_details_timeline_infocard">
                    <img
                      src={UserProfileProcessedIcon}
                      alt=""
                      className="order_details_timeline_status_img"
                    />

                    <div className="order_details_timeline_infocard_content_container">
                      <div className="order_details_timeline_infocard_title">
                        Processing
                      </div>
                      <div className="order_details_timeline_infocard_content">
                        Seller has proccessed your order.
                      </div>

                      <div className="order_details_timeline_infocard_date">
                        {moment(data.date_processed.split(".")[0]).format(
                          "D MMM YY"
                        )}
                        , {moment(data.date_processed).format("HH:mm")}
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {data.date_shipped ? (
                  <div className="order_details_timeline_infocard">
                    <img
                      src={UserProfileShippedIcon}
                      alt=""
                      className="order_details_timeline_status_img"
                    />

                    <div className="order_details_timeline_infocard_content_container">
                      <div className="order_details_timeline_infocard_title">
                        Shipping
                      </div>
                      <div className="order_details_timeline_infocard_content">
                        The order has been shipped.
                      </div>

                      <div className="order_details_timeline_infocard_date">
                        {moment(data.date_shipped.split(".")[0]).format(
                          "D MMM YY"
                        )}
                        , {moment(data.date_shipped).format("HH:mm")}
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {data.date_delivered ? (
                  <div className="order_details_timeline_infocard">
                    <img
                      src={UserProfileDeliveredIcon}
                      alt=""
                      className="order_details_timeline_status_img"
                    />

                    <div className="order_details_timeline_infocard_content_container">
                      <div className="order_details_timeline_infocard_title">
                        Delivered
                      </div>
                      <div className="order_details_timeline_infocard_content">
                        The order has been delivered.
                      </div>

                      <div className="order_details_timeline_infocard_date">
                        {moment(data.date_delivered.split(".")[0]).format(
                          "D MMM YY"
                        )}
                        , {moment(data.date_delivered).format("HH:mm")}
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}
