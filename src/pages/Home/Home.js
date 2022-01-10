import React from 'react';
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel';
import HomeMenu from './HomeMenu/HomeMenu';


export default function Home(props) {

    return (
        <div>
            <HomeCarousel />
            <HomeMenu />
        </div>
    )
}