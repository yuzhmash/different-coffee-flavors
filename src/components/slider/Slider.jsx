import AwesomeSlider from "react-awesome-slider"
import 'react-awesome-slider/dist/styles.css'

import "./Slider.sass"

import leftArrow from "../../assets/leftArrow.svg"
import rightArrow from "../../assets/rightArrow.svg"
import coffesBag from "../../assets/coffesBag.svg"

const Slider = () => {

    return (
        <div className="container">
            <AwesomeSlider  >
                <div className="slider">
                    <div className="slider__info">
                        <h2 className="slider__info_subtitle">
                            coffee bag
                        </h2>
                        <h2 className="slider__info_title">
                            original blend of chocolade and banana
                        </h2>
                        <div className="slider__info_price">
                            125 SEC
                        </div>
                        <div className="slider__info_size">
                            250 G
                        </div>
                        <div className="slider__info_desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis
                        </div>
                        <button className="slider__info_btn">
                            Order now
                        </button>
                    </div>
                    <div className="slider__img">
                        <img src={coffesBag} alt="coffees bag" />
                    </div>
                </div>
                <div className="slider">
                    <div className="slider__info">
                        <h2 className="slider__info_subtitle">
                            coffee bag
                        </h2>
                        <h2 className="slider__info_title">
                            blend of chocolade and banana
                        </h2>
                        <div className="slider__info_price">
                            125 SEC
                        </div>
                        <div className="slider__info_size">
                            250 G
                        </div>
                        <div className="slider__info_desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis
                        </div>
                        <button className="slider__info_btn">
                            Order now
                        </button>
                    </div>
                    <div className="slider__img">
                        <img src={coffesBag} alt="coffees bag" />
                    </div>
                </div>
                <div className="slider">
                    <div className="slider__info">
                        <h2 className="slider__info_subtitle">
                            coffee bag
                        </h2>
                        <h2 className="slider__info_title">
                            kebab and kebabsås
                        </h2>
                        <div className="slider__info_price">
                            125 SEC
                        </div>
                        <div className="slider__info_size">
                            250 G
                        </div>
                        <div className="slider__info_desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis
                        </div>
                        <button className="slider__info_btn">
                            Order now
                        </button>
                    </div>
                    <div className="slider__img">
                        <img src={coffesBag} alt="coffees bag" />
                    </div>
                </div>
            </AwesomeSlider>
        </div>
    )
}

export default Slider;