import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookContext from "../contexts/BookContext";
import Comment from "../components/comment/Comment";
import Title from "../components/tittle/Title";
import BookCard from "../components/bookcard/BookCard";
import CategoryList from "../components/categorylist/CategoryList";
import { useCategory } from "../hooks/useCategory";
import CategoryContext from "../contexts/CategoryContext";

const BookDetail = () => {

    const categories = useCategory();
    const { bookId } = useParams();
    const { books } = useContext(BookContext);
    const book = books.find(book => book.id === +bookId);
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [book]);
    if (!book) {
      return <h2>Libro no encontrado</h2>;
    }
    return (
      <div className="contaier-fluid p-5">
        <div className="row">
          <div className="col-12 col-md-4">
            <img
              src="https://covers.openlibrary.org/b/id/14624404-L.jpg"
              className="img-fluid"
              alt="..."
            />
          </div>
          <div className="col-12 col-md-6">
            <h2>{book.nombre}</h2>
            <p>Autor: {book.autor}</p>
            <p>Año: {book.año_publicacion}</p>
            <p>Categoria: {book.categoria}</p>
            <p>ISBN: {book.isbn_13}</p>
            <p>
              Descripción: <br />
              {book.sinopsis}
            </p>
          </div>
          <CategoryContext.Provider value={{ categories}}>
            <div className="col-12 col-md-2">
              <CategoryList/>
            </div>
          </CategoryContext.Provider>
        </div>
        <div className="row">
          <Title title="Comentarios"></Title>
        </div>
        <div className="row">
          {book.criticas.map((critica, index) => {
            return <Comment key={index} comment={critica} />;
          })}
        </div>
        <div className="row">
          <Title title="Sugerencias"></Title>
        </div>
        <div className="row m-2 p-1">
          {books.map((similarBook, index) => {
            if (similarBook.categoria === book.categoria && similarBook.id !== book.id) {
              return <BookCard key={index} book={similarBook} />;
            }
          })}
        </div>
      </div>
    );
}

export default BookDetail;