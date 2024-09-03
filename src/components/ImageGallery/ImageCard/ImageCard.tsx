import s from './ImageCard.module.css';

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className={s.imageCard} onClick={() => onImageClick(image.urls.full)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={s.galleryImage}
      />
    </div>
  );
};

export default ImageCard;
