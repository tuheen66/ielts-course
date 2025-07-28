"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";

import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";

const Trailer = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="w-[400px]">
      <Swiper
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={2}
        slidesPerView={1}
      >
        <SwiperSlide>
         
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/zrlYnaZftEQ"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/30y-wlDtIIQ"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/QBz8FX4GE_w"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/BbtkvRnraok"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/AvB2ibYd1z4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </SwiperSlide>
      </Swiper>

      <Swiper
      className="my-3"
        onSwiper={setThumbsSwiper}
        spaceBetween={0}
        slidesPerView={5}
        watchSlidesProgress
      >
        <SwiperSlide>
          <Image
            src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
            alt="thumb 1"
            width="50"
            height="40"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="https://cdn.10minuteschool.com/images/catalog/media/introduction_1706097447220.jpg"
            alt="thumb 2"
            width="50"
            height="40"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://cdn.10minuteschool.com/images/catalog/media/QBz8FX4GE_w-HD_1718880944063.jpg"
            alt="thumb 2"
            width="50"
            height="40"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://cdn.10minuteschool.com/images/catalog/media/BbtkvRnraok-HD_1718880976960.jpg"
            alt="thumb 2"
            width="50"
            height="40"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://cdn.10minuteschool.com/images/catalog/media/AvB2ibYd1z4-HD_1707647843136.jpg"
            alt="thumb 2"
            width="50"
            height="40"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Trailer;
