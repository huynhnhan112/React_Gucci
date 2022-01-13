import { RightOutlined } from '@ant-design/icons';
import React from 'react'
import './Beauty.css';

export default function Beauty(props) {
    return (
        <div>
            <div className='relative'>
                {/* <div className='fixed bg-black opacity-30' style={{top:0,left:0,bottom:0,right:0}}></div> */}
                <img src='https://media.gucci.com/content/HeroRegularStandard_1600x675/1636113669/HeroRegularStandard_GiftGiving21-NYE-016_001_Default.jpg' />
                <div className='absolute text-center' style={{ top: '45%', left: '20%' }}>
                    <h1 className='text-7xl text-white font-thin mb-5 textBeauty'>
                        GUCCI BEAUTY
                    </h1>
                    <p className='text-white text-base font-semibold mt-10'>The world of Gucci Beauty envisions true expression within a line of makeup, men's fragrances and women's fragrances.</p>
                </div>
            </div>
            <div className='grid grid-cols-2 text-center'>
                <div className='grid grid-rows-3'>
                    <div className='relative'>
                        <img src="https://media.gucci.com/content/DarkGray_CategorySingle_Standard_600x600/1629107103/CategorySingle_BeautyLV1-product-floragorgeousgardenia_001_Light.jpg" className='mx-auto cursor-pointer' style={{ height: 600 }} />
                        <div className='absolute' style={{bottom:50, left:160}}>
                            <h1 className='text-4xl font-thin mb-2 tracking-wider'>Women's Fragrances</h1>
                            <button className='text-sm hover:text-gray-400'>
                                <div className='flex items-center'>
                                    SHOP NOW
                                    <RightOutlined className='ml-2' />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src="https://media.gucci.com/content/DarkGray_CategorySingle_Standard_600x600/1614188703/CategorySingle_new-gred-sheer_001_Light.jpg" className='mx-auto cursor-pointer' style={{ height: 600 }} />
                        <div className='absolute' style={{bottom:50, left:290}}>
                            <h1 className='text-4xl font-thin mb-2 tracking-wider'>Lips</h1>
                            <button className='text-sm hover:text-gray-400'>
                                <div className='flex items-center'>
                                    SHOP NOW
                                    <RightOutlined className='ml-2' />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src="https://media.gucci.com/content/LightGray_CategorySingle_Standard_600x600/1624980604/CategorySingle_BeautyLV1-nail-polish-NEW_001_Light.jpg" className='mx-auto cursor-pointer' style={{ height: 600 }} />
                        <div className='absolute' style={{bottom:50, left:280}}>
                            <h1 className='text-4xl font-thin mb-2 tracking-wider'>Nails</h1>
                            <button className='text-sm hover:text-gray-400'>
                                <div className='flex items-center'>
                                    SHOP NOW
                                    <RightOutlined className='ml-2' />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-rows-3'>
                    <div className='relative'>
                        <img src="https://media.gucci.com/content/DarkGray_CategorySingle_Standard_600x600/1617697802/CategorySingle_BeautyLV1-product-guiltyuomo-NEW_001_Light.jpg" className='mx-auto cursor-pointer' style={{ height: 600 }} />
                        <div className='absolute' style={{bottom:50, left:200}}>
                            <h1 className='text-4xl font-thin mb-2 tracking-wider'>Men's Fragrances</h1>
                            <button className='text-sm hover:text-gray-400'>
                                <div className='flex items-center'>
                                    SHOP NOW
                                    <RightOutlined className='ml-2' />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src="https://media.gucci.com/content/LightGray_CategorySingle_Standard_600x600/1605098703/CategorySingle_BeautyLV1-product-eyes_001_Light.jpg" className='mx-auto cursor-pointer' style={{ height: 600 }} />
                        <div className='absolute' style={{bottom:50, left:290}}>
                            <h1 className='text-4xl font-thin mb-2 tracking-wider'>Eyes</h1>
                            <button className='text-sm hover:text-gray-400'>
                                <div className='flex items-center'>
                                    SHOP NOW
                                    <RightOutlined className='ml-2' />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src="https://media.gucci.com/content/DarkGray_CategorySingle_Standard_600x600/1628601302/CategorySingle_6249759PBR20003-white_001_Light.jpg" className='mx-auto cursor-pointer' style={{ height: 600 }} />
                        <div className='absolute' style={{bottom:50, left:290}}>
                            <h1 className='text-4xl font-thin mb-2 tracking-wider'>Face</h1>
                            <button className='text-sm hover:text-gray-400'>
                                <div className='flex items-center'>
                                    SHOP NOW
                                    <RightOutlined className='ml-2' />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative mb-5'>
                <img src='https://media.gucci.com/content/HeroRegularStandard_1600x675/1614240904/HeroRegularStandard_Beauty-MakeUp-Foundation-Tutorial_001_Default.jpg' />
                <div className='absolute text-center' style={{ top: '45%', left: '20%' }}>
                    <h1 className='text-7xl text-white font-thin mb-5'>TWO-IN-ONE
                        TUTORIALS</h1>
                    <button className='bg-gray-900 hover:bg-gray-500 text-white text-xs py-3 px-5'>DISCOVER MORE</button>
                </div>
            </div>
        </div>
    )
}
