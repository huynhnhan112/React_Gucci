import React from 'react'
import './Header.css'

export default function HeaderNav(props) {
    return (
        <div className="p-6 bg-white text-coolGray-800 absolute navgifts" style={{top:130, zIndex:10}}>
            <div className="container grid mx-auto gap-x-3 gap-y-8 sm:grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col space-y-4">
                    <div className='grid grid-rows-2 ml-20'>
                        <div>
                            <h2 className="font-bold mb-5">GIFTS</h2>
                            <div className="flex flex-col space-y-2 text-sm text-coolGray-600">
                                <a href="#" className='mb-1 text-gray-500 font-normal'>Gifts for Women</a>
                                <a href="#" className='mb-1 text-gray-500 font-normal'>Gifts for Men</a>
                                <a href="#" className='mb-1 text-gray-500 font-normal'>Gifts for Children</a>
                                <a href="#" className='mb-1 text-gray-500 font-normal'>Using with Preprocessors </a>
                                <a href="#" className='text-gray-500 font-normal'>Personalized Gifts</a>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <h2 className="font-bold mb-5">LATEST COLLECTIONS</h2>
                            <div className="flex flex-col space-y-2 text-sm text-coolGray-600">
                                <a href="#" className='mb-1 text-gray-500 font-normal'>The Year of the Tiger</a>
                                <a href="#" className='mb-1 text-gray-500 font-normal'>Horse Racing Motifs</a>
                                <a href="#" className='text-gray-500 font-normal'>Décor & Lifestyle Gifts</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">GUCCI SERVICES</h2>
                    <div className="flex flex-col space-y-2 text-sm text-coolGray-600">
                        <div className='grid grid-cols-2'>
                            <div className='grid grid-rows-3'>
                                <a href="#" className='text-gray-500 font-normal mb-5'>
                                    <div className='flex'>
                                        <img src="https://dd6zx4ibq538k.cloudfront.net/static/images/4344/d19436ef18cf6fb0121df8829bb37c44_300_300.png" style={{ width: 80 }} className='mr-5' />
                                        PREMIUM SHIPPING
                                    </div>
                                </a>
                                <a href="#" className='text-gray-500 font-normal'>
                                    <div className='flex'>
                                        <img src="https://dd6zx4ibq538k.cloudfront.net/static/images/4344/07a98217c18029a1f00a86109f9ee88c_300_300.png" style={{ width: 80 }} className='mr-5' />
                                        GUCCI ADVISOR
                                    </div>
                                </a>
                                <a href="#" className='text-gray-500 font-normal'>
                                    <div className='flex'>
                                        <img src="https://dd6zx4ibq538k.cloudfront.net/static/images/4344/407fa65a93d7aec8019317699d2c8bc1_300_300.png" style={{ width: 80 }} className='mr-5' />
                                        DIGITAL GIFTING
                                    </div>
                                </a>
                            </div>
                            <div className='grid grid-rows-3'>
                                <a href="#" className='text-gray-500 font-normal'>
                                    <div className='flex'>
                                        <img src="https://dd6zx4ibq538k.cloudfront.net/static/images/4344/6c0743c7313160579a71798eb1cbfc39_300_300.png" style={{ width: 80 }} className='mr-5' />
                                        YOUR PRIVATE APPOINTMENT
                                    </div>
                                </a>
                                <a href="#" className='text-gray-500 font-normal'>
                                    <div className='flex'>
                                        <img src="https://dd6zx4ibq538k.cloudfront.net/static/images/4344/bbab27f797401d3a1177fd630efd1ed0_300_300.png" style={{ width: 80 }} className='mr-5' />
                                        DIGITAL SHOWROOM EXPERIENCE
                                    </div>
                                </a>
                                <a href="#" className='text-gray-500 font-normal'>
                                    <div className='flex'>
                                        <img src="https://dd6zx4ibq538k.cloudfront.net/static/images/4344/7907198099635124ba126e29b35717aa_300_300.png" style={{ width: 80 }} className='mr-5' />
                                        DISCOVER GUCCI SERVICES
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
