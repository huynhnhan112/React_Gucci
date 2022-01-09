import React, { Component } from "react";
import { Carousel } from 'antd';
import './HomeSlick.css';
import { AntDesignOutlined } from "@ant-design/icons";

export default function HomeSlick(props) {

    const contentStyle = {
        height: '800px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#c4c4c4',
    };

    return (
        <div>
            <Carousel autoplay>
                <div>
                    <div style={contentStyle} className="relative text-center">
                        <div className="absolute" style={{ top: 100, left: 400 }}>
                            <img style={{cursor:'pointer'}} src="https://media.gucci.com/style/Transparent_Center_0_0_250x170/1635525928/636709_UTIAC_9270_001_080_0000_Light.png" className="" style={{ width: 600 }} />
                        </div>
                        <div style={{ zIndex: 10, top: 550, left: 400 }} className="absolute">
                            <h3 className="text-gray-600 text-sm font-light">GUCCI TIGER</h3>
                            <h1 className="text-3xl text-gray-600 font-normal -mb-10 tracking-widest">Gucci Tiger Horsebit 1955 mini bag <br /> <AntDesignOutlined style={{fontSize:'10px'}} /></h1>
                            <button className="py-4 px-10 hover:opacity-80 bg-black text-white leading-3">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={contentStyle} className="relative text-center">
                        <div className="absolute w-full h-full" style={{ backgroundImage: 'url(https://media.gucci.com/content/DarkGray_ProductPush_Standard_700x700/1640598307/ProductPush_677266UTIBC9177_001_Light.jpg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                        </div>
                        <div style={{ zIndex: 10, top: 100, left: 400 }} className="absolute">
                            <h3 className="text-gray-600 text-sm font-light">GUCCI TIGER</h3>
                            <h1 className="text-3xl text-gray-600 font-normal -mb-10 tracking-widest">Gucci Tiger Jackie 1961 small bag <br /> <AntDesignOutlined style={{fontSize:'10px'}} /></h1>
                            <button className="py-4 px-10 hover:opacity-80 bg-black text-white leading-3">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                </div>
            </Carousel>,
        </div>
    )
}
