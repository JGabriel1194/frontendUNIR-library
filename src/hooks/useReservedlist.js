import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useReserverdlist = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_URL = process.env.REACT_APP_API_URL;
    const url = `${API_URL}/ms-operador/api/v1/detalles`;

    const fetchBooks = useCallback(async () => {
        try {
            const response = await axios.post(
                url,
                {
                    targetMethod: "GET",
                },{
                    headers: {
                        "Content-Type": "application/json",
                    },
                    cors: "no-cors",
                }
            );
            console.log(response.data.content);
            setLoading(false);
            setBooks(response.data.content);
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
    }, [url]);

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    return { books, loading };
}

export {useReserverdlist};