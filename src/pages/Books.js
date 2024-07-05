import { React, useState } from "react";
import Title from "../components/tittle/Title";
import { useBooks } from "../hooks/useBooks";
import BookCard from "../components/bookcard/BookCard";
import CategoryList from "../components/categorylist/CategoryList";
import Loader from "../components/loader/Loader";

const Libros = () => {

  const [page, setPage] = useState(0);

  const { books, aggregations, loading } = useBooks(page);

  return (
    <div className="container-fliud">
      {books.length > 0 ? (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-3">
              <Title title="Libros"></Title>
              <div className="col-12">
                {loading ? <p>Cargando...</p> :
                  <CategoryList aggregations={aggregations.generoValues} />
                }
              </div>
            </div>
            <div className="col-12 col-md-9">
              <Title title="Libros"></Title>
              <div className="row m-2 p-1">
                {books.map((book, index) => {
                  return <BookCard key={index} book={book} />;
                })}
              </div>
            </div>
            <button className="btn btn-info" onClick={() => setPage(prev => prev + 1)}>Mas</button>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Libros;
