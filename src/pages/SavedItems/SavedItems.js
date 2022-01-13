import { RightOutlined } from '@ant-design/icons';
import React from 'react'
import './SavedItems.css';

export default function SavedItems(props) {
    return (
        <div className='mt-32 bg-gray-200'>
            <div className='pb-5 pt-20'>
                <div className=' text-center' style={{ top: '45%', left: '32%' }}>
                    <h1 className='text-4xl font-thin mb-5 textSavedItems'>
                        SAVED ITEMS
                    </h1>
                    <p className='text-gray-400 text-base font-medium mt-10 mb-0 italic'>You Have 0 Items In Saved Items.</p>
                    <p className='text-gray-400 text-base font-medium italic'>Save Your Wishlist: Sign In Or Create An Account.</p>
                </div>
            </div>
            <div className='text-center bg-white mb-10'>
                <h1 className='text-2xl font-thin py-10'>You May Also Like</h1>
                <div className='grid grid-cols-4'>
                    <div>
                        <img src="http://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1635525928/636709_UTIAC_9270_001_080_0000_Light.jpg" className='mx-auto cursor-pointer' style={{width:300}} />
                        <div className='mt-5'>
                            <p className='tracking-wider text-gray-500 font-normal text-base mb-3'>Gucci Tiger Jackie 1961 small bag</p>
                            <p className='text-gray-400 text-base font-thin mb-3'>$2,790</p>
                            <button className='text-sm hover:text-gray-400'>
                                <div className='flex items-center'>
                                    SHOP THIS
                                    <RightOutlined className='ml-2' />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src="http://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1600340405/636709_10O0G_9022_001_080_0000_Light.jpg" className='mx-auto cursor-pointer' style={{width:300}} />
                        <div className='mt-5'>
                            <p className='tracking-wider text-gray-500 font-normal text-base mb-3'>Jackie 1961 small shoulder bag</p>
                            <p className='text-gray-400 text-base font-thin mb-3'>$2,500</p>
                            <button className='text-sm hover:text-gray-400'>
                                <div className='flex items-center'>
                                    SHOP THIS
                                    <RightOutlined className='ml-2' />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src="http://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1600173003/636706_HUHHG_8565_001_080_0000_Light.jpg" className='mx-auto cursor-pointer' style={{width:300}} />
                        <div className='mt-5'>
                            <p className='tracking-wider text-gray-500 font-normal text-base mb-3'>Jackie 1961 small shoulder bag</p>
                            <p className='text-gray-400 text-base font-thin mb-3'>$2,150</p>
                            <button className='text-sm hover:text-gray-400'>
                                <div className='flex items-center'>
                                    SHOP THIS
                                    <RightOutlined className='ml-2' />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src="http://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1618318804/658551_96IWG_8745_001_056_0000_Light.jpg" className='mx-auto cursor-pointer' style={{width:300}} />
                        <div className='mt-5'>
                            <p className='tracking-wider text-gray-500 font-normal text-base mb-3'>Ophidia GG mini bag</p>
                            <p className='text-gray-400 text-base font-thin mb-3'>$920</p>
                            <button className='text-sm hover:text-gray-400'>
                                <div className='flex items-center'>
                                    SHOP THIS
                                    <RightOutlined className='ml-2' />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
