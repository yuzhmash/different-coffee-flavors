

import "./Header.sass"
import coffesBag from "../../assets/coffesBag.svg"

const Header = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="header__wrapper">
                    <h1 className="header__title">
                        TASTE THE DIFFERENCE
                    </h1>
                    <h2 className="header__subtitle">
                        Coffee that won´t kill u 
                    </h2>
                    <button className="header__btn">
                        Order now
                    </button>
                </div>
                <div className="header__mainBag">
                    <img src={coffesBag} alt="main coffees bag" />
                </div>
            </div>
        </div>
    )
}

export default Header;