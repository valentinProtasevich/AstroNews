import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = (props) => {
  const settings = {
    className: '',
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider">
        <h2>Статьи</h2>
        <Slider {...settings}>
          {props.children}
        </Slider>
      </div>
  )
}

export default SimpleSlider;