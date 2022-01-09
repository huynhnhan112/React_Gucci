import React, { useEffect } from 'react';
import HeaderNav from '../../../templates/HomeTemplate/Layout/Header/HeaderNav';
import HomePoster from '../../../templates/HomeTemplate/Layout/HomePoster/HomePoster';
import HomeSlick from '../../../templates/HomeTemplate/Layout/HomeSlick/HomeSlick';


export default function HomeMenu(props) {

    useEffect(() => {

    }, []);


    return (
        <div style={{margin:'16px'}}>
            {/* <HeaderNav /> */}
            <HomeSlick />
            <HomePoster />
        </div>
    )
}