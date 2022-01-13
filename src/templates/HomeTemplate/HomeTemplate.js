import React, { useEffect } from 'react'
import {Route} from 'react-router'
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import { Fragment } from 'react';

export const HomeTemplate = (props) => {

    const {Component, ...restProps} = props;

    useEffect(() => {
        return () => {
            window.scrollTo(0, 0);
        }
    })

    return <Route {...restProps} render={(propsRoute)=>{
        return <Fragment>
            <Header {...propsRoute} />
            <Component {...propsRoute} />
            <Footer {...propsRoute} />
        </Fragment>
    }} />
}
