import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import List from './ImageGallery.styled';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, setActiveImage }) => (
  <List>
    {images.map(img => (
      <ImageGalleryItem
        src={img.webformatURL}
        alt={img.tags}
        key={img.webformatURL}
        onClick={() => setActiveImage(img)}
      />
    ))}
  </List>
);

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
    }),
  ).isRequired,
  setActiveImage: PropTypes.func.isRequired,
};
