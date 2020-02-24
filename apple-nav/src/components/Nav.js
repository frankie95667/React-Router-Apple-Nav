import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import search from '../assets/images/search.svg';
import cart from '../assets/images/cart.svg';

const Nav = (props) => {
    console.log(props);
    return (
        <NavWrapper bgColor={props.bgColor ? props.bgColor : 'black'}>
            <NavList>
                <NavItem><NavLogo to='/'></NavLogo></NavItem>
                <NavItem><Navlink to='/mac'>Mac</Navlink></NavItem>
                <NavItem><Navlink to='/ipad'>iPad</Navlink></NavItem>
                <NavItem><Navlink to='/iphone'>iPhone</Navlink></NavItem>
                <NavItem><Navlink to='/watch'>Watch</Navlink></NavItem>
                <NavItem><Navlink to='/tv'>TV</Navlink></NavItem>
                <NavItem><Navlink to='/music'>Music</Navlink></NavItem>
                <NavItem><Navlink to='/support'>Support</Navlink></NavItem>
                <NavItem><NavSearch to='' /></NavItem>
                <NavItem><NavCart to='' /></NavItem>
            </NavList>
        </NavWrapper>
    );
}

const NavWrapper = styled.nav`
    height:48px;
    max-height: 44px;
    font-size: 15px;
    font-weight: 100;
    background-color: ${props => props.bgColor};
    width: 100%;
    font-family: 'SF Pro Text';

    &:hover {

    }
`;

const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    height: 44px;
    max-width: 1000px;
    margin: 0 auto;
`;

const NavItem = styled.li`
    list-style: none;
    padding: 0;
`;

const Navlink = styled(NavLink)`
    text-decoration: none;
    color: #f5f5f7;
    padding: 0 10px;
`;

const NavLogo = styled(Navlink)`
    width: 16px;
    background-image: url(${logo});
    background-size: 16px 44px;
    background-repeat: no-repeat;
    background-position: center center;
`;

const NavSearch = styled(Navlink)`
    background-image: url(${search});
    background-repeat: no-repeat;
    background-size: 16px 88px;
    width: 18px;
    padding: 15px 15px;
    background-position: 10px 0;
`;

const NavCart = styled(Navlink)`
    background-image: url(${cart});
    background-repeat: no-repeat;
    background-size: 15px 88px;
    width: 18px;
    background-position: center center;
`;

export default Nav;