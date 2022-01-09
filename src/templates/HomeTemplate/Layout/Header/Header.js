import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HeartOutlined, RightOutlined, SearchOutlined, ShoppingOutlined, UpOutlined } from '@ant-design/icons';
import { Modal, BackTop, Input, Space } from 'antd';
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
        <header style={{ zIndex: 10 }} className="pt-4 hover:bg-gray-900 hover:opacity-100 bg-black opacity-50 w-full text-coolGray-800 absolute">
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
                            <p className="flex items-center px-4 -mb-1 mt-5 border-b-2 border-transparent text-xs font-bold text-gray-400 gift cursor-pointer">
                                GIFTS
                            </p>
                            <div className="p-6 bg-white text-coolGray-800 absolute navgifts" style={{ top: 130, right: 15, zIndex: 10 }}>
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
                        </div>
                    </li>
                    <li className="flex">
                        <div className='new'>
                            <p className="flex items-center px-4 -mb-1 mt-5 border-b-2 border-transparent text-xs font-bold text-gray-400">WHAT'S NEW</p>
                            <div className="p-6 bg-white text-coolGray-800 absolute navNew" style={{ top: 130, right: 15, zIndex: 10 }}>
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
                        </div>
                    </li>
                    <li className="flex">
                        <div className='handBag'>
                            <p className="flex items-center px-4 -mb-1 mt-5 border-b-2 border-transparent text-xs font-bold text-gray-400 cursor-pointer">HANDBAGS</p>
                            <div className="p-6 bg-white text-coolGray-800 absolute navHandBag" style={{ top: 130, right: 15, zIndex: 10 }}>
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
                        </div>
                    </li>
                    <li className="flex">
                        <div className='women'>
                            <p className="flex items-center px-4 -mb-1 mt-5 border-b-2 border-transparent text-xs font-bold text-gray-400 cursor-pointer">WOMEN</p>
                            <div className="p-6 bg-white text-coolGray-800 absolute navWomen" style={{ top: 130, right: 15, zIndex: 10 }}>
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
                        </div>
                    </li>
                    <li className="flex">
                        <div className='men'>
                            <p className="flex items-center px-4 -mb-1 mt-5 border-b-2 border-transparent text-xs font-bold text-gray-400 cursor-pointer">MEN</p>
                            <div className="p-6 bg-white text-coolGray-800 absolute navMen" style={{ top: 130, right: 15, zIndex: 10 }}>
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
                        </div>
                    </li>
                    <li className="flex">
                        <div className='MX'>
                            <p className="flex items-center px-4 -mb-1 mt-5 border-b-2 border-transparent text-xs font-bold text-gray-400 cursor-pointer">MX</p>
                            <div className="p-6 bg-white text-coolGray-800 absolute navMX" style={{ top: 130, right: 15, zIndex: 10 }}>
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
                        </div>
                    </li>
                    <li className="flex">
                        <div className='children'>
                            <p className="flex items-center px-4 -mb-1 mt-5 border-b-2 border-transparent text-xs font-bold text-gray-400 cursor-pointer">CHILDREN</p>
                            <div className="p-6 bg-white text-coolGray-800 absolute navChildren" style={{ top: 130, right: 15, zIndex: 10 }}>
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
                        </div>
                    </li>
                    <li className="flex">
                        <div className='jewelry'>
                            <p className="flex items-center px-4 -mb-1 mt-5 border-b-2 border-transparent text-xs font-bold text-gray-400 cursor-pointer">JEWELRY & WATCH</p>
                            <div className="p-6 bg-white text-coolGray-800 absolute navJewelry" style={{ top: 130, right: 15, zIndex: 10 }}>
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
                        </div>
                    </li>
                    <li className="flex">
                        <div className='beauty'>
                            <p className="flex items-center px-4 -mb-1 mt-5 border-b-2 border-transparent text-xs font-bold text-gray-400 cursor-pointer">BEAUTY</p>
                            <div className="p-6 bg-white text-coolGray-800 absolute navBeauty" style={{ top: 130, right: 15, zIndex: 10 }}>
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
                        </div>
                    </li>
                    <li className="flex">
                        <div className='decor'>
                            <p className="flex items-center px-4 -mb-1 mt-5 border-b-2 border-transparent text-xs font-bold text-gray-400 cursor-pointer">DÉCOR & LIFESTYLE</p>
                            <div className="p-6 bg-white text-coolGray-800 absolute navDecor" style={{ top: 130, right: 15, zIndex: 10 }}>
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
                        </div>
                    </li>
                    <li className="flex">
                        <div className='vault'>
                            <p style={{ color: '#A1C751' }} className="flex items-center px-4 -mb-1 mt-5 border-b-2 border-transparent text-xs font-bold cursor-pointer">VAULT</p>
                            <div className="p-6 bg-white text-coolGray-800 absolute navVault" style={{ top: 130, right: 15, zIndex: 10 }}>
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
