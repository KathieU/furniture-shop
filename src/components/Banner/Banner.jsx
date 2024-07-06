import PropTypes from "prop-types";
import "./Banner.css";

const Banner = ({ title, subtitle, linkText, link }) => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>{title}</h1>
        <p>
          <a href={link}>{linkText}</a> / {subtitle}
        </p>
      </div>
      <div className="banner-image">
        <img src="chair-image.png" alt="Chair" />
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
