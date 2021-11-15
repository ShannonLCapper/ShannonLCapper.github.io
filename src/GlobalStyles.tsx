import { CSSObject, Global } from '@emotion/react';

import { colors } from './styles/colors';
import { font } from './styles/font';

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
