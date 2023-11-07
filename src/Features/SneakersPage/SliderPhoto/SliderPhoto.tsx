import React from "react";
import { Photo } from "../types/SneakersType";
import Slider from "react-slick";

function SliderPhoto({ photo }: { photo: Photo }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const url = process.env.REACT_APP_API_URL || "";
  console.log("ssssss", `${url}${photo?.mainPhoto}`);

  return (
    <Slider {...settings}>
      <div>
        <img src={`${url}${photo?.mainPhoto}`} alt="mainPhoto" />
      </div>
      <div>
        <img src={`${url}${photo?.two}`} alt="two" />
      </div>
      <div>
        <img src={`${url}${photo?.three}`} alt="three" />
      </div>
      <div>
        <img src={`${url}${photo?.four}`} alt="four" />
      </div>
      <div>
        <img src={`${url}${photo?.five}`} alt="five" />
      </div>
      <div>
        <img src={`${url}${photo?.six}`} alt="six" />
      </div>
    </Slider>
  );
}

export default SliderPhoto;
