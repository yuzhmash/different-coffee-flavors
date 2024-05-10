import Banner from "../banner/Banner";

import logo from "../../assets/logo.svg"

import "./Navbar.sass"

const Navbar = () => {
    return (
        <div>
            <Banner/>
            <div className="navbar">
                <div className="navbar__wrapper">
                    <div className="navbar__logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="navbar__wrapper_btns">
                        <button>Coffee</button>
                        <button>Bundles</button>
                        <button>About us</button>
                    </div>
                    <div>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar; 