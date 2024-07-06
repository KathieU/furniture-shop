import { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Brown Soft Cushion Armchair",
      price: 125000,
      quantity: 1,
      image: "path/to/image1.jpg",
    },
    {
      id: 2,
      name: "Gold Ceiling Lights",
      price: 98000,
      quantity: 2,
      image: "path/to/image2.jpg",
    },
    {
      id: 3,
      name: "Green Modern Day Sofa",
      price: 122000,
      quantity: 1,
      image: "path/to/image3.jpg",
    },
  ]);

  const updateQuantity = (id, delta) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
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
    <div className="cart-page">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </td>
              <td>₦{item.price.toLocaleString()}</td>
              <td>
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </td>
              <td>
                ₦{calculateSubtotal(item.price, item.quantity).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-summary">
        <div className="promo-delivery">
          <div className="promo">
            <input type="text" placeholder="Enter Code" />
            <button>Apply</button>
          </div>
          <div className="delivery">
            <select>
              <option value="">Select Delivery Mode</option>
              <option value="standard">Standard</option>
              <option value="express">Express</option>
            </select>
          </div>
        </div>
        <div className="totals">
          <p>Total: ₦{calculateTotal().toLocaleString()}</p>
          <p>Discount: ₦{discount.toLocaleString()}</p>
          <h3>Estimated Total: ₦{estimatedTotal.toLocaleString()}</h3>
          <button>
            <Link to="/checkout">Proceed To Checkout</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
