import { React, useState } from "react";
import Title from "../components/tittle/Title";
import { useBooks } from "../hooks/useBooks";
import BookCard from "../components/bookcard/BookCard";
import CategoryList from "../components/categorylist/CategoryList";
import Loader from "../components/loader/Loader";

const Libros = () => {

  const [page, setPage] = useState(0);
  const [genero, setGenero] = useState('');

  const handleGeneroChange = (childData) => {
    setGenero(childData);
  };

  const { books, aggregations, loading } = useBooks(page, genero);

  const [titutlo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');

  const handleInput1Change = (event) => {
    setTitulo(event.target.value);
  };

  const handleInput2Change = (event) => {
    setAutor(event.target.value);
  };

  const handleButtonClick = () => {
    console.log('Titulo: ', titutlo);
    console.log('Autor: ', autor);
  };

  return (
    <div className="container-fliud">
      {books.length > 0 ? (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-3">
              <Title title="Filtros"></Title>
              <div className="col-12">
                <div>
                  <label htmlFor="titulo" className="form-label">
                    Título
                  </label>
                  <input
                    type="text"
                    id="titulo"
                    className="form-control"
                    value={titutlo}
                    onChange={handleInput1Change}
                  />
                </div>
                <div>
                  <label htmlFor="autor" className="form-label">
                    Autor
                  </label>
                  <input
                    type="text"
                    id="autor"
                    className="form-control"
                    value={autor}
                    onChange={handleInput2Change}
                  />
                </div>
                <div className="row m-2 p-1">
                  <button
                    onClick={handleButtonClick}
                    className="btn btn-primary"
                  >
                    Filtrar
                  </button>
                </div>
              </div>
              <div className="col-12">
                {loading ? (
                  <p>Cargando...</p>
                ) : (
                  <div>
                    <CategoryList
                      aggregations={aggregations.generoValues}
                      onGenero={handleGeneroChange}
                    />
                    {genero && (
                      <div className="row m-2 p-1">
                        <button
                          className="btn btn-primary"
                          onClick={() => setGenero("")}
                        >
                          Limpiar filtros
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="col-12 col-md-9">
              <Title title="Libros"></Title>
              <div className="row m-2 p-1">
                {books.map((book, index) => {
                  return <BookCard key={index} book={book} />;
                })}
              </div>
              <div className="row m-2 p-1">
                <div>
                  <button
                    className="btn btn-success"
                    onClick={() => setPage((prev) => prev - 1)}
                  >
                    Anterior
                  </button>
                  <span> | </span>
                  <button
                    className="btn btn-success"
                    onClick={() => setPage((prev) => prev + 1)}
                  >
                    Siguiente
                  </button>
                </div>
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
