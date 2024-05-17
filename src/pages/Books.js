import React from "react";
import Title from "../components/tittle/Title";
import { useBook } from "../hooks/useBook";
import BookCard from "../components/bookcard/BookCard";
import CategoryContext from "../contexts/CategoryContext";
import CategoryList from "../components/categorylist/CategoryList";
import { useCategory } from "../hooks/useCategory";
import Loader from "../components/loader/Loader";

const Libros = () => {
  
  const books = useBook();
  const categories = useCategory();

  return (
    <div className="container-fliud">
      {books.length > 0 ? (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-3">
              <Title title="Libros"></Title>
              <CategoryContext.Provider value={{ categories }}>
                <div className="col-12">
                  <CategoryList />
                </div>
              </CategoryContext.Provider>
            </div>
            <div className="col-12 col-md-9">
              <Title title="Libros"></Title>
              <div className="row m-2 p-1">
                {books.map((book, index) => {
                  return <BookCard key={index} book={book} />;
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Libros;
