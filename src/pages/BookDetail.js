import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookContext from "../contexts/BookContext";
import Title from "../components/tittle/Title";
import BookCard from "../components/bookcard/BookCard";
import Loader from "../components/loader/Loader";
import { useBook } from "../hooks/useBook";

const BookDetail = () => {

  const { bookId } = useParams();
  // const { books } = useContext(BookContext);


  const { book, loading } = useBook(bookId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [book]);

  return (
    <div className="container-fluid">
      {!loading && book ? (
        <div className="contaier-fluid p-5">
          <div className="row">
            <div className="col-12 col-md-4">
              <img
                src={book.portada.length > 0 ? book.portada : "https://covers.openlibrary.org/b/id/14624404-L.jpg"}
                className="img-fluid"
                alt="..."
              />
            </div>
            <div className="col-12 col-md-6">
              <h2>{book.titulo}</h2>
              <p>Autor: {book.autor}</p>
              <p>Año: {book.fechaPublicacion}</p>
              <p>Categoria: {book.genero}</p>
              <p>ISBN: {book.isbn}</p>
              <p>
                Descripción: <br />
                {book.sinopsis}
              </p>
            </div>
          </div>
          <div className="row">
            <Title title="Comentarios"></Title>
          </div>
          <div className="row">
            {/* {book.criticas.map((critica, index) => {
            return <Comment key={index} comment={critica} />;
          })} */}
          </div>
          <div className="row">
            <Title title="Sugerencias"></Title>
          </div>
          {/* <div className="row m-2 p-1">
          {books.map((similarBook, index) => {
            if (
              similarBook.genero === book.genero &&
              similarBook.id !== book.id
            ) {
              return <BookCard key={index} book={similarBook} />;
            }
          })}
        </div> */}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default BookDetail;