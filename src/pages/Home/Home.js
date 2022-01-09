import React, { useEffect } from 'react';
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel';
import HomeMenu from './HomeMenu/HomeMenu';


export default function Home(props) {
   
    useEffect(() => {
       
    }, [])

    return (
        <div>
            <HomeCarousel />
            <HomeMenu />
        </div>
    )
}