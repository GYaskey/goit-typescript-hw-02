import { Images } from '../../App.types';
import ImageCard from './ImageCard/ImageCard';
import s from './ImageGallery.module.css';

interface ImageGalleryProps {
  images: Images[];
  onImageClick: (imageUrl: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => (
  <ul className={s.gallery}>
    {images.map(image => (
      <li key={image.id} className={s.galleryItem}>
        <ImageCard image={image} onImageClick={onImageClick} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
