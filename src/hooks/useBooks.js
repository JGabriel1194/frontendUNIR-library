import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const useBooks = (page = 0) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [aggregations, setAggregations] = useState({});

  const API_URL = process.env.REACT_APP_API_URL;
  const url = `${API_URL}/ms-buscador/api/libros`;

  const fetchBooks = useCallback(async () => {
    try {
      const response = await axios.post(
        url,
        {
          targetMethod: "GET",
          queryParams: {
            page: [page],
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          cors: "no-cors",
        }
      );
      setLoading(false);
      setBooks(response.data.libros);
      setAggregations(response.data.aggs);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }, [url, page]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);


  return { books, aggregations, loading };
}

export { useBooks }


// autor: "Fulano";
// edicion: 4;
// editorial: "Patito";
// fechaPublicacion: "2024-07-04";
// genero: "Fantasia";
// id: "qnf6e5ABhbHMfDY1pyPA";
// isbn: "123";
// portada: "/public/portadas/1.png";
// titulo: "Prueba Titulo";
