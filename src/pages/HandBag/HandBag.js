import { DownOutlined, HeartOutlined } from '@ant-design/icons';
import React from 'react'
import './HandBag.css';

export default function HandBag(props) {
    return (
        <div>
            <div className='relative'>
                {/* <div className='fixed bg-black opacity-30' style={{top:0,left:0,bottom:0,right:0}}></div> */}
                <img src='https://media.gucci.com/content/HeroRegularStandard_1600x675/1635859845/HeroRegularStandard_Gucci-ARIA-2021-011_001_Default.jpg' />
                <div className='absolute text-center' style={{ top: '45%', left: '6%' }}>
                    <h1 className='text-7xl text-white font-thin mb-5 textHandBag'>
                        WOMEN'S HANDBAGS
                    </h1>
                    <p className='text-white text-base font-bold mt-10 italic'>Gucci handbags for women mix signature lines with diverse designs like totes, top handles, shoulder bags and belt bags in leather and precious materials.</p>
                </div>
            </div>
            <div className='flex justify-between mt-5'>
                <div className='flex text-gray-400 text-sm'>
                    <p className='mr-3 hover:text-black cursor-pointer'>WOMEN</p>
                    <p className='mr-3'>|</p>
                    <p>Handbags</p>
                </div>
                <div className='flex text-sm'>
                    <div className='flex'>
                        <p>Category</p>
                        <DownOutlined className='mt-1 ml-1' style={{ fontSize: '8px' }} />
                        <p className='text-gray-400 mx-3'>|</p>
                    </div>
                    <div className='flex'>
                        <p>Line</p>
                        <DownOutlined className='mt-1 ml-1' style={{ fontSize: '8px' }} />
                        <p className='text-gray-400 mx-3'>|</p>
                    </div>
                    <div className='flex'>
                        <p>Filters</p>
                        <DownOutlined className='mt-1 ml-1' style={{ fontSize: '8px' }} />
                        <p className='text-gray-400 mx-3'>|</p>
                    </div>
                    <div className='flex'>
                        <p><span className='text-gray-400'>Sorts by:</span> Newest</p>
                        <DownOutlined className='mt-1 ml-1' style={{ fontSize: '8px' }} />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 mb-1'>
                <div className='relative cursor-pointer mx-auto'>
                    <img src="https://media.gucci.com/style/DarkGray_South_0_160_316x316/1641813304/685127_UN3AG_1294_001_058_0000_Light-Jackie-1961-mini-shoulder-bag.jpg" />
                    <HeartOutlined className='absolute opacity-30 hover:opacity-100' style={{ right: 40, top: 20 }} />
                </div>
                <div className='relative cursor-pointer mx-auto'>
                    <img src="https://media.gucci.com/style/DarkGray_South_0_160_316x316/1638296112/602204_UN3BG_1274_001_069_0000_Light-Gucci-Horsebit-1955-shoulder-bag.jpg" />
                    <HeartOutlined className='absolute opacity-30 hover:opacity-100' style={{ right: 40, top: 20 }} />
                </div>
                <div className='relative cursor-pointer mx-auto'>
                    <img src="https://media.gucci.com/style/DarkGray_South_0_160_316x316/1638539153/517350_UN3BG_1274_001_062_0000_Light-Ophidia-mini-GG-bag.jpg" />
                    <HeartOutlined className='absolute opacity-30 hover:opacity-100' style={{ right: 40, top: 20 }} />
                </div>
                <div className='relative cursor-pointer mx-auto'>
                    <img src="https://media.gucci.com/style/DarkGray_South_0_160_316x316/1636133436/678843_UN3AG_1294_001_080_0000_Light-Jackie-1961-small-shoulder-bag.jpg" />
                    <HeartOutlined className='absolute opacity-30 hover:opacity-100' style={{ right: 40, top: 20 }} />
                </div>
            </div>
        </div>
    )
}
