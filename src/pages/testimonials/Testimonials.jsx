import TestimonialSlider from './TestimonialsSlider';

const Testimonials = () => {
  return (
    <div className="h-full md:w-[60%] mx-auto backdrop-blur-sm backdrop-opacity-80 border-b-2 border-cyred py-20 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* title */}
        <h2 className="h2 mb-8 xl:mb-0">
          Our Subscribers{' '}
          <span className="text-cyred md:text-2xl lg:text-3xl">Reviews</span>
        </h2>
        {/* slider */}
        <div>
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
