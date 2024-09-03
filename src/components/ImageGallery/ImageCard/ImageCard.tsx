import { Images } from '../../../App.types';
import s from './ImageCard.module.css';

interface ImageCardProps {
  image: Images;
  onImageClick: (imageUrl: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick }) => {
  return (
    <div
      className={s.imageCard}
      onClick={() => onImageClick(image.urls.regular)}
    >
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={s.galleryImage}
      />
    </div>
  );
};

export default ImageCard;
