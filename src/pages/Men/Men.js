import { RightOutlined } from '@ant-design/icons'
import React from 'react'

export default function Men(props) {
    return (
        <div>
            <div className='relative'>
                {/* <div className='fixed bg-black opacity-30' style={{top:0,left:0,bottom:0,right:0}}></div> */}
                <img src='https://media.gucci.com/content/HeroRegularStandard_1600x675/1632927607/HeroRegularStandard_Gucci-ARIA-2021-022-new_001_Default.jpg' />
                <div className='absolute text-center' style={{ top: '45%', left: '45%' }}>
                    <p className='text-white text-xl font-normal mb-0'>ARIA</p>
                    <h1 className='text-7xl text-white font-thin'>
                        MEN
                    </h1>
                </div>
            </div>
            <div className='grid grid-cols-2 mt-5 mb-1 text-center'>
                <div className='relative mr-1 mb-1 cursor-pointer hover:opacity-80' style={{backgroundColor:'#e5e7eb', marginLeft:'71px'}}>
                    <img src="https://media.gucci.com/content/DarkGray_CategoryDoubleVertical_Standard_463x926/1636464612/CategoryDoubleVertical_ARIA-MNMLook001_001_Light.jpg" className='mx-auto mt-36' />
                    <div className='absolute' style={{ left: 180, bottom: 65 }}>
                        <h1 className='text-3xl font-thin tracking-widest mb-0'>Ready to Wear</h1>
                        <button className='text-sm hover:text-gray-400'>
                            <div className='flex items-center'>
                                DISCOVERY MORE
                                <RightOutlined className='ml-2' />
                            </div>
                        </button>
                    </div>
                </div>
                <div className='grid grid-rows-2'>
                    <div className='relative mb-1 cursor-pointer hover:opacity-80'>
                        <img src="https://media.gucci.com/content/DarkGray_CategorySingle_Standard_600x600/1636460131/CategorySingle_6741740E8JN1000_001_Light.jpg" />
                        <div className='absolute' style={{ left: 230, bottom: 70 }}>
                            <h1 className='text-3xl font-thin tracking-widest mb-0'>Bags</h1>
                            <button className='text-sm hover:text-gray-400'>
                                <div className='flex items-center'>
                                    DISCOVERY MORE
                                    <RightOutlined className='ml-2' />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='relative cursor-pointer hover:opacity-80'>
                        <img src="https://media.gucci.com/content/DarkGray_CategorySingle_Standard_600x600/1636460127/CategorySingle_6555790G0P01060_001_Light.jpg" />
                        <div className='absolute' style={{ left: 235, bottom: 70 }}>
                            <h1 className='text-3xl font-thin tracking-widest mb-0'>Shoes</h1>
                            <button className='text-sm hover:text-gray-400'>
                                <div className='flex items-center'>
                                    DISCOVERY MORE
                                    <RightOutlined className='ml-2' />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 text-center mb-1'>
                <div className='relative ml-auto mr-1 cursor-pointer hover:opacity-80'>
                    <img src="https://media.gucci.com/content/DarkGray_CategorySingle_Standard_600x600/1618914603/CategorySingle_4287260YK0N1000_001_Light.jpg" />
                    <div className='absolute' style={{ left: 80, bottom: 70 }}>
                        <h1 className='text-3xl font-thin tracking-widest mb-0'>Wallets & Small Accessories</h1>
                        <button className='text-sm hover:text-gray-400'>
                            <div className='flex items-center'>
                                DISCOVERY MORE
                                <RightOutlined className='ml-2' />
                            </div>
                        </button>
                    </div>
                </div>
                <div className='relative cursor-pointer hover:opacity-80'>
                    <img src="https://media.gucci.com/content/DarkGray_CategorySingle_Standard_600x600/1636460125/CategorySingle_643847CAO2N4492_001_Light.jpg" />
                    <div className='absolute' style={{ left: 235, bottom: 70 }}>
                        <h1 className='text-3xl font-thin tracking-widest mb-0'>Belts</h1>
                        <button className='text-sm hover:text-gray-400'>
                            <div className='flex items-center'>
                                DISCOVERY MORE
                                <RightOutlined className='ml-2' />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 text-center'>
                <div className='relative ml-auto cursor-pointer hover:opacity-80'>
                    <img src="https://media.gucci.com/content/DarkGray_CategoryOneThird_Standard_400x400/1636460103/CategoryOneThird_673123ICUA09812_001_Light.jpg" />
                    <div className='absolute' style={{ left: 130, bottom: 20 }}>
                        <h1 className='text-3xl font-thin tracking-widest mb-0'>Watches</h1>
                        <button className='text-sm hover:text-gray-400'>
                            <div className='flex items-center'>
                                DISCOVERY MORE
                                <RightOutlined className='ml-2' />
                            </div>
                        </button>
                    </div>
                </div>
                <div className='relative mx-auto cursor-pointer hover:opacity-80'>
                    <img src="https://media.gucci.com/content/DarkGray_CategoryOneThird_Standard_400x400/1636460114/CategoryOneThird_675758I46010926_001_Light.jpg"/>
                    <div className='absolute' style={{ left: 100, bottom: 20 }}>
                        <h1 className='text-3xl font-thin tracking-widest mb-0'>Silver Jewelry</h1>
                        <button className='text-sm hover:text-gray-400'>
                            <div className='flex items-center'>
                                DISCOVERY MORE
                                <RightOutlined className='ml-2' />
                            </div>
                        </button>
                    </div>
                </div>
                <div className='relative mr-auto cursor-pointer hover:opacity-80' >
                    <img src="https://media.gucci.com/content/DarkGray_CategoryOneThird_Standard_400x400/1636479952/CategoryOneThird_683715J16911012_001_Light.jpg" />
                    <div className='absolute' style={{ left: 130, bottom: 20 }}>
                        <h1 className='text-3xl font-thin tracking-widest mb-0'>Sunglsses</h1>
                        <button className='text-sm hover:text-gray-400'>
                            <div className='flex items-center'>
                                DISCOVERY MORE
                                <RightOutlined className='ml-2' />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className='relative mb-5 mx-4 mt-1'>
                <img src='https://media.gucci.com/content/HeroRegularStandard_1600x675/1586180706/HeroRegularStandard_PF20-Essentials-001_001_Default.jpg' />
                <div className='absolute text-center' style={{ top: '45%', left: '30%' }}>
                    <h1 className='text-7xl text-white font-thin mb-5'>
                        GUCCI ESSENTIALS
                    </h1>
                    <button className='bg-gray-900 hover:bg-gray-500 text-white text-xs py-3 px-5'>SHOP NOW</button>
                </div>
            </div>
        </div>
    )
}
