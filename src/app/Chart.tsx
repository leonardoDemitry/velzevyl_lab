import React from 'react';

import styled from 'styled-components';

import theme from './theme';

let Self = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${theme.color.bg};
`;

type Props = {
    x_axis: { start: number, end: number },
    y_axis: { start: number, end: number },
    // elements:
};

const Chart: React.FC<Props> = ({ x_axis, y_axis }) => {
    return <Self />
};

export default Chart;