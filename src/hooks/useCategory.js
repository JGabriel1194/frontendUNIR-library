import { useEffect, useState } from "react";

const useCategory = () => {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        setTimeout(() => {
            setCategories([
                {
                    nombre: "Fantasía Épica",
                    descripcion:
                        "Libros que transportan a los lectores a mundos fantásticos llenos de aventuras épicas y misiones legendarias.",
                },
                {
                    nombre: "Ficción Clásica",
                    descripcion:
                        "Novelas atemporales que han soportado la prueba del tiempo, ofreciendo profundas reflexiones sobre la condición humana.",
                },
                {
                    nombre: "Fantasía",
                    descripcion:
                        "Obras de ficción que presentan elementos mágicos, criaturas míticas y reinos imaginativos.",
                },
                {
                    nombre: "Romance",
                    descripcion:
                        "Historias de amor, pasión y deseo que capturan los corazones de los lectores.",
                },
            ]);
        })
    }, []);
    
    return categories
}

export { useCategory };