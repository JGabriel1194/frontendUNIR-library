import { useEffect, useState } from "react";

const useCarousel = () => {
    const [images , setImages] = useState([]);

    useEffect(() => {
        setTimeout(() => {
          setImages([
            {
              id: 1,
              src: "https://www.libreriaespanola.com/wp-content/uploads/2023/06/Banner-domicilio-01.png",
            },
            {
              id: 2,
              src: "https://www.libreriaespanola.com/wp-content/uploads/2023/10/banner-bags3-01.png",
            },
            {
              id: 3,
              src: "https://www.libreriaespanola.com/wp-content/uploads/2023/10/banner-bags3-01.png",
            },
          ]);
        }, 3000);
    },[]);

    return images;
}

export {useCarousel};