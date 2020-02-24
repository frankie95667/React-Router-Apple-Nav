import React from 'react';
import {NavLink} from 'react-router-dom';
import SubNavItem from './SubNavItem';
import styled from 'styled-components';

const SubNav = (props) => {
    console.log(props.data);
    return ( 
        <SubNavContainer>
            <SubNavWrapper>
            {props.data.map(item => {
                return (
                    <SubNavLinks to=''>
                        <SubNavItem data={item} />
                    </SubNavLinks>
                )
            })}
            </SubNavWrapper>
        </SubNavContainer>
    );
}

const SubNavContainer = styled.nav`
    height: 100px;
    background: rgba(245,245,247,0.6);
    padding: 8px 0;
`;

const SubNavWrapper = styled.div`
    width: 1100px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: 0 auto;
`;

const SubNavLinks = styled(NavLink)`
    text-decoration: none;
    color: #1d1d1f;

    &:hover {
        color: #06c;
    }
`;

export default SubNav;