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
                src={
                  book.portada.length > 0
                    ? book.portada
                    : "https://covers.openlibrary.org/b/id/14624404-L.jpg"
                }
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
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Reservar Libro
              </button>
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
          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                    Desea reservar este libro?
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Cancelar
                  </button>
                  <button type="button" className="btn btn-success">
                    Aceptar
                  </button>
                </div>
              </div>
            </div>
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