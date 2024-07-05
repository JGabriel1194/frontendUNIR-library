import { useEffect,useState } from "react";
import axios from "axios";

const useBook = () => {
    const [books, setBooks] = useState([]);

    const API_URL = process.env.REACT_APP_API_URL;
    
    useEffect(() => {
        fetchBooks();
    }, []);
    
      const fetchBooks = async () => {
        try {
          const response = await axios.post(
            `${API_URL}/ms-buscador/api/libros`,
              {
                targetMethod: "GET",
                queryParams: {
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
          setBooks(response.data.libros);
        } catch (error) {
          console.log(error);
        }
      }

    return books;
}

export {useBook}


// autor: "Fulano";
// edicion: 4;
// editorial: "Patito";
// fechaPublicacion: "2024-07-04";
// genero: "Fantasia";
// id: "qnf6e5ABhbHMfDY1pyPA";
// isbn: "123";
// portada: "/public/portadas/1.png";
// titulo: "Prueba Titulo";