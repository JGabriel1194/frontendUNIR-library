import React from "react";
import "../categorycard/CategoryCard.css";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
    return (
        <div className="col-12 col-md-3">
            <div className="card mb-2">
                <div class="card-body">
                <h3 class="card-title">{category.nombre}</h3>
                <p class="card-text">{category.descripcion}</p>
                <Link href="#" class="btn btn-primary">Button</Link>
            </div>
            </div>
        </div>
    );
}

export default CategoryCard;
