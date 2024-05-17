import React, { useContext } from "react";
import CategoryContext from "../../contexts/CategoryContext";
import { Link } from "react-router-dom";

const CategoryList = () => {

    const { categories } = useContext(CategoryContext);
    console.log(categories);
    return (
      <div class="list-group">
        {
            categories.map((category, index) => {
                return (
                  <Link
                    key={index}
                    to={"/"}
                    class="list-group-item list-group-item-action"
                  >
                    {category.nombre}
                  </Link>
                );
            })
        }
      </div>
    );
}

export default CategoryList;