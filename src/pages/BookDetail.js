import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookContext from "../contexts/BookContext";
import Comment from "../components/comment/Comment";
import Title from "../components/tittle/Title";
import BookCard from "../components/bookcard/BookCard";
import CategoryList from "../components/categorylist/CategoryList";
import { useCategory } from "../hooks/useCategory";
import CategoryContext from "../contexts/CategoryContext";
import axios from "axios";
import Loader from "../components/loader/Loader";

const BookDetail = () => {

    const categories = useCategory();
    const { bookId } = useParams();
    const { books } = useContext(BookContext);
    const [book, setBook] = useState(null);
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
      getBookById();
    }, [bookId]);

    const getBookById = async () => {
      try {
        const response = await axios.post(
          `${API_URL}/ms-buscador/api/libros/${bookId}`,
          {
            targetMethod: "GET",
            queryParams: {
              //"generos": ["Fantasia"],
              page: [0],
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            cors: "no-cors",
          }
        );
        setBook(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [book]);
    
    if (!book) {
      return <Loader />;
    }
    
    return (
      <div className="container-fluid">
        {book ? (
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
          <CategoryContext.Provider value={{ categories }}>
            <div className="col-12 col-md-2">
              <CategoryList />
            </div>
          </CategoryContext.Provider>
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
        <div className="row m-2 p-1">
          {books.map((similarBook, index) => {
            if (
              similarBook.genero === book.genero &&
              similarBook.id !== book.id
            ) {
              return <BookCard key={index} book={similarBook} />;
            }
          })}
        </div>
      </div>
      ):(
        <Loader/>
      )} 
      </div>
    );
}

export default BookDetail;