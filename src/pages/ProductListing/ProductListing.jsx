// import { useEffect, useState } from "react";
// import "./ProductListing.css";
// import Banner from "../../components/Banner/Banner";

// function ProductListing() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("/products.json")
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);

//   return (
//     <div>
//       <Banner title="ProductListing" />
//       <div className="product-listing">
//         {products.map((product) => (
//           <div key={product.id} className="product">
//             <img src={product.image} alt={product.name} />
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductListing;

import products from "./products";
import "./ProductListing.css";
import Banner from "../../components/Banner/Banner";

const ProductListingPage = () => {
  return (
    <div>
      <Banner title="Product Catalog" />
      <div className="product-listing-page">
        <aside className="filter-options">
          <div className="filter-category">
            <h3>Product Category</h3>
            <ul>
              <li>All</li>
              <li>Chairs</li>
              <li>Tables</li>
              <li>Sofas</li>
              <li>Lights</li>
            </ul>
          </div>
          <div className="filter-material">
            <h3>Material</h3>
            <ul>
              <li>All</li>
              <li>Leather</li>
              <li>Fabric</li>
              <li>Wood</li>
              <li>Plastic</li>
            </ul>
          </div>
          <div className="filter-price">
            <h3>Price</h3>
            <input type="range" min="0" max="50000" />
          </div>
          <div className="filter-color">
            <h3>Color</h3>
            <div className="color-options">
              <div
                className="color-option"
                style={{ backgroundColor: "#000" }}
              ></div>
              <div
                className="color-option"
                style={{ backgroundColor: "#fff" }}
              ></div>
              <div
                className="color-option"
                style={{ backgroundColor: "#f00" }}
              ></div>
              {/* Add more color options as needed */}
            </div>
          </div>
        </aside>
        <main className="product-list">
          <div className="sort-by">
            <label>Sort by:</label>
            <select>
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
          <div className="products">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                {product.discount && (
                  <div className="discount">{product.discount}</div>
                )}
                <img src={product.image} alt={product.name} />
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
