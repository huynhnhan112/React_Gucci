import React from "react";
import { Carousel } from 'antd';
import './HomeCarousel.css';

export default function HomeCarousel(props) {

    const contentStyle = {
        height: '465px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };


    return (
        <div>
            <Carousel autoplay>
                <div>
                    <div style={contentStyle} className="relative text-center">
                        <div style={{ zIndex: 10, top: 200, left: 400 }} className="absolute">
                            <h3 className="text-white text-xl font-light">GUCCI TIGER</h3>
                            <h1 className="text-6xl text-white font-normal -mb-10">YEAR OF THE TIGER</h1>
                            <button className="py-3 px-5 hover:bg-gray-600 hover:border-gray-600 bg-black text-white opacity-60 border-white border-solid border-2 leading-3">
                                SHOP THE <br /> COLLECTION
                            </button>
                        </div>
                        <div className="absolute">
                            <img className="w-100" src="https://media.gucci.com/content/HeroBigStandard_3200x1520/1640596533/HeroBigStandard_CNY-2022-Tiger-001_001_Default.jpg" />
                        </div>
                    </div>
                </div>
                <div>
                    <div style={contentStyle} className="relative text-center">
                        <div style={{ zIndex: 10, top: 200, left: 550 }} className="absolute">
                            <h3 className="text-white text-xl font-light">GUCCI ARIA</h3>
                            <h1 className="text-6xl text-white font-normal -mb-10">BAGS</h1>
                            <div>
                                <button className="py-3 px-5 hover:bg-gray-600 hover:border-gray-600 bg-black text-white opacity-60 border-white border-solid border-2 mr-5 leading-3">
                                    SHOP WOMEN'S
                                </button>
                                <button className="py-3 px-5 hover:bg-gray-600 hover:border-gray-600 bg-black text-white opacity-60 border-white border-solid border-2 leading-3">
                                    SHOP MEN'S
                                </button>
                            </div>
                        </div>
                        <div className="absolute">
                            <img className="w-100" src="https://media.gucci.com/content/HeroBigStandard_3200x1520/1631694604/HeroBigStandard_Gucci-ARIA-2021-048_001_Default.jpg" />
                        </div>
                    </div>
                </div>
                <div>
                    <div style={contentStyle} className="relative text-center">
                        <div style={{ zIndex: 10, top: 200, left: 550 }} className="absolute">
                            <h3 className="text-white text-xl font-light">GUCCI ARIA</h3>
                            <h1 className="text-6xl text-white font-normal -mb-10">SHOES</h1>
                            <div>
                                <button className="py-3 px-5 hover:bg-gray-600 hover:border-gray-600 bg-black text-white opacity-60 border-white border-solid border-2 mr-5 leading-3">
                                    SHOP WOMEN'S
                                </button>
                                <button className="py-3 px-5 hover:bg-gray-600 hover:border-gray-600 bg-black text-white opacity-60 border-white border-solid border-2 leading-3">
                                    SHOP MEN'S
                                </button>
                            </div>
                        </div>
                        <div className="absolute">
                            <img className="w-100" src="https://media.gucci.com/content/HeroBigStandard_3200x1520/1640707206/HeroBigStandard_Gucci-ARIA-2021-047_001_Default.jpg" />
                        </div>
                    </div>
                </div>
                <div>
                    <div style={contentStyle} className="relative text-center">
                        <div style={{ zIndex: 10, top: 200, left: 450 }} className="absolute">
                            <h1 className="text-6xl text-white font-normal -mb-10">GUCCI SERVICES</h1>
                            <div>
                                <button className="py-3 px-5 hover:bg-gray-600 hover:border-gray-600 bg-black text-white opacity-60 border-white border-solid border-2 mr-5 leading-3">
                                    BOOK AN IN-STORE <br /> APPOINTMENT
                                </button>
                                <button className="py-3 px-5 hover:bg-gray-600 hover:border-gray-600 bg-black text-white opacity-60 border-white border-solid border-2 leading-3">
                                    BOOK A VIRTUAL <br /> APPOINTMENT
                                </button>
                            </div>
                        </div>
                        <div className="absolute">
                            <img className="w-100" src="https://media.gucci.com/content/HeroBigStandard_3200x1520/1631787303/HeroBigStandard_Gucci-100-Pattern-01_001_Default.jpg" />
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}
