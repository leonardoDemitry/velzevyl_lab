import React from 'react';

import styled from 'styled-components';

import theme from './theme';

const Self = styled.div`
    height: 100%;
    width: 360px;
    background-color: ${theme.color.bg};
`;

const Panel = () => {
    return <Self />
};

export default Panel;