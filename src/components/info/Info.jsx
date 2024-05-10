

import "./Info.sass"

const Info = () => {
    return (
        <div className="info">
            <div className="container">
                <h2 className="info__title">
                    ABOUT COFFEE SHOP
                </h2>
                <h2 className="info__subtitle">
                    Lorem ipsum dolor sit
                </h2>
                <h2 className="info__subtitle">
                    Lorem <span>Lorem ipsum dolor sit amet
                            consectetuer adipiscing elit
                            Aenean commodo</span>
                    ipsum dolor sit
                </h2>
                <h2 className="info__subtitle">
                    Lorem ipsum <span>Lorem ipsum dolor sit amet
                                consectetuer adipiscing elit
                                Aenean commodo</span>
                    dolor
                </h2>
                <div className="info__wrapper">
                    <div className="info__wrapper_desc">
                        In good company, we immerse ourselves in ‘gezelligheid’. Together we laugh, drink beer and open ourselves up to new surprising experiences. We give way to all our senses so we can connect to a world that is packed with taste.
                    </div>
                    <div className="info__wrapper_desc">
                        In good company, we immerse ourselves in ‘gezelligheid’. Together we laugh, drink beer and open ourselves up to new surprising experiences. We give way to all our senses so we can connect to a world that is packed with taste.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;