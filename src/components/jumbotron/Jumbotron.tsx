import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { darken } from 'polished';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-scroll';

import Flowers from 'src/assets/images/flowers.jpg';
import {
    NAV_RIGHT,
    NAV_WIDTH,
    SECTION_ID,
} from 'src/components/navigation/Navigation';
import { border } from 'src/styles/border';
import { colors } from 'src/styles/colors';
import { font } from 'src/styles/font';
import { mediaQueryTarget } from 'src/styles/scalepoint';

const JUMBO_TEXT_COLOR = colors.white;

const Root = styled.div({
    textAlign: 'center',
    height: '100vh',
    display: 'grid',
    placeItems: 'center',
    color: JUMBO_TEXT_COLOR,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: darken(0.15, colors.primary),
    // Add an overlay on the background image
    '::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        opacity: 0.45,
        backgroundImage: `url("${Flowers}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        // Note: this is ignored in Safari/iOS. It'll default to 'scroll'
        backgroundAttachment: 'fixed',
    },
});

const Contents = styled.div({
    zIndex: 2,
});

const Heading = styled.h1({
    fontFamily: font.family.cursive,
    borderBottom: `1px solid ${JUMBO_TEXT_COLOR}`,
    marginTop: 0,
    lineHeight: 1.1,
    paddingBottom: 15,
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: 36,
    [mediaQueryTarget.medium]: {
        fontSize: 63,
    },
});

const Subhead = styled.p({
    margin: 0,
    fontSize: 21,
    fontWeight: 200,
});

const QuickScroll = styled(Link)({
    cursor: 'pointer',
    position: 'absolute',
    display: 'grid',
    placeItems: 'center',
    height: 80,
    width: '100%',
    bottom: 0,
    right: 0,
    color: JUMBO_TEXT_COLOR,
    backgroundColor: colors.secondary,
    [mediaQueryTarget.medium]: {
        right: NAV_RIGHT,
        width: NAV_WIDTH,
        borderTopRightRadius: border.radius,
        borderTopLeftRadius: border.radius,
    },
});

const bounce = keyframes({
    from: {
        transform: 'translateY(5px)',
    },
    to: {
        transform: 'translateY(-5px)',
    },
});

const DownIcon = styled(FaChevronDown)({
    animation: `.8s ${bounce} infinite alternate`,
});

export const Jumbotron = () => {
    return (
        <Root>
            <Contents>
                <Heading>Shannon L Capper</Heading>
                <Subhead>Portfolio</Subhead>
                <QuickScroll to={SECTION_ID.PROFILE} smooth={true}>
                    <DownIcon size={40} aria-label='Scroll down' />
                </QuickScroll>
            </Contents>
        </Root>
    );
};
