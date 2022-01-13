import React from 'react'
import './Decor.css';

export default function Decor(props) {
    return (
        <div>
            <div className='relative'>
                {/* <div className='fixed bg-black opacity-30' style={{top:0,left:0,bottom:0,right:0}}></div> */}
                <img src='https://media.gucci.com/content/HeroRegularStandard_1600x675/1630661406/HeroRegularStandard_PF21-LIFESTYLE-008_001_Default.jpg' />
                <div className='absolute text-center' style={{ top: '45%', left: '20%' }}>
                    <h1 className='text-7xl text-white font-thin mb-5 textDecor'>
                        DÉCOR & LIFESTYLE
                    </h1>
                    <p className='text-white text-base font-bold mt-10 italic'>An eclectic mix of archival symbols and contemporary House codes define a selection of décor pieces and leisure accessories.</p>
                </div>
            </div>
            <div className='text-center my-20'>
                <h1 className='text-4xl font-thin tracking-widest textLifeStyle'>
                    Gucci Décor
                </h1>
                <p className='text-lg italic text-gray-500 mt-16 font-normal'>Presenting Gucci Décor, a collection of furniture and decorative pieces.</p>
            </div>
            <div className='relative'>
                <img src='https://media.gucci.com/content/HeroRegularStandard_1600x675/1630414803/HeroRegularStandard_PF21-DECOR-009-LP-new_001_Default.jpg' />
                <div className='absolute text-center' style={{ top: '45%', left: '36%' }}>
                    <p className='text-white font-thin text-xl mb-0'>GUCCI DÉCOR</p>
                    <h1 className='text-7xl text-white font-thin mb-5'>TABLEWARE</h1>
                    <button className='border-2 boder-bg-white hover:bg-gray-400 text-white text-xs py-3 px-5'>SHOP NOW</button>
                </div>
            </div>
            <div className='relative'>
                <img src='https://media.gucci.com/content/HeroRegularStandard_1600x675/1630414803/HeroRegularStandard_PF21-DECOR-018-LP-new_001_Default.jpg' />
                <div className='absolute text-center' style={{ top: '45%', left: '26%' }}>
                    <p className='text-white font-thin text-xl mb-0'>GUCCI DÉCOR</p>
                    <h1 className='text-7xl text-white font-thin mb-5'>HOME ACCESSORIES</h1>
                    <button className='border-2 boder-bg-white hover:bg-gray-400 text-white text-xs py-3 px-5'>SHOP NOW</button>
                </div>
            </div>
            <div className='relative'>
                <img src='https://media.gucci.com/content/HeroRegularStandard_1600x675/1630414804/HeroRegularStandard_PF21-DECOR-030-LP-new_001_Default.jpg' />
                <div className='absolute text-center' style={{ top: '45%', left: '40%' }}>
                    <p className='text-white font-thin text-xl mb-0'>GUCCI DÉCOR</p>
                    <h1 className='text-7xl text-white font-thin mb-5'>TEXTILES</h1>
                    <button className='border-2 boder-bg-white hover:bg-gray-400 text-white text-xs py-3 px-5'>SHOP NOW</button>
                </div>
            </div>
            <div className='relative'>
                <img src='https://media.gucci.com/content/HeroRegularStandard_1600x675/1630414804/HeroRegularStandard_PF21-DECOR-035-LP-new_001_Default.jpg' />
                <div className='absolute text-center' style={{ top: '45%', left: '40%' }}>
                    <p className='text-white font-thin text-xl mb-0'>GUCCI DÉCOR</p>
                    <h1 className='text-7xl text-white font-thin mb-5'>FURNITURE</h1>
                    <button className='border-2 boder-bg-white hover:bg-gray-400 text-white text-xs py-3 px-5'>SHOP NOW</button>
                </div>
            </div>
            <div className='relative'>
                <img src='https://media.gucci.com/content/HeroRegularStandard_1600x675/1630414803/HeroRegularStandard_PF21-DECOR-020-LP-new_001_Default.jpg' />
                <div className='absolute text-center' style={{ top: '45%', left: '40%' }}>
                    <p className='text-white font-thin text-xl mb-0'>GUCCI DÉCOR</p>
                    <h1 className='text-7xl text-white font-thin mb-5'>WALLPAPER</h1>
                    <button className='border-2 boder-bg-white hover:bg-gray-400 text-white text-xs py-3 px-5'>SHOP NOW</button>
                </div>
            </div>
            <div className='text-center my-20'>
                <h1 className='text-4xl font-thin tracking-widest textLifeStyle'>Gucci Lifestyle</h1>
                <p className='text-lg italic text-gray-500 mt-16'>Appearing as intricate prints and details, distinctive Gucci symbols characterise a mix of stationery, <br/> games, travel sets and loungewear.</p>
            </div>
            <div className='relative'>
                <img src='https://media.gucci.com/content/HeroRegularStandard_1600x675/1630681204/HeroRegularStandard_PF21-LIFESTYLE-017-LP-new_001_Default.jpg' />
                <div className='absolute text-center' style={{ top: '45%', left: '36%' }}>
                    <p className='text-white font-thin text-xl mb-0'>GUCCI LIFESTYLE</p>
                    <h1 className='text-7xl text-white font-thin mb-5'>STATIONERY</h1>
                    <button className='border-2 boder-bg-white hover:bg-gray-400 text-white text-xs py-3 px-5'>SHOP NOW</button>
                </div>
            </div>
            <div className='relative'>
                <img src='https://media.gucci.com/content/HeroRegularStandard_1600x675/1630681204/HeroRegularStandard_PF21-LIFESTYLE-006-LP-new_001_Default.jpg' />
                <div className='absolute text-center' style={{ top: '45%', left: '42%' }}>
                    <p className='text-white font-thin text-xl mb-0'>GUCCI LIFESTYLE</p>
                    <h1 className='text-7xl text-white font-thin mb-5'>GAMES</h1>
                    <button className='border-2 boder-bg-white hover:bg-gray-400 text-white text-xs py-3 px-5'>SHOP NOW</button>
                </div>
            </div>
            <div className='relative'>
                <img src='https://media.gucci.com/content/HeroRegularStandard_1600x675/1630680304/HeroRegularStandard_PF21-LIFESTYLE-022-LP-new_001_Default.jpg' />
                <div className='absolute text-center' style={{ top: '40%', left: '16%' }}>
                    <p className='text-white font-thin text-xl mb-0'>GUCCI LIFESTYLE</p>
                    <h1 className='text-7xl text-white font-thin mb-5'>TRAVEL SETS & LOUNGEWEAR</h1>
                    <button className='border-2 boder-bg-white hover:bg-gray-400 text-white text-xs py-3 px-5'>SHOP NOW</button>
                </div>
            </div>
            <div className='relative mb-5'>
                <img src='https://media.gucci.com/content/HeroRegularStandard_1600x675/1639388731/HeroRegularStandard_GiftGiving21-Decor-008-LP_001_Default.jpg' />
                <div className='absolute text-center' style={{ top: '45%', left: '28%' }}>
                    <p className='text-white font-thin text-xl mb-0'>GUCCI LIFESTYLE</p>
                    <h1 className='text-7xl text-white font-thin mb-5'>SPORTING GOODS</h1>
                    <button className='border-2 boder-bg-white hover:bg-gray-400 text-white text-xs py-3 px-5'>SHOP NOW</button>
                </div>
            </div>
        </div>
    )
}
