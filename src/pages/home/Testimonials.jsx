import { Fade, Slide } from "react-awesome-reveal";

const testimonials = [
  {
    id: 1,
    name: "Matthew Johnson",
    image: "https://i.postimg.cc/QMQ7h8kR/t3.jpg",
    testimonial: "My child had an amazing time at the summer camp. The coaches were knowledgeable and caring. Highly recommended!",
  },
  {
    id: 2,
    name: "Benjamin Anderson",
    image: "https://i.postimg.cc/tTDVnBck/t1.jpg",
    testimonial: "The summer camp exceeded my expectations. The instructors were friendly, and my child learned valuable skills while having fun.",
  },
  {
    id: 3,
    name: "Christopher Thompson",
    image: "https://i.postimg.cc/sX3h2kT1/t2.jpg",
    testimonial: "I'm impressed by the variety of sports offered at the summer camp. It's a great opportunity for kids to explore different activities.",
  },
];



const Testimonials = () => {
  return (
    <section className="bg-gray-100 p-12">
      <Fade><Slide><div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-8">What Our Participants Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded shadow p-6">
              <img className="w-16 h-16 rounded-full mx-auto mb-4" src={testimonial.image} alt={testimonial.name} />
              <p className="text-gray-800 text-lg mb-4">{testimonial.testimonial}</p>
              <p className="text-gray-600 font-medium">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
      </Slide></Fade>
    </section>
  );
};

export default Testimonials;
