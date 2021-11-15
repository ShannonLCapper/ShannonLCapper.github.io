import { CSSObject, Global } from '@emotion/react';

import { colors } from 'src/styles/colors';
import { font } from 'src/styles/font';

const globalStyles = (): CSSObject => ({
    '*': {
        boxSizing: 'border-box',
    },
    body: {
        margin: 0,
        backgroundColor: colors.white,
        color: colors.secondary,
        fontFamily: font.family.sansSerif,
        lineHeight: font.lineHeight.default,
    },
    html: {
        fontSize: 10,
    },
});

export const GlobalStyles = () => <Global styles={globalStyles} />;
