import slider1 from '../../assets/s1.jpg'
import slider2 from '../../assets/s2.jpg'
import slider3 from '../../assets/s3.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={slider1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <p className='text-4xl bg-white bg-opacity-60 rounded px-8 py-4 w-96'>Summer Fun and Skill Development Combined</p>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={slider2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <p className='text-4xl bg-white bg-opacity-60 rounded px-8 py-4 w-96'><span className='text-6xl'>Join</span> the Thrilling World of Sports</p>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={slider3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <p className='text-4xl bg-white bg-opacity-60 rounded px-8 py-4 w-96'><span className='text-6xl'>Join</span> the Thrilling World of Sports</p>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;