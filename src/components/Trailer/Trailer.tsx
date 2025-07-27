"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

const Trailer = () => {
  return (
    <div>
      <Carousel >
        <div>
          <iframe
            src="https://www.youtube.com/embed/zrlYnaZftEQ"
            title="YouTube video"
            allowFullScreen
          />
        </div>
        <div></div>
      </Carousel>
    </div>
  );
};

export default Trailer;
