import React from "react";
import "../categorycard/CategoryCard.css";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
    return (
        <div className="col-12 col-md-3">
            <div className="card mb-2">
                <div className="card-body">
                    <h3 className="card-title">{category.nombre}</h3>
                    <p className="card-text">{category.descripcion}</p>
                    <Link href="#" className="btn btn-primary">Ver más</Link>
                </div>
            </div>
        </div>
    );
}

export default CategoryCard;
