import { RightOutlined } from '@ant-design/icons'
import React from 'react'

export default function Women(props) {
    return (
        <div>
            <div className='relative'>
                {/* <div className='fixed bg-black opacity-30' style={{top:0,left:0,bottom:0,right:0}}></div> */}
                <img src='https://media.gucci.com/content/HeroRegularStandard_1600x675/1632390304/HeroRegularStandard_Gucci-ARIA-2021-073_001_Default.jpg' />
                <div className='absolute text-center' style={{ top: '45%', left: '40%' }}>
                    <p className='text-white text-xl font-normal mb-0'>ARIA</p>
                    <h1 className='text-7xl text-white font-thin'>
                        WOMEN
                    </h1>
                </div>
            </div>
            <div className='grid grid-cols-2 mt-5 mb-1 text-center'>
                <div className='relative mr-1 mb-1 cursor-pointer hover:opacity-80' style={{ backgroundColor: '#e5e7eb', marginLeft: '71px' }}>
                    <img src="https://media.gucci.com/content/DarkGray_CategoryDoubleVertical_Standard_463x926/1636464613/CategoryDoubleVertical_ARIA-MNWLook028_001_Light.jpg" className='mx-auto mt-36' />
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
                        <img src="https://media.gucci.com/content/DarkGray_CategorySingle_Standard_600x600/1636475424/CategorySingle_67579710ODP1060_001_Light.jpg" />
                        <div className='absolute' style={{ left: 230, bottom: 70 }}>
                            <h1 className='text-3xl font-thin tracking-widest mb-0'>Handbags</h1>
                            <button className='text-sm hover:text-gray-400'>
                                <div className='flex items-center'>
                                    DISCOVERY MORE
                                    <RightOutlined className='ml-2' />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='relative cursor-pointer hover:opacity-80'>
                        <img src="https://media.gucci.com/content/DarkGray_CategorySingle_Standard_600x600/1636475426/CategorySingle_675829F13A01000_001_Light.jpg" />
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
                    <img src="https://media.gucci.com/content/DarkGray_CategorySingle_Standard_600x600/1636475408/CategorySingle_45612617WEN1000_001_Light.jpg" />
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
                    <img src="https://media.gucci.com/content/DarkGray_CategorySingle_Standard_600x600/1636475406/CategorySingle_40941718YXV9022_001_Light.jpg" className='' />
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
            <div className='grid grid-cols-3 text-center mb-5'>
                <div className='relative ml-auto cursor-pointer hover:opacity-80'>
                    <img src="https://media.gucci.com/content/DarkGray_CategoryOneThird_Standard_400x400/1636479951/CategoryOneThird_681760I86008871_001_Light.jpg" />
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
                    <img src="https://media.gucci.com/content/DarkGray_CategoryOneThird_Standard_400x400/1636479949/CategoryOneThird_675769I4601092_001_Light.jpg" />
                    <div className='absolute' style={{ left: 130, bottom: 20 }}>
                        <h1 className='text-3xl font-thin tracking-widest mb-0'>Jewelry</h1>
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
                    <div className='absolute' style={{ left: 140, bottom: 20 }}>
                        <h1 className='text-3xl font-thin tracking-widest mb-0'>Eyewear</h1>
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
    )
}
