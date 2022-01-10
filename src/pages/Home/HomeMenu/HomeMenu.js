import React, { useEffect } from 'react';
import HomePoster from '../../../templates/HomeTemplate/Layout/HomePoster/HomePoster';
import HomeSlick from '../../../templates/HomeTemplate/Layout/HomeSlick/HomeSlick';


export default function HomeMenu(props) {

    useEffect(() => {

    }, []);


    return (
        <div style={{margin:'16px'}}>
            <HomeSlick />
            <HomePoster />
        </div>
    )
}