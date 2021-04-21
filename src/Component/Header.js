import React from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';

export default function Header() {
    return ( <
        >
        <
        MDBNavbar light bgColor = 'light' >
        <
        MDBContainer >
        <
        MDBNavbarBrand href = '#' >
        <
        img src = 'https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.png'
        height = '30'
        alt = ''
        loading = 'lazy' /
        >
        <
        /MDBNavbarBrand> < /
        MDBContainer > <
        /MDBNavbar> < /
        >
    );
}