import React from 'react';
import Carousel from '../components/carousel/Carousel';
import { useCarousel } from '../hooks/useCarousel';
import CarouselContext from '../contexts/CarouselContext';
import Title from '../components/tittle/Title';
import { useBooks } from '../hooks/useBooks';
import BookCard from '../components/bookcard/BookCard'
import { useCategory } from '../hooks/useCategory';
import CategoryCard from '../components/categorycard/CategoryCard';
import Loader from '../components/loader/Loader';
const Home = () => {

  const carousel = useCarousel();
  const { books } = useBooks({ page: 0 });
  const categories = useCategory();

  return (
    <div className="container-fluid">
      {carousel.length > 0 ? (
        <div className="container-fluid">
          <div className="row">
            <CarouselContext.Provider value={{ carousel }}>
              {carousel.length > 0 ? <Carousel /> : <h1>Loading...</h1>}
            </CarouselContext.Provider>
          </div>
          <div className="row">
            <Title title="Categorias"></Title>
          </div>
          <div className="row m-2 p-1">
            {categories.map((category, index) => {
              return <CategoryCard key={index} category={category} />;
            })}
          </div>
          <div className="row">
            <Title title="Mas populares"></Title>
          </div>

          <div className="row m-2 p-1">
            {books && books.map((book, index) => {
              // if (book.popularidad > 9.6) {
              return <BookCard key={index} book={book} />;
              // }
            })}
          </div>

        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Home;