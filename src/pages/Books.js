import { React, useState, useCallback } from "react";
import debounce from 'just-debounce-it';
import Title from "../components/tittle/Title";
import { useBooks } from "../hooks/useBooks";
import BookCard from "../components/bookcard/BookCard";
import CategoryList from "../components/categorylist/CategoryList";
import Loader from "../components/loader/Loader";

const Libros = () => {

  const [page, setPage] = useState(0);
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [titulo, setTitulo] = useState('');

  const handleGeneroChange = (childData) => {
    setGenero(childData);
  };

  const { books, aggregations, fetchBooks, loading } = useBooks(page, genero);

  const searchDebounce = useCallback(
    debounce((titulo, autor) => fetchBooks(titulo, autor), 500)
    , [fetchBooks]);

  const handleTituloFilter = (event) => {
    setTitulo(event.target.value);
    searchDebounce(event.target.value, '');
  };

  const handleAutorFilter = (event) => {
    setAutor(event.target.value);
    searchDebounce('', event.target.value);
  };

  const onCleanFilters = () => {
    setTitulo('');
    setGenero('');
    setAutor('');
  }

  const onSearch = () => {
    fetchBooks(titulo, autor);
  };

  return (
    <div className="container-fliud">
      {!loading ? (
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
                    value={titulo}
                    onChange={handleTituloFilter}
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
                    onChange={handleAutorFilter}
                  />
                </div>
                <div className="row m-2 p-1">
                  <button
                    onClick={onSearch}
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
                    {(titulo || autor || genero) && (
                      <div className="row m-2 p-1">
                        <button
                          className="btn btn-primary"
                          onClick={onCleanFilters}
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
