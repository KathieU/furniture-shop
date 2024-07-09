import "./CheckOut.css";
import Banner from "../../components/Banner/Banner";
import { useState } from "react";
import paypal from "../../assets/icons/paypal.png";
import visa from "../../assets/icons/visa.png";

const CheckOut = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    country: "",
    stateCity: "",
    shippingAddress: "",
    zipCode: "",
    notes: "",
    paymentMethod: "paypal",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Banner title="Check Out" subtitle="/ Cart" />
      <div className="checkout-page">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Personal Information</h2>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Akachukwu"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Adedeji"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="07091363071"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="nola11@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <h2>Delivery Details</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                name="country"
                placeholder="Nigeria"
                value={formData.country}
              />
            </div>
            <div className="form-group">
              <label>State/City</label>
              <input
                type="text"
                name="stateCity"
                placeholder="Lagos"
                value={formData.stateCity}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Shipping Address</label>
              <input
                type="text"
                name="shippingAddress"
                placeholder="Freedom way, lekki"
                value={formData.shippingAddress}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Zip Code</label>
              <input
                type="text"
                name="zipCode"
                placeholder="101245"
                value={formData.zipCode}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Customized Notes</label>
            <textarea
              name="notes"
              placeholder="Should be delivered carefully in boxes and in perfect condtion."
              value={formData.notes}
              onChange={handleChange}
            ></textarea>
          </div>

          <h2>Payment Method</h2>
          <div className="form-group payment-method">
            <div className="payment-style">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === "paypal"}
                  onChange={handleChange}
                />
                PayPal
              </label>
              <img src={paypal} alt="Paypal logo" />
            </div>

            <div className="payment-style">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === "card"}
                  onChange={handleChange}
                />
                Credit or Debit Card
              </label>
              <img src={visa} alt="Visa card logo" />
            </div>
          </div>
          {formData.paymentMethod === "card" && (
            <div className="card-details">
              <div className="form-row">
                <div className="form-group">
                  <label>Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="2245 - 6789 - 1011 - 2011"
                    value={formData.cardNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="12 / 12 / 2026"
                    value={formData.expiryDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Cvv</label>
                  <input
                    type="text"
                    name="cvv"
                    placeholder="---"
                    value={formData.cvv}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          )}
        </form>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="order-items">
            <div className="order-item">
              <img src="path/to/image1.jpg" alt="Product 1" />
              <p>Brown Soft Cushion Armchair</p>
              <p>₦125,000</p>
            </div>
            <div className="order-item">
              <img src="path/to/image2.jpg" alt="Product 2" />
              <p>Gold Ceiling Lights</p>
              <p>₦98,000</p>
            </div>
            <div className="order-item">
              <img src="path/to/image3.jpg" alt="Product 3" />
              <p>Green Modern Day Sofa</p>
              <p>₦122,000</p>
            </div>
          </div>
          <div className="order-total">
            <p>Total: ₦443,000</p>
            <p>Discount: -₦18,350</p>
            <p>Pick-up delivery: ₦5,000</p>
            <h3>Estimated Total: ₦429,650</h3>
          </div>
          <button className="checkout-button">Make Payment</button>
          <button className="edit-cart-button">Edit Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
