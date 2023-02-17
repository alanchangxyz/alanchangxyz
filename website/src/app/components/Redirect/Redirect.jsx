import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Redirect = ({ url }) => {
  useEffect(() => window.location.replace(url), []);
  return null;
};

Redirect.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Redirect;
