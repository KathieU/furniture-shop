import products from "./products";
import "./ProductListing.css";
import Banner from "../../components/Banner/Banner";
import heartIcon from "../../assets/icons/heartIcon.png";
import redHeartIcon from "../../assets/icons/redHeartIcon.png";
import cartIcon from "../../assets/icons/cartIcon.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductListingPage = () => {
  const [clickedHearts, setClickedHearts] = useState({});

  const handleClick = (productId) => {
    setClickedHearts((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };
  return (
    <div>
      <Banner title="Product Catalog" />
      <div className="product-listing-page">
        <aside className="filter-options">
          <h3>Filter Options</h3>
          <div className="filter filter-category">
            <h3>Product Category</h3>
            <div className="button-list">
              <button className="filter-all">All</button>
              <button>Chairs</button>
              <button>Sofas</button>
              <button>Tables</button>
              <button>Beds</button>
              <button>Others</button>
            </div>
          </div>
          <div className="filter filter-material">
            <h3>Material</h3>
            <div className="button-list">
              <button className="filter-all">All</button>
              <button>Leather</button>
              <button>Plastic</button>
              <button>Acrylic</button>
              <button>Wood</button>
              <button>Plastic</button>
            </div>
          </div>
          <div className="filter filter-price">
            <h3>Price</h3>
            <p>₦100,000 - ₦500,000 </p>
            <input type="range" min="0" max="500000" />
          </div>
          <div className="filter filter-color">
            <h3>Colors</h3>
            <div className="color-options">
              <div
                className="color-option"
                style={{ backgroundColor: "#1E1E1E" }}
              ></div>
              <div
                className="color-option"
                style={{
                  backgroundColor: "#F8F9FA",
                  border: "1px solid #1E1E1E33",
                }}
              ></div>
              <div
                className="color-option"
                style={{ backgroundColor: "#B043F2" }}
              ></div>
              <div
                className="color-option"
                style={{ backgroundColor: "#BA7C34" }}
              ></div>
              <div
                className="color-option"
                style={{ backgroundColor: "#F970BA" }}
              ></div>
              <div
                className="color-option"
                style={{ backgroundColor: "#C0BCBC" }}
              ></div>
              <div
                className="color-option"
                style={{ backgroundColor: "#82F3A8" }}
              ></div>
              <div
                className="color-option"
                style={{ backgroundColor: "#84AAF4" }}
              ></div>
              <div
                className="color-option"
                style={{ backgroundColor: "#FFE794" }}
              ></div>
              <div
                className="color-option"
                style={{ backgroundColor: "#FC0725" }}
              ></div>
              <div
                className="color-option"
                style={{ backgroundColor: "#F1D4FB" }}
              ></div>
              <div
                className="color-option"
                style={{ backgroundColor: "#BBE2F3" }}
              ></div>
            </div>
          </div>
        </aside>

        <main className="product-list">
          <div className="sort-by">
            <label>Sort by:</label>
            <select>
              <option value="default">Default</option>
              <option value="price-asc">Material</option>
              <option value="price-desc">Color</option>
            </select>
          </div>
          <div className="products">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                {product.discount && (
                  <div className="discount">{product.discount}</div>
                )}
                <div className="product-card-image">
                  <img src={product.image} alt={product.name} />

                  <Link to="/cart" className="add-cart">
                    Add to cart <img src={cartIcon} alt="Cart Icon" />
                  </Link>
                </div>

                <div className="product-card-details">
                  <h4 className="ellipsis-text">{product.name}</h4>
                  <div className="price-wish">
                    <div className="product-price">
                      <p className="main-price">{product.price}</p>
                      <p className="discount-price">{product.discountPrice}</p>
                    </div>

                    <button onClick={() => handleClick(product.id)}>
                      <img
                        src={
                          clickedHearts[product.id] ? redHeartIcon : heartIcon
                        }
                        alt="Heart icon"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <span className="previous">Prev</span>
            <span className="page-number active">1</span>
            <span className="page-number">2</span>
            <span className="page-number">3</span>
            <span className="page-number">4</span>
            <span>...</span>
            <span className="page-number">25</span>
            <span className="next">Next</span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductListingPage;
