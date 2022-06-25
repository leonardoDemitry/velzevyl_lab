import React from 'react';

import './App.css';

import styled from 'styled-components';

import GlobalStyle from './app/global_style';

import Chart from './app/Chart';

const Self = styled.div``;

const Sandbox = styled.div`
    width: 500px;
    height: 500px;
`;

function App() {
    return (
        <>
            <Self>
                <Sandbox>
                    <Chart x_axis={{ start: 0, end: 20 }} y_axis={{ start: 0, end: 20 }} />
                </Sandbox>
            </Self>
            <GlobalStyle />
        </>
    );
}

export default App;
