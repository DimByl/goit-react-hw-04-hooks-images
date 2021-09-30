import PropTypes from 'prop-types';
import styles from './ErrorNotice.module.scss';

const ErrorNotice = ({ error }) =>
  error && <p className={styles.ErrorNotice}>{error.message}</p>;

ErrorNotice.propTypes = {
  error: PropTypes.object,
};

export default ErrorNotice;