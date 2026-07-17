import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ReviewCard from "./ReviewCard";
import type { Review } from "./reviews.types";
interface ReviewCarouselProps {
  reviews: Review[];
}
export default function ReviewCarousel({ reviews }: ReviewCarouselProps) {
  return (
    <Swiper
      className="pb-8"
      modules={[Autoplay, Pagination, FreeMode]}
      freeMode
      loop
      grabCursor
      spaceBetween={24}
      speed={6000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          {" "}
          <ReviewCard {...review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
