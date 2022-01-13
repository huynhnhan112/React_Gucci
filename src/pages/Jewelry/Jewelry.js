import { RightOutlined } from '@ant-design/icons'
import React from 'react'

export default function Jewelry(props) {
    return (
        <div>
            <div className='relative'>
                {/* <div className='fixed bg-black opacity-30' style={{top:0,left:0,bottom:0,right:0}}></div> */}
                <img src='https://media.gucci.com/content/HeroRegularStandard_1600x675/1639398606/HeroRegularStandard_GiftGiving21-NYE-021_001_Default.jpg' />
                <div className='absolute text-center' style={{ top: '45%', left: '25%' }}>
                    <p className='text-white text-xl font-normal mb-0'>ARIA</p>
                    <h1 className='text-7xl text-white font-thin'>
                        JEWELRY & WATCHES
                    </h1>
                </div>
            </div>
            <div className='grid grid-cols-2 text-center my-5'>
                <div className='grid grid-rows-3'>
                    <div className='relative'>
                        <img src="https://media.gucci.com/content/DarkGray_CategorySingle_Standard_600x600/1633363205/CategorySingle_680277I46010926_001_Light.jpg" className='mx-auto cursor-pointer' style={{ height: 600 }} />
                        <div className='absolute' style={{ bottom: 50, left: 200 }}>
                            <h1 className='text-4xl font-thin mb-2 tracking-wider'>Fashion Jewelry</h1>
                            <button className='text-sm hover:text-gray-400'>
                                <div className='flex items-center'>
                                    DISCOVER MORE
                                    <RightOutlined className='ml-2' />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src="https://media.gucci.com/content/DarkGray_CategorySingle_Standard_600x600/1636460129/CategorySingle_672511I83Q08380_001_Light.jpg" className='mx-auto cursor-pointer' style={{ height: 600 }} />
                        <div className='absolute' style={{ bottom: 50, left: 240 }}>
                            <h1 className='text-4xl font-thin mb-2 tracking-wider'>Fine Jewelry</h1>
                            <button className='text-sm hover:text-gray-400'>
                                <div className='flex items-center'>
                                    DISCOVER MORE
                                    <RightOutlined className='ml-2' />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src="https://media.gucci.com/content/CapsulesBgTwo_Standard_600x450/1623859203/CapsulesBgTwo_High-Watchmaking_001_Default.jpg" className='mx-auto cursor-pointer' style={{ height: 600, width: 600 }} />
                        <div className='absolute' style={{ top: '50%', left: '25%' }}>
                            <h1 className='text-4xl font-thin mb-10 tracking-wider text-white'>HIGH WATCHMAKING</h1>
                            <button className='text-xs bg-gray-800 hover:bg-opacity-80 text-white px-5 py-3'>
                                DISCOVER MORE
                            </button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-rows-3'>
                    <div className='relative mb-5'>
                        <img src="https://media.gucci.com/content/DarkGray_CategorySingle_Standard_600x600/1636460135/CategorySingle_678656J84108191_001_Light.jpg" className='mx-auto cursor-pointer' style={{ height: 600 }} />
                        <div className='absolute' style={{ bottom: 50, left: 240 }}>
                            <h1 className='text-4xl font-thin mb-2 tracking-wider'>Silver Jewelry</h1>
                            <button className='text-sm hover:text-gray-400'>
                                <div className='flex items-center'>
                                    DISCOVER MORE
                                    <RightOutlined className='ml-2' />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src="https://media.gucci.com/content/DarkGray_CategorySingle_Standard_600x600/1629107103/CategorySingle_673123ICUA09812_001_Light.jpg" className='mx-auto cursor-pointer' style={{ height: 600 }} />
                        <div className='absolute' style={{ bottom: 50, left: 280 }}>
                            <h1 className='text-4xl font-thin mb-2 tracking-wider'>Watches</h1>
                            <button className='text-sm hover:text-gray-400'>
                                <div className='flex items-center'>
                                    DISCOVER MORE
                                    <RightOutlined className='ml-2' />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src="https://media.gucci.com/content/CapsulesBgTwo_Standard_600x450/1623859203/CapsulesBgTwo_High-Jewelry-Campaign_001_Default.jpg" className='mx-auto cursor-pointer' style={{ height: 600, width:600 }} />
                        <div className='absolute' style={{ top: '50%', left: '35%' }}>
                            <h1 className='text-4xl font-thin mb-10 tracking-wider text-white'>HIGH JEWELRY</h1>
                            <button className='text-xs bg-gray-800 hover:bg-opacity-80 text-white px-5 py-3'>
                                DISCOVER MORE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
