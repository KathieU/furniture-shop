import "./CheckOut.css";
import Banner from "../../components/Banner/Banner";
import { useState } from "react";
import paypal from "../../assets/icons/paypal.png";
import visa from "../../assets/icons/visa.png";
import armChair from "../../assets/productImages/armChair.png";
import lights from "../../assets/productImages/lights.png";
import greenSofa from "../../assets/productImages/greenSofa.png";
import { Link } from "react-router-dom";

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

  const cartItems = [
    {
      id: 1,
      name: "Brown Soft Cushion Armchair",
      price: 125000,
      quantity: 1,
      image: armChair,
    },
    {
      id: 2,
      name: "Gold Ceiling Lights",
      price: 98000,
      quantity: 2,
      image: lights,
    },
    {
      id: 3,
      name: "Green Modern Day Sofa",
      price: 122000,
      quantity: 1,
      image: greenSofa,
    },
  ];

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const discount = 18350;
  const deliveryFee = 5000;
  const estimatedTotal = calculateTotal() - discount + deliveryFee;
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
            {cartItems.map((item) => (
              <div key={item.id} className="order-item">
                <img src={item.image} alt={item.name} />
                <div className="order-item-text">
                  <h3>{item.name}</h3>
                  <p>₦{item.price.toLocaleString()}</p>
                  <div className="quantity">{item.quantity}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="order-totals">
            <p>
              Total{" "}
              <span className="bold">₦{calculateTotal().toLocaleString()}</span>
            </p>
            <p>
              Discount{" "}
              <span className="bold">-₦{discount.toLocaleString()}</span>
            </p>
            <p>
              Pick up delivery{" "}
              <span className="bold">₦{deliveryFee.toLocaleString()}</span>
            </p>
            <h3 className="bold">
              Estimated Total{" "}
              <span className="bolder">₦{estimatedTotal.toLocaleString()}</span>
            </h3>
          </div>

          <button className="payment-button">Make Payment</button>
          <button className="edit-cart-button">
            <Link to="/cart">Edit Cart</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
