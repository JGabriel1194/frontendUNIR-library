import { React, useState } from "react";
import Title from "../components/tittle/Title";
import { useBook } from "../hooks/useBook";
import BookCard from "../components/bookcard/BookCard";
import CategoryList from "../components/categorylist/CategoryList";
import Loader from "../components/loader/Loader";

const Libros = () => {

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

  const [page, setPage] = useState(0);

  const { books, aggregations, loading } = useBook(page);

  return (
    <div className="container-fliud">
      {books.length > 0 ? (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-3">
              <Title title="Filtros"></Title>
              <div>
                <div>
                  <label htmlFor="titulo">Título</label>
                  <input type="text" id="titulo" value={titutlo} onChange={handleInput1Change}/>
                </div>
                <div>
                  <label htmlFor="autor">Autor</label>
                  <input type="text" id="autor" value={autor} onChange={handleInput2Change}/>
                </div>
                <button onClick={handleButtonClick}>Filtrar</button>
              </div>
              <div className="col-12">
                {loading ? <p>Cargando...</p> :
                    <CategoryList aggregations={aggregations.generoValues}/>
                }
              </div>
            </div>
            <div className="col-12 col-md-9">
              <Title title="Libros"></Title>
              <div className="row m-2 p-1">
                {books.map((book, index) => {
                  return <BookCard key={index} book={book}/>;
                })}
              </div>
            </div>
            <button className="btn btn-info" onClick={() => setPage(prev => prev + 1)}>Mas</button>
          </div>
        </div>
      ) : (
          <Loader/>
      )}
    </div>
  );
};

export default Libros;
