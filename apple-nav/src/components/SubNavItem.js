import React from 'react';
import styled from 'styled-components';

const SubNavItem = (props) => {
    return (
        <SubNavItemContainer>
            <NavFigure src={props.data.url} />
            <span>{props.data.text}</span>
            {props.data.new ? <NewSpan>New</NewSpan> : null}
        </SubNavItemContainer>
    );
}

const SubNavItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12.5px;
    margin-bottom: 20px;
`;

const NavFigure = styled.img`
    width: 52px;
    margin: 0;
    max-height: 56px;
`;

const NewSpan = styled.span`
    color: red;
`;

export default SubNavItem;