import { RightOutlined } from '@ant-design/icons';
import React from 'react'
import './New.css';

export default function New(props) {
    return (
        <div>
            <div className='relative'>
                {/* <div className='fixed bg-black opacity-30' style={{top:0,left:0,bottom:0,right:0}}></div> */}
                <img src='https://media.gucci.com/content/HeroRegularStandard_1600x675/1631106003/HeroRegularStandard_Gucci-100-Pattern-01_001_Default.jpg' />
                <div className='absolute text-center' style={{ top: '45%', left: '32%' }}>
                    <h1 className='text-7xl text-white font-thin mb-5 textNew'>
                        WHAT'S NEW
                    </h1>
                    <p className='text-white text-base font-semibold mt-10'>A lineup of ready-to-wear and accessories from the latest collection.</p>
                </div>
            </div>
            <div className='text-center my-20'>
                <h1 className='text-4xl font-light tracking-widest textNewIn'>New in</h1>
                <div className='grid grid-cols-2 mx-auto mt-14'>
                    <div>
                        <img src="https://media.gucci.com/content/BestOfEditsFeatured_Standard_432x364/1632994204/BestOfEditsFeatured_Gucci-ARIA-2021-046_001_Default.jpg" className='mx-auto' />
                        <p className='mt-10 text-gray-500 italic font-medium'>WOMEN</p>
                        <button className='text-xs hover:text-gray-400'>
                            <div className='flex items-center'>
                                SHOP ALL
                                <RightOutlined className='ml-2' />
                            </div>
                        </button>
                    </div>
                    <div>
                        <img src="https://media.gucci.com/content/BestOfEditsFeatured_Standard_432x364/1632994203/BestOfEditsFeatured_Gucci-ARIA-2021-040_001_Default.jpg" className='mx-auto' />
                        <p className='mt-10 text-gray-500 italic font-medium'>MEN</p>
                        <button className='text-xs hover:text-gray-400'>
                            <div className='flex items-center'>
                                SHOP ALL
                                <RightOutlined className='ml-2' />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <img src='https://media.gucci.com/content/HeroRegularStandard_1600x675/1639754112/HeroRegularStandard_TNF-W2-campaign-003_001_Default.jpg' />
                <div className='absolute text-center' style={{ top: '45%', left: '20%' }}>
                    <h1 className='text-7xl text-white font-thin mb-5'>THE NORTH FACE X GUCCI</h1>
                    <button className='bg-gray-900 hover:bg-gray-500 text-white text-xs py-3 px-5'>SHOP NOW</button>
                </div>
            </div>
            <div className='relative'>
                <img src='https://media.gucci.com/content/HeroRegularStandard_1600x675/1640259913/HeroRegularStandard_CNY-2022-Tiger-028_001_Default.jpg' />
                <div className='absolute text-center' style={{ top: '45%', left: '5%' }}>
                    <h1 className='text-7xl text-white font-thin mb-5'>GUCCI TIGER FOR THE YEAR OF THE TIGER</h1>
                    <button className='bg-gray-900 hover:bg-gray-500 text-white text-xs py-3 px-5'>SHOP THE COLLECTION</button>
                </div>
            </div>
            <div className='relative mb-5'>
                <img src='https://media.gucci.com/content/HeroRegularStandard_1600x675/1632905110/HeroRegularStandard_Gucci-ARIA-2021-008_001_Default.jpg' />
                <div className='absolute text-center' style={{ top: '45%', left: '24%' }}>
                    <h1 className='text-7xl text-white font-thin mb-5'>BAMBOO HANDLE BAGS</h1>
                    <button className='bg-gray-900 hover:bg-gray-500 text-white text-xs py-3 px-5'>SHOP THE COLLECTION</button>
                </div>
            </div>
        </div>
    )
}
