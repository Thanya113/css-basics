import React from "react";
import "./Gallery.css";
import img1 from "./images/im1.jpg";
import img2 from "./images/im2.jpg";
import img3 from "./images/im3.jpg";
import img4 from "./images/im4.jpg";
import img5 from "./images/im5.jpg";
import img6 from "./images/im6.jpg";

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div className="item" key={index}>
          <img src={image} alt={`Gallery ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
