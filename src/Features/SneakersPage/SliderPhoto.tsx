import React from "react";
import { Photo } from "./types/SneakersType";
import Slider from "react-slick";

function SliderPhoto({ photo }: { photo: Photo }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(photo.mainPhoto);

  return (
    <Slider {...settings}>
      <div>
        <img src={photo.mainPhoto} alt="mainPhoto" />
      </div>
      <div>
        <img src={photo.two} alt="two" />
      </div>
      <div>
        <img src={photo.three} alt="three" />
      </div>
      <div>
        <img src={photo.four} alt="four" />
      </div>
      <div>
        <img src={photo.five} alt="five" />
      </div>
      <div>
        <img src={photo.six} alt="six" />
      </div>
    </Slider>
  );
}

export default SliderPhoto;
