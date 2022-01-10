import React from 'react'
import {Route} from 'react-router'
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import { Fragment } from 'react';

export const HomeTemplate = (props) => {

    const {Component, ...restProps} = props;

    return <Route {...restProps} render={(propsRoute)=>{
        return <Fragment>
            <Header {...propsRoute} />
            <Component {...propsRoute} />
            <Footer {...propsRoute} />
        </Fragment>
    }} />
}
