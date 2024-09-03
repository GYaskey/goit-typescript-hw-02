import { useEffect, useState } from 'react';
import { fetchImages } from './assets/fetchImages';
import Modal from 'react-modal';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { Images } from './App.types';

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [images, setImages] = useState<Images[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchImages({ query, page });
        if (data.results.length === 0) {
          toast.error('No images were found');
          setShowLoadMore(false);
        } else {
          setImages(prev => [...prev, ...data.results]);
          setShowLoadMore(page < data.total_pages);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleChangeQuery = newQuery => {
    setImages([]);
    setQuery(newQuery);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  const openModal = imageUrl => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <main>
        <ImageGallery images={images} onImageClick={openModal} />
        {isLoading && <Loader />}
        {isError && <ErrorMessage />}
        {showLoadMore && images.length > 0 && (
          <LoadMoreBtn loadMore={loadMore} />
        )}
        <ImageModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          imageUrl={selectedImage}
        />
      </main>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default App;
