import React from 'react'
import { AntDesignOutlined, RightOutlined } from '@ant-design/icons'


export default function HomePoster(props) {
    return (
        <div className='relative'>
            <div style={{ cursor: 'pointer' }}>
                <img src="https://media.gucci.com/content/GiantEditorialStandard_1366x1643/1640597420/GiantEditorialStandard_CNY-2022-Tiger-010_001_Default.jpg" alt="poster" />
            </div>
            <div style={{ backgroundColor: '#f5f5f5', top: 50, right: 50, cursor: 'pointer' }} className='inline-block w-50 p-6 text-center text-sm text-gray-500 absolute'>
                <img src="https://media.gucci.com/content/LightGray_Vignette_Standard_80x80/1640599210/Vignette_683254Z8AXH4309_001_Light.jpg" className='mb-5 w-full' />
                <h3 className='text-xl text-gray-500 font-thin'>Outerwear</h3>
                <p style={{ fontStyle: 'italic' }}>The tiger, a motif <br /> often seen in <br /> Alessandro Michele's <br /> collections, appears <br /> against colorful <br /> backdrop of greenery <br /> and flowers.</p>
                <div className='pb-4'>
                    <button>
                        <div className='flex items-center justify-center text-xs text-black font-normal hover:text-gray-500'>
                            SHOP OUTERWEAR
                            <RightOutlined style={{ fontSize: '8px' }} className='ml-1' />
                        </div>
                    </button>
                </div>
            </div>
            <div style={{ backgroundColor: '#f5f5f5', top: 700, left: 50, cursor: 'pointer' }} className='inline-block w-50 p-6 text-center text-sm text-gray-500 absolute'>
                <img src="https://media.gucci.com/content/LightGray_Vignette_Standard_80x80/1640599218/Vignette_687828US7DC9395_001_Light.jpg" className='mb-5 w-full' />
                <h3 className='text-xl text-gray-500 font-thin'>Bags</h3>
                <p style={{ fontStyle: 'italic' }}>In celebration of <br /> Chinese New Year, <br /> Gucci presents a <br /> reinterpretation of a <br /> late 1960s archival <br /> design.</p>
                <div className='pb-4'>
                    <button>
                        <div className='flex items-center justify-center text-xs text-black font-normal hover:text-gray-500'>
                            SHOP BAGS
                            <RightOutlined style={{ fontSize: '8px' }} className='ml-1' />
                        </div>
                    </button>
                </div>
            </div>
            <div style={{ backgroundColor: '#f5f5f5' }} className='text-center p-10'>
                <p className='text-sm text-gray-500 mb-2'>GUCCI TIGER</p>
                <h1 className='text-5xl text-gray-500 font-thin mb-0'>Year Of The Tiger</h1>
                <div className='my-3'>
                    <AntDesignOutlined />
                </div>
                <button className="py-4 px-10 hover:opacity-80 bg-black text-white leading-3">
                    SHOP THE COLLECTION
                </button>
            </div>
            <div className='mt-3 text-center relative' style={{backgroundColor:'#f5f5f5'}}>
                <div>
                    <img src="https://media.gucci.com/style/DarkGray_Center_0_0_700x700/1638298001/687611_DRW00_9522_001_100_0000_Light-Gucci-Tiger-Mens-Rhyton-sneaker.jpg" className='w-full' style={{cursor:'pointer'}} />
                </div>
                <div className='absolute' style={{bottom:150, left: 350}}>
                    <p className='text-sm text-gray-500 mb-2'>GUCCI TIGER</p>
                    <h1 className='text-4xl text-gray-500 font-thin mb-0 tracking-widest'>Gucci Tiger Men's Rhyton sneaker</h1>
                    <div className='my-3'>
                        <AntDesignOutlined />
                    </div>
                    <button className="py-4 px-10 hover:opacity-80 bg-black text-white leading-3">
                        SHOP SHOES
                    </button>
                </div>
            </div>
            <div className='relative'>
                <img src="https://media.gucci.com/content/HomepageVideoBackgroundStandard_2600x1516/1636100137/HomepageVideoBackgroundStandard_Love-Parade-showspace-02_001_Default.jpg" className='w-full' />
                <div style={{ backgroundColor: '#f5f5f5', top: 200, left: 600 }} className='inline-block w-50 p-6 text-center text-sm text-gray-500 absolute'>
                    <h3 className='text-2xl text-gray-500 font-thin'>Gucci Love <br /> Parade</h3>
                    <p style={{ fontStyle: 'italic' }} className='text-sm'>The new collection by <br /> Alessandro Michele</p>
                    <div className='pb-8 mt-16'>
                        <button>
                            <div className='flex items-center justify-center text-xs text-black font-normal hover:text-gray-500'>
                                DISCOVER MORE
                                <RightOutlined style={{ fontSize: '8px' }} className='ml-1' />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#f5f5f5' }}>
                <h1 className='py-20 text-5xl font-thin text-center'>STORIES</h1>
                <div className='grid grid-cols-3 ml-20 p-5'>
                    <div className='grid grid-rows-2'>
                        <div>
                            <img src="https://media.gucci.com/content/StyleNewsSingle_Standard_340x202/1636131607/StyleNewsSingle_Love-Parade-showspace-01_001_Default.jpg" style={{ cursor: 'pointer' }} />
                            <h3 className='text-xl font-light mt-10'>Unveiling Gucci Love Parade</h3>
                            <button>
                                <div className='flex items-center mb-24 hover:text-gray-400'>
                                    WATCH THE FASHION SHOW
                                    <RightOutlined style={{ fontSize: '8px' }} className='ml-1' />
                                </div>
                            </button>
                        </div>
                        <div>
                            <img src="https://media.gucci.com/content/StyleNewsSingle_Standard_340x202/1636120837/StyleNewsSingle_Love-Parade-gallery-guests_001_Default.jpg" style={{ cursor: 'pointer' }} />
                            <h3 className='text-xl font-light mt-10'>Celebrities at Gucci Love Parade</h3>
                            <button>
                                <div className='flex items-center mb-24 hover:text-gray-400'>
                                    ATTENDING THE SHOW
                                    <RightOutlined style={{ fontSize: '8px' }} className='ml-1' />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src="https://media.gucci.com/content/StyleNewsDoubleVertical_Standard_340x602/1635929154/StyleNewsDoubleVertical_Love-Parade-LOOK-01_001_Default.jpg" style={{ cursor: 'pointer' }} />
                        <h3 className='text-xl font-light mt-10'>Love Parade: The Looks</h3>
                        <button>
                            <div className='flex items-center hover:text-gray-400'>
                                SEE MORE
                                <RightOutlined style={{ fontSize: '8px' }} className='ml-1' />
                            </div>
                        </button>
                    </div>
                    <div className='grid grid-rows-2'>
                        <div>
                            <img src="https://media.gucci.com/content/StyleNewsSingle_Standard_340x202/1636382704/StyleNewsSingle_beauty-nov-story_001_Default.jpg" style={{ cursor: 'pointer' }} />
                            <h3 className='text-xl font-light mt-10'>Unveiling Gucci Love Parade</h3>
                            <button>
                                <div className='flex items-center mb-24 hover:text-gray-400'>
                                    WATCH THE FASHION SHOW
                                    <RightOutlined style={{ fontSize: '8px' }} className='ml-1' />
                                </div>
                            </button>
                        </div>
                        <div>
                            <img src="https://media.gucci.com/content/StyleNewsSingle_Standard_340x202/1640016003/StyleNewsSingle_TNF-W2_001_Default.jpg" style={{ cursor: 'pointer' }} />
                            <h3 className='text-xl font-light mt-10'>Celebrities at Gucci Love Parade</h3>
                            <button>
                                <div className='flex items-center mb-24 hover:text-gray-400'>
                                    ATTENDING THE SHOW
                                    <RightOutlined style={{ fontSize: '8px' }} className='ml-1' />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
