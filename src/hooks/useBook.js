import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const useBook = (page = 0) => {
  const [books, setBooks] = useState([]);

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
      setBooks(response.data.libros);
    } catch (error) {
      console.log(error);
    }
  }, [url, page]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);


  return { books };
}

export { useBook }


// autor: "Fulano";
// edicion: 4;
// editorial: "Patito";
// fechaPublicacion: "2024-07-04";
// genero: "Fantasia";
// id: "qnf6e5ABhbHMfDY1pyPA";
// isbn: "123";
// portada: "/public/portadas/1.png";
// titulo: "Prueba Titulo";
