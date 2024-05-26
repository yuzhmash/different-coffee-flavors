import { useState } from "react"

import "./GoodsList.sass"
import smallCoffesBag from "../../assets/smallCoffeesBag.svg"

const GoodsList = () => {

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(false)

    const info = [{title: "COFFEE", desc: "Dense coffee with notes of dark caramel, candied fruits and spices", price: "135 SEK", btn: "i said buy"},
                 {title: "COFFEE", desc: "Dense coffee with notes of dark caramel, candied fruits and spices", price: "135 SEK", btn: "i said buy"},
                 {title: "COFFEE", desc: "Dense coffee with notes of dark caramel, candied fruits and spices", price: "135 SEK", btn: "i said buy"}]

    const openCard = (i) => {
        console.log(i);
        setIndex(i)
        if (i === index) {
            setOpen(!open)
        }

    }

    const blocks = info.map(({title, desc, price, btn}, i) => {
        return (
            <div 
                onClick={() => openCard(i)} 
                key={i} 
                className="goods__blocks_block"
                style={{height: open && i===index ? "570px" : "370px"}}>
                <div className="goods__blocks_block_img">
                    <img src={smallCoffesBag} alt="Coffee img" />
                </div>
                <div  className="goods__blocks_block_title">
                    {title}
                </div>
                {
                    i === index && open ?
                    <>
                        <div className="goods__blocks_block_desc">
                            {desc}
                        </div>
                        <div className="goods__blocks_block_price">
                            {price}
                        </div>
                        <button className="goods__blocks_block_btn">
                            {btn}
                        </button>
                    </> : null
                }
            </div>
        )
    })

    return (
        <View blocks={blocks} />
    )
}

const View = ({blocks}) => {
    return (
        <div className="goods">
            <h2 className="goods__title">
                OTHER PRODUCTS FROM COFFEE SHOP
            </h2>
            <div className="goods__blocks">
                {blocks}
            </div>
        </div>
    )
}

export default GoodsList;