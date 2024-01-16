import React, {useState} from 'react'

const Slider = () => {
    const slides = [
      'Featured Project Slider 1',
      'Featured Project Slider 2',
      'Featured Project Slider 3',
      'Featured Project Slider 4',
      'Featured Project Slider 5',
    ];
  
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const moveDot = index => {
        setCurrentSlide(index)
    }
  
    return (
        <div>
      
        <div className="sliderContent">
          <p>{slides[currentSlide]}</p>
        </div>
        <div className="container-dots">
            {Array.from({length: 5}).map((item, index) => (
                  <div 
                  onClick={() => moveDot(index + 1)}
                  className={currentSlide === index + 1 ? "dot active" : "dot"}
                  ></div>
            ))}
        </div>
        </div>
    );
  };
  
  export default Slider;