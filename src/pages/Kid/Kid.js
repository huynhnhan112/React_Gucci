import { RightOutlined } from '@ant-design/icons'
import React from 'react'

export default function Kid(props) {
    return (
        <div>
            <div className='relative'>
                {/* <div className='fixed bg-black opacity-30' style={{top:0,left:0,bottom:0,right:0}}></div> */}
                <img src='https://media.gucci.com/content/HeroRegularStandard_1600x675/1622813406/HeroRegularStandard_OUVERTURE-CHILDREN-1_001_Default.jpg' />
                <div className='absolute text-center' style={{ top: '45%', left: '40%' }}>
                    <p className='text-white text-xl font-normal mb-0'>OUVERTURE</p>
                    <h1 className='text-7xl text-white font-thin'>
                        CHILDREN'S
                    </h1>
                </div>
            </div>
            <div className='grid grid-cols-2 text-center my-5'>
                <div className='grid grid-rows-2 ml-auto mr-1'>
                    <div className='relative mb-1 cursor-pointer hover:opacity-90'>
                        <img src="https://media.gucci.com/content/DarkGray_CategorySingle_Standard_600x600/1622758503/CategorySingle_ouverture-kids-look-18-au_001_Light.jpg" />
                        <div className='absolute' style={{bottom:55, left:235}}>
                            <h1 className='text-4xl font-thin mb-2 tracking-wider'>Boys</h1>
                            <button className='text-sm hover:text-gray-400'>
                                <div className='flex items-center'>
                                    DISCOVER MORE
                                    <RightOutlined className='ml-2' />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='relative cursor-pointer hover:opacity-90'>
                        <img src="https://media.gucci.com/content/DarkGray_CategorySingle_Standard_600x600/1622824205/CategorySingle_ouverture-kids-look-29-hk-new_001_Light.jpg" />
                        <div className='absolute' style={{bottom:55, left:235}}>
                            <h1 className='text-4xl font-thin mb-2 tracking-wider'>Baby</h1>
                            <button className='text-sm hover:text-gray-400'>
                                <div className='flex items-center'>
                                    DISCOVER MORE
                                    <RightOutlined className='ml-2' />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-rows-2'>
                    <div className='relative mb-1 cursor-pointer hover:opacity-90'>
                        <img src="https://media.gucci.com/content/DarkGray_CategorySingle_Standard_600x600/1622758503/CategorySingle_ouverture-kids-look-1-hk_001_Light.jpg" />
                        <div className='absolute' style={{bottom:55, left:235}}>
                            <h1 className='text-4xl font-thin mb-2 tracking-wider'>Girls</h1>
                            <button className='text-sm hover:text-gray-400'>
                                <div className='flex items-center'>
                                    DISCOVER MORE
                                    <RightOutlined className='ml-2' />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='relative cursor-pointer hover:opacity-90'>
                        <img src="https://media.gucci.com/content/DarkGray_CategorySingle_Standard_600x600/1622758503/CategorySingle_647075HVKF09760_001_Light.jpg" />
                        <div className='absolute' style={{bottom:55, left:235}}>
                            <h1 className='text-4xl font-thin mb-2 tracking-wider'>Gifts</h1>
                            <button className='text-sm hover:text-gray-400'>
                                <div className='flex items-center'>
                                    DISCOVER MORE
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
