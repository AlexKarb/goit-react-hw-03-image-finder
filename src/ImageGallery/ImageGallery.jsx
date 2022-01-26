import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import List from './ImageGallery.styled';

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
