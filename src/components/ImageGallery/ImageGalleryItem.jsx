import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.scss';

const ImageGalleryItem = ({ url, tags, largeImageURL }) => (
  <li className={styles.ImageGalleryItem}>
    <img
      src={url}
      alt={tags}
      className={styles.ImageGalleryItem__image}
      data-large-image={largeImageURL}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string,
};

export default ImageGalleryItem;