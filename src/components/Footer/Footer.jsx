import { Link } from "react-router-dom";
import "./Footer.css";
import footerChair from "../../assets/footerChair.png";

const Footer = () => {
  return (
    <footer>
      <div className="newsletter-section">
        <div className="newsletter-subscribe">
          <div className="newsletter-text">
            <h2>Subscribe To Our Newsletter</h2>
            <p>
              Join our family by subscribing to our newsletter for daily
              updates.
            </p>
          </div>
          <form className="newsletter-form">
            <input type="email" placeholder="nola17@gmail.com" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <img src={footerChair} alt="lady in a chair" />
      </div>
      <div className="footer-content">
        <div className="footer-left">
          <h3>Furniture.ng</h3>
          <p>
            Our carefully curated collection features the finest furniture to
            help upgrade your space.
          </p>
          <address>
            <p>12 Platinum Way, Lekki, Lagos</p>
            <p>+234 7091363071</p>
            <p>support@furniture.ng</p>
          </address>
        </div>
        <div className="footer-right">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/reviews">Reviews</Link>
              </li>
              <li>
                <Link to="/collections">New Collections</Link>
              </li>
              <li>
                <Link to="/events">Upcoming Events</Link>
              </li>
              <li>
                <Link to="/partnerships">Partnerships</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/news">Latest News</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/returns">Returns</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/security">Security</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>
                <Link to="/reviews">Reviews</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
