import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Navigation } from 'swiper/modules';

const images = [
  {
    src: '/vatican.jpg',
    caption: 'Sending smiles from Vatican!',
  },
  {
    src: '/cat.jpg',
    caption: 'My tiny sidekick, always nearby.',
  },
  {
    src: '/shoes.jpg',
    caption: 'A splash of creativity - my custom shoe art!',
  },
  {
    src: '/graduation.jpg',
    caption: 'Proud graduation moment 💛',
  },
];

const AboutCarousel = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="mt-8 max-w-4xl mx-auto">
      <Swiper
        modules={[EffectCoverflow, Navigation]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        navigation
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <img
                src={image.src}
                alt={`Slide ${index + 1}`}
                className="rounded-lg shadow-lg object-cover w-full h-[350px]"
              />
              <p className="mt-2 text-center text-sm text-orange-100">{image.caption}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AboutCarousel;
