import { AntDesignOutlined } from '@ant-design/icons';
import React from 'react'
import './MX.css';

export default function MX(props) {
    return (
        <div>
            <div className='relative'>
                {/* <div className='fixed bg-black opacity-30' style={{top:0,left:0,bottom:0,right:0}}></div> */}
                <img src='https://media.gucci.com/content/HeroRegularStandard_1600x675/1632391209/HeroRegularStandard_Gucci-ARIA-2021-079_001_Default.jpg' />
                <div className='absolute text-center' style={{ top: '45%', left: '30%' }}>
                    <h1 className='text-7xl text-white font-thin mb-5 textMX'>
                        GUCCI MX
                    </h1>
                    <p className='text-white text-base font-bold mt-10 italic'>MX highlights accessories and ready-to-wear styled with an all gender focus.</p>
                </div>
            </div>
            <div className='text-center my-20'>
                <h1 className='text-4xl font-thin tracking-widest textLifeStyle'>
                    Welcome to MX
                </h1>
                <p className='text-lg italic text-gray-500 mt-16 font-normal'>Gucci's collections set out to deconstruct preconceived binaries and question how these concepts <br/> relate to our bodies. Celebrating self-expression in the name of all gender equality, the House <br/> presents MX.</p>
            </div>
            <div className='grid grid-cols-5'>
                <div className='relative cursor-pointer'>
                    <img src="https://media.gucci.com/style/Transparent_South_0_160_316x316/1632137412/679470_Z4716_4376_001_100_0000_Light-Stretch-velvet-jacket-with-padded-shoulders.png" />
                    <div className='flex items-center justify-center text-gray-500 text-xs absolute' style={{top:0,left:10}}>
                        <AntDesignOutlined />
                        <p className='ml-2 mt-3'>RUNWAY</p>
                    </div>
                </div>
                <div className='relative cursor-pointer'>
                    <img src="https://media.gucci.com/style/Transparent_South_0_160_316x316/1632137407/672239_ZAHW3_4520_001_100_0000_Light-Stretch-velvet-pant-with-satin.png" />
                    <div className='flex items-center justify-center text-gray-500 text-xs absolute' style={{top:0,left:10}}>
                        <AntDesignOutlined />
                        <p className='ml-2 mt-3'>RUNWAY</p>
                    </div>
                </div>
                <div className='relative cursor-pointer'>
                    <img src="https://media.gucci.com/style/Transparent_South_0_160_316x316/1612395913/643485_17L10_9060_001_100_0000_Light-Mens-Gucci-Tennis-1977-sneaker.png" />
                    <div className='flex items-center justify-center text-gray-500 text-xs absolute' style={{top:0,left:10}}>
                        <AntDesignOutlined />
                        <p className='ml-2 mt-3'>RUNWAY</p>
                    </div>
                </div>
                <div className='relative cursor-pointer'>
                    <img src="https://media.gucci.com/style/Transparent_South_0_160_316x316/1632137410/673684_XKB22_7325_001_100_0000_Light-Cable-knit-sweater-with-detachable-sleeves.png" />
                    <div className='flex items-center justify-center text-gray-500 text-xs absolute' style={{top:0,left:10}}>
                        <AntDesignOutlined />
                        <p className='ml-2 mt-3'>RUNWAY</p>
                    </div>
                </div>
                <div className='relative cursor-pointer'>
                    <img src="https://media.gucci.com/style/Transparent_South_0_160_316x316/1633024812/678547_3HAGH_1060_001_100_0000_Light-Velvet-helmet.png" />
                    <div className='flex items-center justify-center text-gray-500 text-xs absolute' style={{top:0,left:10}}>
                        <AntDesignOutlined />
                        <p className='ml-2 mt-3'>RUNWAY</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
