import { CSSObject, Global } from '@emotion/react';

import { colors } from 'src/styles/colors';
import { font } from 'src/styles/font';

const globalStyles = (): CSSObject => ({
    '*': {
        boxSizing: 'border-box',
    },
    body: {
        backgroundColor: colors.white,
        color: colors.secondary,
        fontFamily: font.family.sansSerif,
    },
});

export const GlobalStyles = () => <Global styles={globalStyles} />;
