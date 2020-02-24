import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import SubNav from './SubNav';
import macbook_air from '../assets/images/macbookair_large.svg';
import macbook_pro_13 from '../assets/images/macbook_pro_13_large.svg';
import macbook_pro_16 from '../assets/images/macbook_pro_16_large.svg';
import imac from '../assets/images/imac_large.svg';
import imac_pro from '../assets/images/imac_pro_large.svg';
import mac_pro from '../assets/images/mac_pro_large.svg';
import macmini from '../assets/images/macmini_large.svg';
import mac_comp from '../assets/images/mac_comp_large.svg';
import pro_display_xdr from '../assets/images/pro_display_xdr_large.svg';
import mac_acc from '../assets/images/mac_acc_large.svg';
import mac_osx from '../assets/images/mac_osx_large.svg';

const subNavData = [
    {
        text: 'MacBook Air',
        url: macbook_air,
        new: false
    },
    {
        text: 'MacBook Pro 13"',
        url: macbook_pro_13,
        new: false
    },
    {
        text: 'MacBook Pro 16"',
        url: macbook_pro_16,
        new: true
    },
    {
        text: 'iMac',
        url: imac,
        new: false
    },
    {
        text: 'iMac Pro',
        url: imac_pro,
        new: false
    },
    {
        text: 'Mac Pro',
        url: mac_pro,
        new: true
    },
    {
        text: 'Mac mini',
        url: macmini,
        new: false
    },
    {
        text: 'Compare',
        url: mac_comp,
        new: false
    },
    {
        text: 'Pro Display XDR',
        url: pro_display_xdr,
        new: true
    },
    {
        text: 'Accessories',
        url: mac_acc,
        new: false
    },
    {
        text: 'Catalina', 
        url: mac_osx,
        new: false
    }
]

const Mac = (props) => {
    return (
    <div>
        <Nav  bgColor="rgba(0,0,0,.8)"  />
        <SubNav data={subNavData} />
    </div>);
}

export default Mac;