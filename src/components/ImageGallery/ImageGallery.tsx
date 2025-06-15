import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

import type { Image } from "../../api";

type ImageGalleryProps = {
  images: Image[];
  openModal: (data: { src: string; alt: string }) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image, index) => (
        <li key={`${image.id}_${index}`} className={css.card}>
          <ImageCard
            image={image}
            openModal={() =>
              openModal({
                src: image.urls.regular,
                alt: image.alt_description || "Image",
              })
            }
          />
        </li>
      ))}
    </ul>
  );
};

// const ImageGallery = ({ images, openModal }) => {
//   return (
//     <>
//       <ul className={css.gallery}>
//         {images.map((image) => (
//           <li key={image.id} className={css.card}>
//             <ImageCard
//               image={image}
//               openModal={() =>
//                 openModal({ src: image.urls.regular, alt: image.description })
//               }
//             />
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

export default ImageGallery;
