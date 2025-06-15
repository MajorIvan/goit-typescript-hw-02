import css from "./ImageCard.module.css";
import type { Image } from "../../api";

type ImageCardProps = {
  image: Image;
  openModal: (image: { src: string; alt: string }) => void;
};

const ImageCard: React.FC<ImageCardProps> = ({ image, openModal }) => {
  return (
    <img
      onClick={() =>
        openModal({
          src: image.urls.regular,
          alt: image.alt_description || "Image",
        })
      }
      className={css.image}
      src={image.urls.small}
      alt={image.alt_description || "Image"}
    />
  );
};

// const ImageCard = ({ image, openModal }) => {
//   return (
//     <>
//       <img
//         onClick={openModal}
//         className={css.image}
//         src={image.urls.small}
//         alt={image.description}
//       />
//     </>
//   );
// };

export default ImageCard;
