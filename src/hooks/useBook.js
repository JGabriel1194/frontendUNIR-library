import { useEffect, useState } from 'react';
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const useBook = (bookId = "") => {
    const [book, setBook] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.post(
                    `${API_URL}/ms-buscador/api/libros/${bookId}`,
                    {
                        targetMethod: "GET"
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                        cors: "no-cors",
                    }
                );
                setLoading(false);
                setBook(response.data);
            } catch (error) {
                setLoading(false);
                console.error(error);
            }
        })();
    }, [bookId]);

    return { book, loading };

}

export { useBook }