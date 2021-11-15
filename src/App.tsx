import React from 'react';

import { GlobalStyles } from 'src/GlobalStyles';

import { font } from './styles/font';

export const App = () => {
    return (
        <div className='App'>
            <GlobalStyles />
            <header className='App-header'>
                <p style={{ fontFamily: font.family.sansSerif }}>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
            </header>
        </div>
    );
};
