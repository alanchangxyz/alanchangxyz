import { useEffect } from "react";
import { isMobile } from "react-device-detect";
import PropTypes from "prop-types";

const Redirect = ({ url, mobileUrl }) => {
  useEffect(() => window.location.replace(isMobile && mobileUrl ? mobileUrl : url), []);
  return null;
};

Redirect.propTypes = {
  url: PropTypes.string.isRequired,
  mobileUrl: PropTypes.string,
};

Redirect.defaultProps = {
  mobileUrl: null,
};

export default Redirect;
