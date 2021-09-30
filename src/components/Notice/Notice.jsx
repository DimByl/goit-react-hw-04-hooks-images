import PropTypes from 'prop-types';
import styles from './Notice.module.scss';

const Notice = ({ notice }) =>
  notice && <p className={styles.Notice}>{notice}</p>;

Notice.propTypes = {
  notice: PropTypes.string.isRequired,
};

export default Notice;