import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HeartOutlined, RightOutlined, SearchOutlined, ShoppingOutlined, UpOutlined } from '@ant-design/icons';
import { Modal, BackTop, Input } from 'antd';
import { AntDesignOutlined, AudioOutlined } from "@ant-design/icons";
import './Header.css'



export default function Header(props) {

    const [state, setState] = useState({
        modalVisible: false,
        modal1Visible: false,
        modalInfo: false,
        modalSignIn: false,
        modalBag: false,
    });

    const setModal2Visible = (modalVisible) => {
        setState({ modalVisible });
    }

    const setModal1Visible = (modal1Visible) => {
        setState({ modal1Visible });
    }

    const setModalInfo = (modalInfo) => {
        setState({ modalInfo })
    }

    const setModalSignIn = (modalSignIn) => {
        setState({ modalSignIn })
    }

    const setModalBag = (modalBag) => {
        setState({ modalBag })
    }

    const style = {
        height: 40,
        width: 40,
        lineHeight: '40px',
        borderRadius: 4,
        backgroundColor: '#fff',
        color: '#ccc',
        textAlign: 'center',
    };

    const { Search } = Input;

    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );

    const onSearch = value => console.log(value);

    return (
        <header style={{ zIndex: 10, top: 0, left:0, right:0 }} className="pt-4 hover:bg-gray-900 hover:opacity-100 bg-black opacity-50 w-full text-coolGray-800 fixed">
            <div className="container flex justify-between ">
                <ul className="items-stretch hidden lg:flex">
                    <li className="flex">
                        <p className="flex items-center px-2 -mb-1 border-b-2 border-transparent text-xs text-white" style={{ cursor: 'pointer' }} onClick={() => setModalInfo(true)}>
                            <i className="fas fa-map-marker-alt mr-2"></i>
                            United States
                        </p>
                    </li>
                    <li className="flex">
                        <p className="flex items-center px-2 -mb-1 border-b-2 border-transparent text-xs text-white">English</p>
                    </li>
                    <li className="flex">
                        <p onClick={() => setModal2Visible(true)} style={{ cursor: 'pointer' }} className="flex items-center px-2 -mb-1 border-b-2 border-transparent text-xs text-white">Client Services</p>
                    </li>
                </ul>
                <NavLink to="/" className="p-2 text-4xl tracking-widest font-semibold leading-8 text-white">
                    GUCCI
                </NavLink>
                <div className="flex items-center md:space-x-4">
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <p className="flex items-center px-2 -mb-1 border-b-2 border-transparent text-xs text-white cursor-pointer" onClick={() => setModalSignIn(true)}>Sign In</p>
                        </li>  
                        <li className="flex">
                            <NavLink to="/" className="flex items-center px-2 -mb-1 border-b-2 border-transparent text-white">
                                <HeartOutlined />
                            </NavLink>
                        </li>
                        <li className="flex">
                            <p className="flex items-center px-2 -mb-1 border-b-2 border-transparent text-xs text-white cursor-pointer" onClick={() => setModalBag(true)}>
                                <ShoppingOutlined style={{ marginRight: '6px' }} />
                                Bag
                            </p>
                        </li>
                    </ul>
                    <button type="button" className="hidden font-extrabold rounded-full lg:block bg-gray-600 text-coolGray-50 mb-3" >
                        <div className="flex flex-col items-center justify-center" onClick={() => setModal1Visible(true)}>
                            <div className="flex space-x-5">
                                <SearchOutlined className=' border rounded-full p-2 text-xl bg-gray-500' />
                            </div>
                        </div>
                    </button>
                </div>
                <button title="Open menu" type="button" className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-coolGray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <div className='gift'>
                            <NavLink to="/gift" className="flex items-center px-4 -mb-1 mt-5 border-b-2 border-transparent text-xs font-bold text-gray-400 gift cursor-pointer">
                                GIFTS
                            </NavLink>
                            <div className="p-6 bg-white w-full text-coolGray-800 absolute navgifts" style={{ top: 130, right: 0, zIndex: 10 }}>
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
                                                            <img src="https://dd6zx4ibq538k.cloudfront.net/static/images/4344/d19436ef18cf6fb0121df8829bb37c44_300_300.png" style={{ width: 80 }} className='mr-5 cursor-pointer' />
                                                            PREMIUM SHIPPING
                                                        </div>
                                                    </a>
                                                    <a href="#" className='text-gray-500 font-normal'>
                                                        <div className='flex'>
                                                            <img src="https://dd6zx4ibq538k.cloudfront.net/static/images/4344/07a98217c18029a1f00a86109f9ee88c_300_300.png" style={{ width: 80 }} className='mr-5 cursor-pointer' />
                                                            GUCCI ADVISOR
                                                        </div>
                                                    </a>
                                                    <a href="#" className='text-gray-500 font-normal'>
                                                        <div className='flex'>
                                                            <img src="https://dd6zx4ibq538k.cloudfront.net/static/images/4344/407fa65a93d7aec8019317699d2c8bc1_300_300.png" style={{ width: 80 }} className='mr-5 cursor-pointer' />
                                                            DIGITAL GIFTING
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='grid grid-rows-3'>
                                                    <a href="#" className='text-gray-500 font-normal'>
                                                        <div className='flex'>
                                                            <img src="https://dd6zx4ibq538k.cloudfront.net/static/images/4344/6c0743c7313160579a71798eb1cbfc39_300_300.png" style={{ width: 80 }} className='mr-5 cursor-pointer' />
                                                            YOUR PRIVATE APPOINTMENT
                                                        </div>
                                                    </a>
                                                    <a href="#" className='text-gray-500 font-normal'>
                                                        <div className='flex'>
                                                            <img src="https://dd6zx4ibq538k.cloudfront.net/static/images/4344/bbab27f797401d3a1177fd630efd1ed0_300_300.png" style={{ width: 80 }} className='mr-5 cursor-pointer' />
                                                            DIGITAL SHOWROOM EXPERIENCE
                                                        </div>
                                                    </a>
                                                    <a href="#" className='text-gray-500 font-normal'>
                                                        <div className='flex'>
                                                            <img src="https://dd6zx4ibq538k.cloudfront.net/static/images/4344/7907198099635124ba126e29b35717aa_300_300.png" style={{ width: 80 }} className='mr-5 cursor-pointer' />
                                                            DISCOVER GUCCI SERVICES
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="flex">
                        <div className='new'>
                            <NavLink to="/new" className="flex items-center px-4 -mb-1 mt-5 border-b-2 border-transparent text-xs font-bold text-gray-400 cursor-pointer">WHAT'S NEW</NavLink>
                            <div className="p-6 bg-white w-full text-coolGray-800 absolute navNew" style={{ top: 130, right: 0, zIndex: 10 }}>
                                <div class="container grid grid-cols-3 mx-auto gap-x-3 gap-y-8 sm:grid-cols-4 md:grid-cols-5">
                                    <div class="flex flex-col space-y-4">
                                        <h2 class="font-bold">LATEST ARRIVALS</h2>
                                        <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <a href="#" className='text-gray-500 font-medium'>Women</a>
                                            <a href="#" className="text-gray-500 font-medium ">Men</a>
                                            <a href="#" className="text-gray-500 font-medium ">The Year of the Tiger</a>
                                            <a href="#" className="text-gray-500 font-medium ">The North Face X Gucci</a>
                                            <a href="#" className="text-gray-500 font-medium ">Bamboo Handle Bags</a>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <div className='grid grid-rows-2'>
                                            <div>
                                                <h2 className="font-bold">BELOVED HANDBAGS</h2>
                                                <div className="flex flex-col space-y-2 text-sm text-coolGray-600">
                                                    <a href="#" className="text-gray-500 font-medium ">GG Marmont</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Dionysus</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Gucci Horsebit 1955</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Jackie 1961</a>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex flex-col space-y-2 text-sm text-coolGray-600">
                                                    <h2 className="font-bold mt-10">OUR COMMITMENT</h2>
                                                    <a href="#" className="text-gray-500 font-medium ">Gucci Off The Grid</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <h2 className="font-bold">PROJECTS BY THE HOUSE</h2>
                                        <div className="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <a href="#" className="text-gray-500 font-medium ">Gucci Garden</a>
                                            <a href="#" className="text-gray-500 font-medium ">Gucci Osteria da Massimo Bottura</a>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <h2 className="font-bold">VIEW ALL STORIES</h2>
                                        <div className="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <div className='grid grid-cols-3'>
                                                <div className='grid grid-rows-3 col-span-2'>
                                                    <a href="#" className='text-gray-500 font-normal mb-5'>
                                                        <div className='flex'>
                                                            <img src="https://media.gucci.com/content/DiaryPrimaryImg_Standard_288x216/1552403706/DiaryPrimaryImg_Zumi-minibook1_001_Default.jpg" style={{ width: 80 }} className='mr-5 cursor-pointer' />
                                                            RUNWAY
                                                        </div>
                                                    </a>
                                                    <a href="#" className='text-gray-500 font-normal'>
                                                        <div className='flex'>
                                                            <img src="https://media.gucci.com/content/DiaryPrimaryImg_Standard_288x216/1608023703/DiaryPrimaryImg_Foundation-digitalcampaign-01-new_001_Default.jpg" style={{ width: 80 }} className='mr-5 cursor-pointer' />
                                                            BEAUTY
                                                        </div>
                                                    </a>
                                                    <a href="#" className='text-gray-500 font-normal'>
                                                        <div className='flex'>
                                                            <img src="https://media.gucci.com/content/DiaryPrimaryImg_Standard_288x216/1550226604/DiaryPrimaryImg_Frieze-TECHNO-15feb_001_Default.jpg" style={{ width: 80 }} className='mr-5 cursor-pointer' />
                                                            VIDEO
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='grid grid-rows-3 col-span-1'>
                                                    <a href="#" className='text-gray-500 font-normal'>
                                                        <div className='flex'>
                                                            <img src="https://media.gucci.com/content/DiaryPrimaryImg_Standard_288x216/1631253603/DiaryPrimaryImg_Aria-Adv-Campaign-02_001_Default.jpg" style={{ width: 80 }} className='mr-5 cursor-pointer' />
                                                            ADVERTISING CAMPAIGN
                                                        </div>
                                                    </a>
                                                    <a href="#" className='text-gray-500 font-normal'>
                                                        <div className='flex'>
                                                            <img src="https://media.gucci.com/content/DiaryPrimaryImg_Standard_288x216/1560949205/DiaryPrimaryImg_GQ1-Clementines_001_Default.jpg" style={{ width: 150, height: 60 }} className='mr-5 cursor-pointer' />
                                                            PEOPLE AND EVENTS
                                                        </div>
                                                    </a>
                                                    <a href="#" className='text-gray-500 font-normal'>
                                                        <div className='flex'>
                                                            <img src="https://media.gucci.com/content/DiaryPrimaryImg_Standard_288x216/1562344204/DiaryPrimaryImg_HighJwl-Florence-01_001_Default.jpg" style={{ width: 80 }} className='mr-5 cursor-pointer' />
                                                            INSPIRATIONS AND CODES
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="flex">
                        <div className='handBag'>
                            <NavLink to="/handbag" className="flex items-center px-4 -mb-1 mt-5 border-b-2 border-transparent text-xs font-bold text-gray-400 cursor-pointer">HANDBAGS</NavLink>
                            <div className="p-6 bg-white w-full text-coolGray-800 absolute navHandBag" style={{ top: 130, right: 0, zIndex: 10 }}>
                                <div class="container grid grid-cols-1 mx-auto gap-x-3 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
                                    <div class="flex flex-col space-y-4 ml-20">
                                        <h2 class="font-bold">HANDBAGS</h2>
                                        <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <a href="#" className='text-gray-500 font-medium'>Gucci Beloved</a>
                                            <a href="#" className="text-gray-500 font-medium ">Shop By Line</a>
                                            <a href="#" className="text-gray-500 font-medium ">Gucci Diana</a>
                                            <a href="#" className="text-gray-500 font-medium ">The Jackie 1961</a>
                                            <a href="#" className="text-gray-500 font-medium ">Gucci Horsebit 1955</a>
                                            <a href="#" className="text-gray-500 font-medium ">Dionysus</a>
                                            <a href="#" className="text-gray-500 font-medium ">GG Marmont</a>
                                            <a href="#" className="text-gray-500 font-medium ">Top Handle Bags</a>
                                            <a href="#" className="text-gray-500 font-medium ">Tote Bags</a>
                                        </div>
                                    </div>
                                    <div class="flex flex-col space-y-4">
                                        <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <a href="#" className="text-gray-500 font-medium mt-12 ">Shoulder Bags</a>
                                            <a href="#" className="text-gray-500 font-medium ">Crossbody Bags</a>
                                            <a href="#" className="text-gray-500 font-medium ">Mini Bags</a>
                                            <a href="#" className="text-gray-500 font-medium ">Clutches</a>
                                            <a href="#" className="text-gray-500 font-medium ">Precious Handbags</a>
                                            <a href="#" className="text-gray-500 font-medium ">Casual Bags</a>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-4 mr-20 mt-12">
                                        <div className="flex flex-col space-y-2 text-sm text-coolGray-600 relative cursor-pointer" style={{ backgroundImage: 'url(https://media.gucci.com/content/DiaryPrimaryImg_Standard_288x216/1618993834/DiaryPrimaryImg_Beloved-14_001_Default.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: 200 }}>
                                            <p className='font-normal text-2xl text-white absolute' style={{ top: '40%', left: '30%' }}>Gucci Beloved</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="flex">
                        <div className='women'>
                            <NavLink to="/women" className="flex items-center px-4 -mb-1 mt-5 border-b-2 border-transparent text-xs font-bold text-gray-400 cursor-pointer">WOMEN</NavLink>
                            <div className="p-6 bg-white w-full text-coolGray-800 absolute navWomen" style={{ top: 130, right: 0, zIndex: 10 }}>
                                <div class="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
                                    <div class="flex flex-col space-y-4">
                                        <div className='grid grid-rows-2'>
                                            <div>
                                                <h2 class="font-bold">LATEST ARRIVALS</h2>
                                                <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                                    <a href="#" className='text-gray-500 font-medium mt-4'>Shop by Look</a>
                                                    <a href="#" className="text-gray-500 font-medium ">The Year of the Tiger</a>
                                                    <a href="#" className="text-gray-500 font-medium ">The North Face X Gucci</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Bamboo Handle Bags</a>
                                                </div>
                                            </div>
                                            <div>
                                                <h2 class="font-bold mt-6">GIFTS</h2>
                                                <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                                    <a href="#" className="text-gray-500 font-medium mt-4">Gifts for Women</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Personalized Gifts</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Gucci Services</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col space-y-4">
                                        <h2 class="font-bold">HANDBAGS</h2>
                                        <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <a href="#" className="text-gray-500 font-medium ">Gucci Beloved</a>
                                            <a href="#" className="text-gray-500 font-medium ">Crossbody Bags</a>
                                            <a href="#" className="text-gray-500 font-medium ">Mini Bags</a>
                                            <a href="#" className="text-gray-500 font-medium ">Tote Bags</a>
                                            <a href="#" className="text-gray-500 font-medium ">Shoulder Bags</a>
                                            <a href="#" className="text-gray-500 font-medium ">Top Handle Bags</a>
                                            <a href="#" className="text-gray-500 font-medium ">Clutches</a>
                                            <a href="#" className="text-gray-500 font-medium ">Precious Handbags</a>
                                            <a href="#" className="text-gray-500 font-medium ">Backpacks & Belt Bags</a>
                                            <a href="#" className="text-gray-500 font-medium ">Travel Bags</a>
                                        </div>
                                    </div>
                                    <div class="flex flex-col space-y-4">
                                        <h2 class="font-bold">READY-TO-WEAR</h2>
                                        <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <a href="#" className="text-gray-500 font-medium ">Shop by Lock</a>
                                            <a href="#" className="text-gray-500 font-medium ">Outerwear</a>
                                            <a href="#" className="text-gray-500 font-medium ">Sweater & Cardigans</a>
                                            <a href="#" className="text-gray-500 font-medium ">Activewear</a>
                                            <a href="#" className="text-gray-500 font-medium ">Sweatshirts</a>
                                            <a href="#" className="text-gray-500 font-medium ">T-shirts</a>
                                            <a href="#" className="text-gray-500 font-medium ">Tops & Shirts</a>
                                            <a href="#" className="text-gray-500 font-medium ">Dresses</a>
                                            <a href="#" className="text-gray-500 font-medium ">Blazers</a>
                                            <a href="#" className="text-gray-500 font-medium ">Pants & Shorts</a>
                                            <a href="#" className="text-gray-500 font-medium ">Denim</a>
                                            <a href="#" className="text-gray-500 font-medium ">Skirts</a>
                                            <a href="#" className="text-gray-500 font-medium ">Lingerie</a>
                                            <a href="#" className="text-gray-500 font-medium ">Swimwear</a>
                                        </div>
                                    </div>
                                    <div class="flex flex-col space-y-4">
                                        <h2 class="font-bold">SHOES</h2>
                                        <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <a href="#" className="text-gray-500 font-medium ">Boots</a>
                                            <a href="#" className="text-gray-500 font-medium ">Sneakers</a>
                                            <a href="#" className="text-gray-500 font-medium ">Sandals</a>
                                            <a href="#" className="text-gray-500 font-medium ">Pumps</a>
                                            <a href="#" className="text-gray-500 font-medium ">Moccasins & Loafers</a>
                                            <a href="#" className="text-gray-500 font-medium ">Slippers & Mules</a>
                                            <a href="#" className="text-gray-500 font-medium ">Ballet Flats</a>
                                            <a href="#" className="text-gray-500 font-medium ">Slides & Thong Sandals</a>
                                            <a href="#" className="text-gray-500 font-medium ">Espadrilles & Wedges</a>
                                        </div>
                                    </div>
                                    <div class="flex flex-col space-y-4">
                                        <h2 class="font-bold">ACCESSORIES</h2>
                                        <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <a href="#" className="text-gray-500 font-medium ">Wallets & Small Accessories</a>
                                            <a href="#" className="text-gray-500 font-medium ">Chain Wallets</a>
                                            <a href="#" className="text-gray-500 font-medium ">Tech Accessories</a>
                                            <a href="#" className="text-gray-500 font-medium ">Belts</a>
                                            <a href="#" className="text-gray-500 font-medium ">Eyewear</a>
                                            <a href="#" className="text-gray-500 font-medium ">Scarves & Silks</a>
                                            <a href="#" className="text-gray-500 font-medium ">Tights & Socks</a>
                                            <a href="#" className="text-gray-500 font-medium ">Hats & Gloves</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="flex">
                        <div className='men'>
                            <NavLink to="/men" className="flex items-center px-4 -mb-1 mt-5 border-b-2 border-transparent text-xs font-bold text-gray-400 cursor-pointer">MEN</NavLink>
                            <div className="p-6 bg-white w-full text-coolGray-800 absolute navMen" style={{ top: 130, right: 0, zIndex: 10 }}>
                                <div class="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
                                    <div class="flex flex-col space-y-4">
                                        <div className='grid grid-rows-2'>
                                            <div>
                                                <h2 class="font-bold">LATEST ARRIVALS</h2>
                                                <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                                    <a href="#" className='text-gray-500 font-medium mt-4'>Shop by Look</a>
                                                    <a href="#" className="text-gray-500 font-medium ">The Year of the Tiger</a>
                                                    <a href="#" className="text-gray-500 font-medium ">The North Face X Gucci</a>
                                                </div>
                                            </div>
                                            <div>
                                                <h2 class="font-bold mt-6">GIFTS</h2>
                                                <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                                    <a href="#" className="text-gray-500 font-medium mt-4">Gifts for Men</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Personalized Gifts</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Gucci Services</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col space-y-4">
                                        <h2 class="font-bold">BAGS</h2>
                                        <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <a href="#" className="text-gray-500 font-medium ">Backpacks</a>
                                            <a href="#" className="text-gray-500 font-medium ">Messenger Bags</a>
                                            <a href="#" className="text-gray-500 font-medium ">Tote Bags</a>
                                            <a href="#" className="text-gray-500 font-medium ">Belt Bags</a>
                                            <a href="#" className="text-gray-500 font-medium ">Business Bags</a>
                                            <a href="#" className="text-gray-500 font-medium ">Duffle Bags</a>
                                            <a href="#" className="text-gray-500 font-medium ">Travel Bags</a>
                                            <a href="#" className="text-gray-500 font-medium ">Portfolios</a>
                                        </div>
                                    </div>
                                    <div class="flex flex-col space-y-4">
                                        <h2 class="font-bold">READY-TO-WEAR</h2>
                                        <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <a href="#" className="text-gray-500 font-medium ">Shop by Lock</a>
                                            <a href="#" className="text-gray-500 font-medium ">Outerwear</a>
                                            <a href="#" className="text-gray-500 font-medium ">Sweater & Cardigans</a>
                                            <a href="#" className="text-gray-500 font-medium ">Sweatshirts & Hoodies</a>
                                            <a href="#" className="text-gray-500 font-medium ">T-Shirts & Polo Shirts</a>
                                            <a href="#" className="text-gray-500 font-medium ">Activewear</a>
                                            <a href="#" className="text-gray-500 font-medium ">Denim</a>
                                            <a href="#" className="text-gray-500 font-medium ">Shorts & Pants</a>
                                            <a href="#" className="text-gray-500 font-medium ">Suits & Blazers</a>
                                            <a href="#" className="text-gray-500 font-medium ">Shirts</a>
                                            <a href="#" className="text-gray-500 font-medium ">Gucci Essentials</a>
                                        </div>
                                    </div>
                                    <div class="flex flex-col space-y-4">
                                        <h2 class="font-bold">SHOES</h2>
                                        <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <a href="#" className="text-gray-500 font-medium ">Sneakers</a>
                                            <a href="#" className="text-gray-500 font-medium ">Boots</a>
                                            <a href="#" className="text-gray-500 font-medium ">Moccasins & Loafers</a>
                                            <a href="#" className="text-gray-500 font-medium ">Driving Shoes</a>
                                            <a href="#" className="text-gray-500 font-medium ">Slippers</a>
                                            <a href="#" className="text-gray-500 font-medium ">Slides & Sandals</a>
                                            <a href="#" className="text-gray-500 font-medium ">Lace Up Shoes</a>
                                            <a href="#" className="text-gray-500 font-medium ">Espadrilles</a>
                                        </div>
                                    </div>
                                    <div class="flex flex-col space-y-4">
                                        <h2 class="font-bold">ACCESSORIES</h2>
                                        <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <a href="#" className="text-gray-500 font-medium ">Wallets & Small Accessories</a>
                                            <a href="#" className="text-gray-500 font-medium ">Tech Accessories</a>
                                            <a href="#" className="text-gray-500 font-medium ">Belts</a>
                                            <a href="#" className="text-gray-500 font-medium ">Eyewear</a>
                                            <a href="#" className="text-gray-500 font-medium ">Scarves</a>
                                            <a href="#" className="text-gray-500 font-medium ">Hats & Gloves</a>
                                            <a href="#" className="text-gray-500 font-medium ">Ties</a>
                                            <a href="#" className="text-gray-500 font-medium ">Socks</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="flex">
                        <div className='MX'>
                            <NavLink to="/mx" className="flex items-center px-4 -mb-1 mt-5 border-b-2 border-transparent text-xs font-bold text-gray-400 cursor-pointer">MX</NavLink>
                            <div className="p-6 bg-white w-full text-coolGray-800 absolute navMX" style={{ top: 130, right: 0, zIndex: 10 }}>
                                <div class="container grid mx-auto gap-x-3 gap-y-8 sm:grid-cols-1 md:grid-cols-2">
                                    <div class="flex flex-col space-y-4 ml-20">
                                        <h2 class="font-bold">THE MX PROJECT</h2>
                                        <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <a href="#" className='text-gray-500 font-medium'>Shop by Lock</a>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-4 mr-20">
                                        <h2 class="font-bold">DISCOVER MORE</h2>
                                        <div className="flex flex-col space-y-2 text-sm text-coolGray-600 relative cursor-pointer" style={{ backgroundImage: 'url(https://media.gucci.com/content/DiaryPrimaryImg_Standard_288x216/1610978403/DiaryPrimaryImg_tnf-article-campaign_001_Default.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: 150, width: 300 }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="flex">
                        <div className='children'>
                            <NavLink to="/kid" className="flex items-center px-4 -mb-1 mt-5 border-b-2 border-transparent text-xs font-bold text-gray-400 cursor-pointer">CHILDREN</NavLink>
                            <div className="p-6 bg-white w-full text-coolGray-800 absolute navChildren" style={{ top: 130, right: 0, zIndex: 10 }}>
                                <div class="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
                                    <div class="flex flex-col space-y-4">
                                        <h2 class="font-bold">BABY (0-36 MONTHS)</h2>
                                        <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <a href="#" className="text-gray-500 font-medium ">Newborn (0-12 months)</a>
                                            <a href="#" className="text-gray-500 font-medium ">Girls (0-36 months)</a>
                                            <a href="#" className="text-gray-500 font-medium ">Boys (0-36 months)</a>
                                            <a href="#" className="text-gray-500 font-medium ">Baby Shoes (16-19)</a>
                                            <a href="#" className="text-gray-500 font-medium ">Toddler Shoes (20-26)</a>
                                            <a href="#" className="text-gray-500 font-medium ">Diaper Bags</a>
                                            <a href="#" className="text-gray-500 font-medium ">Accessories</a>
                                            <a href="#" className="text-gray-500 font-medium ">Mini Me</a>
                                            <a href="#" className="text-gray-500 font-medium ">Special Occasion</a>
                                        </div>
                                    </div>
                                    <div class="flex flex-col space-y-4">
                                        <h2 class="font-bold">GIRLS (4-12 YEARS)</h2>
                                        <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <a href="#" className="text-gray-500 font-medium ">Yuko Higuchi</a>
                                            <a href="#" className="text-gray-500 font-medium ">Clothing (4-12 years)</a>
                                            <a href="#" className="text-gray-500 font-medium ">Shoes (27-33)</a>
                                            <a href="#" className="text-gray-500 font-medium ">Bags & Backpacks</a>
                                            <a href="#" className="text-gray-500 font-medium ">Belts</a>
                                            <a href="#" className="text-gray-500 font-medium ">Soft Accessories</a>
                                            <a href="#" className="text-gray-500 font-medium ">Mini Me</a>
                                            <a href="#" className="text-gray-500 font-medium ">Special Occasion</a>
                                        </div>
                                    </div>
                                    <div class="flex flex-col space-y-4">
                                        <h2 class="font-bold">BOYS (4-12 YEARS)</h2>
                                        <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <a href="#" className="text-gray-500 font-medium ">Clothing (4-12 years)</a>
                                            <a href="#" className="text-gray-500 font-medium ">Shoes (27-33)</a>
                                            <a href="#" className="text-gray-500 font-medium ">Bags & Backpacks</a>
                                            <a href="#" className="text-gray-500 font-medium ">Belts</a>
                                            <a href="#" className="text-gray-500 font-medium ">Soft Accessories</a>
                                            <a href="#" className="text-gray-500 font-medium ">Mini Me</a>
                                            <a href="#" className="text-gray-500 font-medium ">Special Occasion</a>
                                        </div>
                                    </div>
                                    <div class="flex flex-col space-y-4">
                                        <h2 class="font-bold">COLLECTIONS</h2>
                                        <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <a href="#" className="text-gray-500 font-medium ">Baby Looks</a>
                                            <a href="#" className="text-gray-500 font-medium ">Girls Looks</a>
                                            <a href="#" className="text-gray-500 font-medium ">Boys Looks</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="flex">
                        <div className='jewelry'>
                            <NavLink to="/jewelry" className="flex items-center px-4 -mb-1 mt-5 border-b-2 border-transparent text-xs font-bold text-gray-400 cursor-pointer">JEWELRY & WATCH</NavLink>
                            <div className="p-6 bg-white w-full text-coolGray-800 absolute navJewelry" style={{ top: 130, right: 0, zIndex: 10 }}>
                                <div class="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-4 md:grid-cols-6">
                                    <div class="flex flex-col space-y-4">
                                        <h2 class="font-bold">FINE JEWELRYS</h2>
                                        <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <a href="#" className='text-gray-500 font-medium'>Interlocking G Fine Necklaces</a>
                                            <a href="#" className="text-gray-500 font-medium ">Gucci Link to Love</a>
                                            <a href="#" className="text-gray-500 font-medium ">For Women</a>
                                            <a href="#" className="text-gray-500 font-medium ">For Men</a>
                                            <a href="#" className="text-gray-500 font-medium ">Rings</a>
                                            <a href="#" className="text-gray-500 font-medium ">Necklaces</a>
                                            <a href="#" className="text-gray-500 font-medium ">Bracelets</a>
                                            <a href="#" className="text-gray-500 font-medium ">Earrings</a>
                                        </div>
                                    </div>
                                    <div class="flex flex-col space-y-4">
                                        <h2 class="font-bold">SILVER JEWELRY</h2>
                                        <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <a href="#" className="text-gray-500 font-medium ">For Women</a>
                                            <a href="#" className="text-gray-500 font-medium ">For Men</a>
                                            <a href="#" className="text-gray-500 font-medium ">Rings</a>
                                            <a href="#" className="text-gray-500 font-medium ">Necklaces</a>
                                            <a href="#" className="text-gray-500 font-medium ">Bracelets</a>
                                            <a href="#" className="text-gray-500 font-medium ">Earrings</a>
                                            <a href="#" className="text-gray-500 font-medium ">Cufflinks & Tie Bars</a>
                                        </div>
                                    </div>
                                    <div class="flex flex-col space-y-4">
                                        <h2 class="font-bold">FASHION JEWELRY</h2>
                                        <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <a href="#" className="text-gray-500 font-medium ">For Women</a>
                                            <a href="#" className="text-gray-500 font-medium ">For Men</a>
                                            <a href="#" className="text-gray-500 font-medium ">Rings</a>
                                            <a href="#" className="text-gray-500 font-medium ">Necklaces</a>
                                            <a href="#" className="text-gray-500 font-medium ">Bracelets</a>
                                            <a href="#" className="text-gray-500 font-medium ">Earrings</a>
                                            <a href="#" className="text-gray-500 font-medium ">Hair Accessories</a>
                                            <a href="#" className="text-gray-500 font-medium ">Brooches & Pins</a>
                                            <a href="#" className="text-gray-500 font-medium ">Cufflinks</a>
                                        </div>
                                    </div>
                                    <div class="flex flex-col space-y-4">
                                        <h2 class="font-bold">WATHCES</h2>
                                        <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <a href="#" className="text-gray-500 font-medium ">For Women</a>
                                            <a href="#" className="text-gray-500 font-medium ">For Men</a>
                                            <a href="#" className="text-gray-500 font-medium ">Gucci 25H Timepieces</a>
                                            <a href="#" className="text-gray-500 font-medium ">Grip Wathces</a>
                                            <a href="#" className="text-gray-500 font-medium ">Grip Straps</a>
                                        </div>
                                    </div>
                                    <div class="flex flex-col space-y-4">
                                        <h2 class="font-bold">DISCOVER MORE</h2>
                                        <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <a href="#" className="text-gray-500 font-medium ">Gucci High Jewelry</a>
                                            <a href="#" className="text-gray-500 font-medium ">Gucci High Watchmaking</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="flex">
                        <div className='beauty'>
                            <NavLink to="/beauty" className="flex items-center px-4 -mb-1 mt-5 border-b-2 border-transparent text-xs font-bold text-gray-400 cursor-pointer">BEAUTY</NavLink>
                            <div className="p-6 bg-white w-full text-coolGray-800 absolute navBeauty" style={{ top: 130, right: 0, zIndex: 10 }}>
                                <div class="container grid grid-cols-3 mx-auto gap-x-3 gap-y-8 sm:grid-cols-4 md:grid-cols-6">
                                    <div className="flex flex-col space-y-4">
                                        <div className='grid grid-rows-2'>
                                            <div>
                                                <h2 className="font-bold">LATEST ARRIVALS</h2>
                                                <div className="flex flex-col space-y-2 text-sm text-coolGray-600">
                                                    <a href="#" className="text-gray-500 font-medium ">Limited Edition Lipsticks</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Mattifying Primer</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Gucci Guilty</a>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex flex-col space-y-2 text-sm text-coolGray-600">
                                                    <h2 className="font-bold mt-10">GIFTS</h2>
                                                    <a href="#" className="text-gray-500 font-medium ">Gift Ideas</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Beauty Gift Sets</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Beauty Gift Guide</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <div className='grid grid-rows-2'>
                                            <div>
                                                <h2 className="font-bold">LIPS</h2>
                                                <div className="flex flex-col space-y-2 text-sm text-coolGray-600">
                                                    <a href="#" className="text-gray-500 font-medium ">Glow & Care Lipsticks</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Sheer Lipsticks</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Matte Lipsticks</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Satin Lipsticks</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Lip Balms</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Lip Liner Pencils</a>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex flex-col space-y-2 text-sm text-coolGray-600">
                                                    <h2 className="font-bold mt-10">EYES</h2>
                                                    <a href="#" className="text-gray-500 font-medium ">Mascara</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Eyeliner</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Eyebrow Pencils</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Waterproof Brow Pens</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <div className='grid grid-rows-2'>
                                            <div>
                                                <h2 className="font-bold">FACE</h2>
                                                <div className="flex flex-col space-y-2 text-sm text-coolGray-600">
                                                    <a href="#" className="text-gray-500 font-medium ">Foundation</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Primer</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Face Gloss</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Powders</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Find your Foundation Match</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Find out Your Face Routine</a>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex flex-col space-y-2 text-sm text-coolGray-600">
                                                    <h2 className="font-bold mt-10">NAILS</h2>
                                                    <a href="#" className="text-gray-500 font-medium ">Nail Polish</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <div className='grid grid-rows-2'>
                                            <div>
                                                <h2 className="font-bold">FRAGRANCES</h2>
                                                <div className="flex flex-col space-y-2 text-sm text-coolGray-600">
                                                    <a href="#" className="text-gray-500 font-medium ">Women's Fragrances</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Men's Fragrances</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Gucci Flora</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Gucci Bloom</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Gucci Guilty</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Gucci Mémoire d'Une Odeur</a>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex flex-col space-y-2 text-sm text-coolGray-600">
                                                    <h2 className="font-bold mt-10">LUXURY COLLECTION</h2>
                                                    <a href="#" className="text-gray-500 font-medium ">The Alchemist's Garden</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Eau de Parfum</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Acqua Profumata</a>
                                                    <a href="#" className="text-gray-500 font-medium ">Perfumed Oils</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <h2 className="font-bold">INSIDE GUCCI BEAUTY</h2>
                                        <div className="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <div className='grid grid-cols-3'>
                                                <div className='grid grid-rows-3 col-span-2 mr-40'>
                                                    <a href="#" className='text-gray-500 font-normal mb-5'>
                                                        <div className='flex'>
                                                            <img src="https://media.gucci.com/content/DiaryPrimaryImg_Standard_288x216/1552403706/DiaryPrimaryImg_Zumi-minibook1_001_Default.jpg" style={{ width: 80 }} className='mr-5 cursor-pointer' />
                                                            DISCOVER THE FACE <br/> CHARTS
                                                        </div>
                                                    </a>
                                                    <a href="#" className='text-gray-500 font-normal'>
                                                        <div className='flex'>
                                                            <img src="https://media.gucci.com/content/DiaryPrimaryImg_Standard_288x216/1583248505/DiaryPrimaryImg_Horses-Teaser-NEW_001_Default.jpg" style={{ width: 80 }} className='mr-5 cursor-pointer' />
                                                            FIND YOUR <br/> FOUNDATION <br/> MATCH
                                                        </div>
                                                    </a>
                                                    <a href="#" className='text-gray-500 font-normal'>
                                                        <div className='flex'>
                                                            <img src="https://media.gucci.com/content/DiaryPrimaryImg_Standard_288x216/1498645809/DiaryPrimaryImg_S73-In-Bloom_001_Default.jpg" style={{ width: 80 }} className='mr-5 cursor-pointer' />
                                                            FIND OUT YOUR <br/> FACE ROUTINE
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <div className="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <div className='grid grid-cols-3 mt-12'>
                                                <div className='grid grid-rows-2'>
                                                    <a href="#" className='text-gray-500 font-normal'>
                                                        <div className='flex'>
                                                            <img src="https://media.gucci.com/content/DiaryPrimaryImg_Standard_288x216/1608023703/DiaryPrimaryImg_Foundation-digitalcampaign-01-new_001_Default.jpg" style={{ width: 80, cursor:'pointer' }} className='mr-5' />
                                                            GUCCI BEAUTY <br/> TUTORIALS
                                                        </div>
                                                    </a>
                                                    <a href="#" className='text-gray-500 font-normal'>
                                                        <div className='flex'>
                                                            <img src="https://media.gucci.com/content/DiaryPrimaryImg_Standard_288x216/1474298108/DiaryPrimaryImg_issue05-s71-cruise-adv-campaign_001_Default.jpg" style={{ width: 300, height: 60, cursor:'pointer' }} className='mr-5' />
                                                            READ MORE GUCCI BEAUTY STORIES
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="flex">
                        <div className='decor'>
                            <NavLink to="/decor" className="flex items-center px-4 -mb-1 mt-5 border-b-2 border-transparent text-xs font-bold text-gray-400 cursor-pointer">DÉCOR & LIFESTYLE</NavLink>
                            <div className="p-6 bg-white w-full text-coolGray-800 absolute navDecor" style={{ top: 130, right: 0, zIndex: 10 }}>
                                <div class="container grid grid-cols-1 mx-auto gap-x-3 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
                                    <div class="flex flex-col space-y-4 ml-20">
                                        <h2 class="font-bold">DÉCOR</h2>
                                        <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <a href="#" className='text-gray-500 font-medium'>Tableware</a>
                                            <a href="#" className="text-gray-500 font-medium ">Home Accessories</a>
                                            <a href="#" className="text-gray-500 font-medium ">Textiles</a>
                                            <a href="#" className="text-gray-500 font-medium ">Wallpaper</a>
                                            <a href="#" className="text-gray-500 font-medium ">Furniture</a>
                                        </div>
                                    </div>
                                    <div class="flex flex-col space-y-4">
                                        <h2 class="font-bold">LIFESTYLE</h2>
                                        <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <a href="#" className="text-gray-500 font-medium ">Stationery</a>
                                            <a href="#" className="text-gray-500 font-medium ">Games</a>
                                            <a href="#" className="text-gray-500 font-medium ">Travel Sets & Loungewear</a>
                                            <a href="#" className="text-gray-500 font-medium ">Sporting Goods</a>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-4 mr-20">
                                        <h2 className="font-bold">READ MORE IN STORIES</h2>
                                        <div className="flex flex-col space-y-2 text-sm text-coolGray-600 relative cursor-pointer" style={{ backgroundImage: 'url(https://media.gucci.com/content/DiaryArticleSingle_Standard_768x1075/1623250805/DiaryArticleSingle_Decor-04_001_Default.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: 150 }}>
                                            <p className='font-normal text-2xl text-white absolute' style={{ top: '40%', left: '15%' }}>New Romantics: Décor</p>
                                        </div>
                                        <hr className='bg-indigo-500 py-0.5' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="flex">
                        <div className='vault'>
                            <NavLink to="/vault" style={{ color: '#A1C751' }} className="flex items-center px-4 -mb-1 mt-5 border-b-2 border-transparent text-xs font-bold cursor-pointer">VAULT</NavLink>
                            <div className="p-6 bg-white w-full text-coolGray-800 absolute navVault" style={{ top: 130, right: 0, zIndex: 10 }}>
                            <div class="container grid mx-auto gap-x-3 gap-y-8 sm:grid-cols-1 md:grid-cols-2">
                                    <div class="flex flex-col space-y-4 ml-20">
                                        <h2 class="font-bold">THE NEW ONLINE CONCEPT STORE</h2>
                                        <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                            <a href="#" className='text-gray-500 font-medium'>Vintage on Vault</a>
                                            <a href="#" className='text-gray-500 font-medium'>Emerging Talentst</a>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-4 mr-20 mt-12">
                                        <div className="flex flex-col space-y-2 text-sm text-coolGray-600 relative cursor-pointer" style={{ backgroundImage: 'url(https://media.gucci.com/content/DiaryPrimaryImg_Standard_288x216/1562318105/DiaryPrimaryImg_Montauk-motif_001_Default.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: 150, width:350 }}>
                                            <p className='font-bold text-2xl absolute' style={{ top: '40%', left: '45%' }}>VAULT</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>


            <Modal
                title
                centered
                visible={state.modalVisible}
                onOk={() => setModal2Visible(false)}
                onCancel={() => setModal2Visible(false)}
                width={700}
                className='relative'
            >
                <div className='text-center'>
                    <h1 className='text-4xl text-gray-600 font-light mb-3 tracking-widest'>Client Services</h1>
                    <p className='text-sm mb-8'>GUCCI United States</p>
                    <hr />
                    <AntDesignOutlined className='absolute' style={{ left: 340, top: 155 }} />
                </div>
                <div>
                    <h3 className='font-light text-2xl mb-6 text-gray-500 mt-8'>Inquiries about Gucci website or online purchases</h3>
                    <p className='mb-0 tracking-widest text-xs'>PHONE</p>
                    <div className='text-sm flex justify-between'>
                        <p>Our Client Advisors are available Monday through Saturday, 9:00AM - <br /> 10:00PM (EST) and Sunday, 10:00AM - 9:00PM (EST), excluding <br /> holidays.</p>
                        <p>CALL US AT +1.877.482.2430</p>
                    </div>
                </div>
                <hr />
                <div className='mt-5 text-sm'>
                    <p className='mb-0'>LIVE CHAT</p>
                    <div className='flex justify-between'>
                        <p>Our Client Advisors are available to chat Monday through Saturday <br /> 9:00AM – 10:00 PM and Sunday, 10:00AM - 9:00PM (EST), excluding <br /> holidays. The option to chat will become active during these hours once <br /> an advisor is available.</p>
                        <button className='bg-gray-300 text-gray-400 block px-8 mb-5'>
                            CHAT UNVAILABLE
                        </button>
                    </div>
                </div>
                <hr />
                <div className='mt-5 text-sm'>
                    <p className='mb-0'>EMAIL</p>
                    <div className='flex justify-between'>
                        <p>To reach our online Client Advisors by email, click "email us" to provide <br /> details and your contact information.</p>
                        <button className='border-black border-solid border-2 px-14 py-2 mb-5 hover:border-gray-500 hover:text-gray-500'>EMAIL US</button>
                    </div>
                </div>
            </Modal>

            <BackTop>
                <div style={style}>
                    <UpOutlined style={{ fontSize: '25px' }} />
                </div>
            </BackTop>

            <Modal
                title
                style={{ right: -250, top: 60 }}
                visible={state.modal1Visible}
                onOk={() => setModal1Visible(false)}
                onCancel={() => setModal1Visible(false)}
                width={700}
            >
                <div>
                    <Search placeholder="What are you looking for?" onSearch={onSearch} enterButton />
                </div>
                <div class="p-6 bg-coolGray-100 text-coolGray-800">
                    <div class="container grid mx-auto gap-x-3 gap-y-8 sm:grid-cols-1 md:grid-cols-2">
                        <div class="flex flex-col space-y-4">
                            <h2 class="font-medium mb-0 text-xs">TRENDING SEARCHES</h2>
                            <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                <a href="#" className='text-gray-500 text-base'>
                                    <SearchOutlined className='mr-2' />
                                    Handbags
                                </a>
                                <a href="#" className='text-gray-500 text-base'>
                                    <SearchOutlined className='mr-2' />
                                    Shoes
                                </a>
                                <a href="#" className='text-gray-500 text-base'>
                                    <SearchOutlined className='mr-2' />
                                    Belts
                                </a>
                                <a href="#" className='text-gray-500 text-base'>
                                    <SearchOutlined className='mr-2' />
                                    Bags
                                </a>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-4">
                            <h2 class="font-medium mb-0 text-xs">WHAT'S NEW</h2>
                            <div class="flex flex-col space-y-2 text-sm text-coolGray-600">
                                <a href="#" className='text-gray-500 text-base'>Women</a>
                                <a href="#" className='text-gray-500 text-base'>Men</a>
                                <a href="#" className='text-gray-500 text-base'>Gucci Beloved</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                title
                style={{ top: 50, left: -420 }}
                visible={state.modalInfo}
                onOk={() => setModalInfo(false)}
                onCancel={() => setModalInfo(false)}
            >
                <div className='relative'>
                    <h1 className='font-bold mb-5'>ONLINE SHOPPING AVAILABLE</h1>
                    <p className='text-gray-800 font-normal'>Be advised that changing your location while shopping will remove all the contents from your shopping bag.</p>
                    <div className='flex justify-between font-normal'>
                        <p>Ship to: United States</p>
                        <p>|</p>
                        <div className='flex justify-between items-center'>
                            <p className='mr-10'>Change Country/Region</p>
                            <RightOutlined className='text-xs absolute mb-2' style={{ right: 10, cursor: 'pointer' }} />
                        </div>
                    </div>
                    <h1 className='my-5 font-bold'>STORE LOCATOR</h1>
                    <Search placeholder="City, Region, Country" onSearch={onSearch} enterButton />
                    <div className='flex items-center text-gray-500'>
                        <i className="fas fa-location-arrow text-lg "></i>
                        <p className='mt-5 ml-3 font-medium cursor-pointer'>Use My Current Location</p>
                    </div>
                </div>
            </Modal>

            <Modal
                title
                style={{ top: 80, right: -350 }}
                visible={state.modalSignIn}
                onOk={() => setModalSignIn(false)}
                onCancel={() => setModalSignIn(false)}
            >
                <div className='relative text-center'>
                    <div className='bg-rose-800'>
                        <h1 className='text-white pt-8 text-xl'>View your recent orders, track <br /> shipping and manage returns</h1>
                        <button className='bg-white text-gray-600 py-3 px-10 mb-5 mt-6'>CREATE MY GUCCI ACCOUNT</button>
                    </div>
                    <div>
                        <button className='text-white bg-black py-3 px-28 mt-5'>SIGN IN</button>
                    </div>
                </div>
            </Modal>

            <Modal
                title
                style={{ top: 80, right: -350 }}
                visible={state.modalBag}
                onOk={() => setModalBag(false)}
                onCancel={() => setModalBag(false)}
            >
                <div className='relative text-center'>
                    <div>
                        <h1 className='mb-5 text-xl text-gray-500'>Shopping Bag</h1>
                        <p className='text-gray-400 mb-5'>Currently empty</p>
                    </div>
                    <div className='bg-rose-800'>
                        <h1 className='text-white pt-8 text-xl'>View your recent orders, track <br /> shipping and manage returns</h1>
                        <button className='bg-white text-gray-600 py-3 px-10 mb-5 mt-6'>CREATE MY GUCCI ACCOUNT</button>
                    </div>
                    <div>
                        <button className='text-white bg-black py-3 px-28 mt-5'>SIGN IN</button>
                    </div>
                </div>
            </Modal>




        </header>
    )
}
