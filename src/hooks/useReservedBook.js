import axios from "axios";
import { useEffect, useState } from "react";

const useReservedBook = (reserveId = '',count) => {

    const API_URL = process.env.REACT_APP_API_URL;
    const [reservedBook, setReservedBook] = useState();
     const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        (async () =>{
            try {
                const response = await axios.post(
                    `${API_URL}/ms-operador/api/v1/detalles/${reserveId}`,
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
                setReservedBook(response.data);
            } catch (error) {
                setLoading(false);
                console.error(error);
            }
        
        })();
    }, [count]);
    
    return { reservedBook, loading};
}

export {useReservedBook};