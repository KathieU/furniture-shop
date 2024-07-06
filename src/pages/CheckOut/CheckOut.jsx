import "./CheckOut.css";

const CheckOut = () => {
  return (
    <div className="checkout-page">
      <div className="checkout-form">
        <div className="personal-info">
          <h2>Personal Information</h2>
          <div className="input-group">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="input-group">
            <input type="tel" placeholder="Phone Number" />
            <input type="email" placeholder="Email" />
          </div>
        </div>

        <div className="delivery-details">
          <h2>Delivery Details</h2>
          <div className="input-group">
            <input type="text" placeholder="Country" />
            <input type="text" placeholder="State/City" />
          </div>
          <input
            type="text"
            placeholder="Shipping Address"
            className="full-width"
          />
          <div className="input-group">
            <input type="text" placeholder="Zip Code" />
            <input type="text" placeholder="Customized Notes" />
          </div>
        </div>

        <div className="payment-method">
          <h2>Payment Method</h2>
          <div className="payment-options">
            <label>
              <input type="radio" name="payment" value="paypal" />
              PayPal
            </label>
            <label>
              <input type="radio" name="payment" value="card" />
              Credit or Debit Card
            </label>
          </div>
          <div className="card-details">
            <input
              type="text"
              placeholder="Card Number"
              className="full-width"
            />
            <div className="input-group">
              <input type="text" placeholder="Expiry Date" />
              <input type="text" placeholder="CVV" />
            </div>
          </div>
        </div>
      </div>

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
  );
};

export default CheckOut;
