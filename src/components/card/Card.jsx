import Navbar from "../navbar/Navbar";

import "./Card.sass"

const Card = () => {
    return (
        <div className="card">
            <div className="container">
                <h2 className="card__subtitle">
                    coffee bag
                </h2>
                <h1 className="card__title">
                    Original blend of chocolade and banana
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
                        <div className="minus">-</div>1 <div className="plus">+</div>
                    </button>
                    <button className="card__btn">
                        ADD TO CART - 125 SEC
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Card;