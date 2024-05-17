import { useEffect, useState } from "react";

const useCategory = () => {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        setTimeout(() => {
            setCategories([
              {
                nombre: "Epic Fantasy",
                descripcion:
                  "Books that transport readers to fantastical worlds filled with epic adventures and legendary quests.",
              },
              {
                nombre: "Classic Fiction",
                descripcion:
                  "Timeless novels that have stood the test of time, offering profound insights into the human condition.",
              },
              {
                nombre: "Fantasy",
                descripcion:
                  "Works of fiction featuring magical elements, mythical creatures, and imaginative realms.",
              },
              {
                nombre: "Romance",
                descripcion:
                  "Stories of love, passion, and desire that capture the hearts of readers.",
              },
            ]);
        })
    }, []);
    
    return categories
}

export { useCategory };