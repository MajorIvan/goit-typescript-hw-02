import { useState, useEffect } from "react";
import fetchImages from "../../api";
import type { Image } from "../../api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

const App = () => {
  // const [query, setQuery] = useState("");
  // const [images, setImages] = useState([]);
  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const [modalIsOpen, setIsOpen] = useState(false);
  // const [imageUrl, setImageUrl] = useState({ src: "", alt: "" });

  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<{ src: string; alt: string }>({
    src: "",
    alt: "",
  });

  // const searchImages = async (newQuery) => {
  //   setQuery(`${Date.now()}/${newQuery}`);
  //   setPage(1);
  //   setImages([]);
  // };

  const searchImages = async (newQuery: string): Promise<void> => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    setError(false);
    setLoading(true);
    const fetchData = async () => {
      try {
        const { results } = await fetchImages(query.split("/")[1], page);
        setImages((prevImages) => [...prevImages, ...results]);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  // function openModal(image) {
  //   setImageUrl(image);
  //   setIsOpen(true);
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  const openModal = (image: { src: string; alt: string }): void => {
    setImageUrl(image);
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };

  return (
    <div>
      <SearchBar onSubmit={searchImages} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        src={imageUrl.src}
        alt={imageUrl.alt}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default App;
