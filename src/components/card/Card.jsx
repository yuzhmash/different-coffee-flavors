import { useState, useEffect } from "react"

import coffesBag from "../../assets/coffesBag.svg"
import "./Card.sass"

const Card = () => {

    const [counter, setCounter] = useState(1)
    const [unActive, setUnActive] = useState("")

    const updateCounnt = (n) => {
        if (n < 0 && counter <= 1 || n > 0 && counter >= 9) {
            return setCounter(counter);
        }
        setCounter(counter+n)
    }

    useEffect(() => {
        if (counter === 1 || counter === 9) {
            setUnActive("unacive")
        } else (
            setUnActive("")
        )
    }, [counter])

    return (
        <div className="card">
            <div className="container">
                <div className="card__wrapper">
                    <h2 className="card__subtitle">
                        coffee bag
                    </h2>
                    <h1 className="card__title">
                        Original blend of  <br/> chocolade and banana
                    </h1>
                    <div className="card__price">
                        125 SEC
                    </div>
                    <div className="card__size">
                        1 kg
                    </div>
                    <div className="card__desc">
                        We’re serious about the quality of our beverages, but that doesn't mean we take ourselves too seriously. 
                    </div>
                    <div className="card__btns">
                        <button className="card__counter">
                            <button onClick={() => updateCounnt(-1)} className={`minus ${unActive}`} >-</button> {counter} <button onClick={() => updateCounnt(1)} className={`plus ${unActive}`}>+</button>
                        </button>
                        <button className="card__btns_btn">
                            ADD TO CART - 125 SEC
                        </button>
                    </div>
                </div>
                <div className="slider__img">
                    <img src={coffesBag} alt="coffees bag" />
                </div>
            </div>

        </div>
    )
}

export default Card;