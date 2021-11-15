import styled from '@emotion/styled';
import { darken } from 'polished';
import { useMemo, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { FiMenu } from 'react-icons/fi';

import { border } from 'src/styles/border';
import { colors } from 'src/styles/colors';
import { useMediaQueryTarget } from 'src/styles/scalepoint';
import { transition } from 'src/styles/transition';

// TODO: smooth scroll, DRY up hrefs
const navItems = [
    {
        href: '#profile',
        label: 'Profile',
    },
    {
        href: '#projects',
        label: 'Projects',
    },
    {
        href: '#skills',
        label: 'Skills',
    },
    {
        href: '#education',
        label: 'Education',
    },
    {
        href: '#work-experience',
        label: 'Work',
    },
    {
        href: '#contact',
        label: 'Contact',
    },
];

const MobileNavRoot = styled.nav({
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: 100,
    textAlign: 'center',
    fontSize: 18,
});

const MobileNavHeader = styled.div({
    backgroundColor: colors.secondary,
    paddingRight: 15,
    paddingTop: 8,
    paddingBottom: 8,
    display: 'flex',
    justifyContent: 'flex-end',
});

const HamburgerButton = styled.button({
    cursor: 'pointer',
    backgroundColor: 'transparent',
    color: colors.primary,
    borderRadius: border.radius,
    border: `1px solid ${colors.white}`,
    paddingTop: 2,
    paddingLeft: 8,
    paddingRight: 8,
    lineHeight: 1,

    ':hover, :focus, :active': {
        backgroundColor: colors.white,
    },
});

const MobileNavMenu = styled(AnimateHeight)({
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
});

const MobileNavList = styled.ul({
    margin: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 8,
    paddingBottom: 8,
    listStyle: 'none',
    borderTop: `1px solid ${colors.white}`,
    backgroundColor: colors.secondary,
});

const NavLink = styled.a({
    display: 'block',
    width: '100%',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 30,
    paddingBottom: 30,
    color: colors.white,
    textDecoration: 'none',
    transition: `background-color ${transition.duration}, color ${transition.duration}`,
    lineHeight: 1,
    ':hover, :focus': {
        color: darken(0.05, colors.light),
    },
    // '.active': {
    //     backgroundColor: colors.primary,
    // }
});

const useMenuState = () => {
    const [visible, setVisible] = useState(false);

    return useMemo(
        () => ({
            visible,
            toggle: () => setVisible((prev) => !prev),
            hide: () => setVisible(false),
        }),
        [visible, setVisible],
    );
};

const MobileNavigation = () => {
    const menuState = useMenuState();

    return (
        <MobileNavRoot>
            <MobileNavHeader>
                <HamburgerButton
                    onClick={menuState.toggle}
                    aria-expanded={menuState.visible}
                >
                    <FiMenu size={28} aria-label='Toggle navigation menu' />
                </HamburgerButton>
            </MobileNavHeader>
            <MobileNavMenu
                aria-label='Navigation menu'
                aria-expanded={menuState.visible}
                height={menuState.visible ? 'auto' : 0}
                duration={300}
                easing='ease-in-out'
            >
                <MobileNavList>
                    {navItems.map(({ label, href }) => (
                        <li key={href}>
                            <NavLink href={href} onClick={menuState.hide}>
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </MobileNavList>
            </MobileNavMenu>
        </MobileNavRoot>
    );
};

const DesktopNavigation = () => {
    return <nav>Desktop nav</nav>;
};

export const Navigation = () => {
    const isDesktop = useMediaQueryTarget.medium();

    return isDesktop ? <DesktopNavigation /> : <MobileNavigation />;
};
