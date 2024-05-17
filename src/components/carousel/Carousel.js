import React, { useContext } from "react";
import CarouselContext from "../../contexts/CarouselContext";


const Carousel = () => {

    const { carousel } = useContext(CarouselContext);

    return (
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          {
            carousel.map((item,index)=>{
              return (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={item.src} className="d-block w-100" alt="..." />
                </div>
              )
            })
          }
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
}

export default Carousel;
