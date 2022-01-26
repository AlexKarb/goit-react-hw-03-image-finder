import { Item, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ src, alt, onClick }) => (
  <Item onClick={onClick}>
    <Image src={src} alt={alt} />
  </Item>
);

export default ImageGalleryItem;
