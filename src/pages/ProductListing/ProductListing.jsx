import products from "./products";
import "./ProductListing.css";
import Banner from "../../components/Banner/Banner";

const ProductListingPage = () => {
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
              <option value="price-asc">Low price</option>
              <option value="price-desc">High price</option>
            </select>
          </div>
          <div className="products">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                {product.discount && (
                  <div className="discount">{product.discount}</div>
                )}
                <img src={product.image} alt={product.name} />
                {/* <div className="image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="default"
                  />
                  <img
                    src={product.hoverImage}
                    alt={product.name}
                    className="hover"
                  />
                </div> */}
                <h4>{product.name}</h4>
                <p>{product.price}</p>
                <button>Add to cart</button>
              </div>
            ))}
          </div>

          <div className="pagination">
            <span>Prev</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>Next</span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductListingPage;
