import { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import brownSofa from "../../assets/productImages/brownSofa.png";
import lights from "../../assets/productImages/lights.png";
import greenSofa from "../../assets/productImages/greenSofa.png";

const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Brown Modern Day Sofa",
      price: 125000,
      quantity: 1,
      image: brownSofa,
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
  ]);

  const updateQuantity = (id, delta) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      )
    );
  };

  const calculateSubtotal = (price, quantity) => price * quantity;

  const calculateTotal = () => {
    return cart.reduce(
      (acc, item) => acc + calculateSubtotal(item.price, item.quantity),
      0
    );
  };

  const discount = 18350;
  const estimatedTotal = calculateTotal() - discount;

  return (
    <div>
      <Banner title="Shopping Cart" />
      <div className="cart-page">
        <table>
          <thead>
            <tr>
              <th className="product-header">Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td className="cart-product">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                </td>
                <td>₦{item.price.toLocaleString()}</td>
                <td className="cart-quantity">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </td>
                <td>
                  ₦
                  {calculateSubtotal(
                    item.price,
                    item.quantity
                  ).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">
                  ₦{item.price.toLocaleString()}
                </p>
                <div className="cart-item-quantity">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <p className="cart-item-subtotal">
                  Subtotal: ₦
                  {calculateSubtotal(
                    item.price,
                    item.quantity
                  ).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <div className="promo">
            <h3>Promo/Coupon Code</h3>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter code" />
              <button type="submit">Apply</button>
            </form>
          </div>
          <div className="delivery">
            <h3>Delivery</h3>
            <select>
              <option value="">Select Delivery Mode</option>
              <option value="door-delivery">Door delivery</option>
              <option value="pick-up">Pick up</option>
            </select>
          </div>
        </div>
        <div className="totals">
          <div className="totals-content">
            <div className="totals-price">
              <p>Total</p>
              <p className="bold"> ₦{calculateTotal().toLocaleString()}</p>
            </div>
            <div className="totals-price">
              <p>Discount</p>
              <p className="bold"> ₦{discount.toLocaleString()}</p>
            </div>
            <div className="totals-price">
              <h3>Estimated Total</h3>
              <h3 className="bolder"> ₦{estimatedTotal.toLocaleString()}</h3>
            </div>
            <button>
              <Link to="/checkout">Proceed To Checkout</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
