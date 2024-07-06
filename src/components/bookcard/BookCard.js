import React from "react";
import "../bookcard/BookCard.css";
import { Link } from "react-router-dom";
const BookCard = ({ book, state, detalle }) => {
  console.log("Detalle del prestamo", detalle);
  return (
    <div className="col-12 col-md-3">
      <div className="card mb-2">
        <img
          src={
            book.portada.length > 0
              ? book.portada
              : "https://covers.openlibrary.org/b/id/14624404-L.jpg"
          }
          className="card-img-top"
          alt={book.titulo}
        />
        <div className="card-body">
          <h5 className="card-title">{book.titulo}</h5>
          <p className="card-text">
            Autor: {book.autor} <br />
            Año: {book.fechaPublicacion}
          </p>
          {state === "reserved" ? (
            <Link to={`/prestamos/${detalle.id}`} className="btn btn-primary">
              Ver detalle
            </Link>
          ) : (
            <Link to={`/libros/${book.id}`} className="btn btn-primary">
              Ver detalle
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookCard;