import PropTypes from "prop-types";
import "./Banner.css";
import bannerChair from "../../assets/bannerChair.png";

const Banner = ({ title, subtitle }) => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>{title}</h1>
        <p>
          Shop /
          <span className="banner-subtitle"> All products {subtitle}</span>
        </p>
      </div>
      <div className="banner-image">
        <img src={bannerChair} alt="Chair" />
      </div>
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Banner;
