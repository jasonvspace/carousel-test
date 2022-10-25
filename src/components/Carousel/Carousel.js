import {useEffect, useRef, useState} from "react";
import './Carousel.css';

const itemWidth = 200;

const Carousel = ({items = [], height = '350px', count = 4}) => {
  const carousel = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrev = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(items.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  const showNext = () => {
    if (currentIndex >= items.length - count) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = itemWidth * currentIndex;
    }
  }, [currentIndex]);

  return (
    <div className="carousel-wrapper" style={{height}}>
      <div className="arrow-left" onClick={showPrev} />

      <div ref={carousel} className="carousel-container" style={{width: itemWidth * count }}>
        {items.map((item, index) => (<div key={index} className="carousel-item" style={{height}}>
          <img src={item.url} alt="" />
          <div className="title">{item.title}</div>
          <div className="price">${item.price}</div>
        </div>))}
      </div>

      <div className="arrow-right" onClick={showNext} />
    </div>
  )
}

export default Carousel;