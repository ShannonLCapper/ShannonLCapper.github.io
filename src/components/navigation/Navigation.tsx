import styled from '@emotion/styled';
import { darken } from 'polished';
import { useMemo, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-scroll';

import { border } from 'src/styles/border';
import { colors } from 'src/styles/colors';
import { useMediaQueryTarget } from 'src/styles/scalepoint';
import { transition } from 'src/styles/transition';

export enum SECTION_ID {
    PROFILE = 'profile',
    PROJECTS = 'projects',
    SKILLS = 'skills',
    EDUCATION = 'education',
    WORK_EXPERIENCE = 'work-experience',
    CONTACT = 'contact',
}

const navItems = [
    {
        id: SECTION_ID.PROFILE,
        label: 'Profile',
    },
    {
        id: SECTION_ID.PROJECTS,
        label: 'Projects',
    },
    {
        id: SECTION_ID.SKILLS,
        label: 'Skills',
    },
    {
        id: SECTION_ID.EDUCATION,
        label: 'Education',
    },
    {
        id: SECTION_ID.WORK_EXPERIENCE,
        label: 'Work',
    },
    {
        id: SECTION_ID.CONTACT,
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

const NAV_LINK_ACTIVE_CLASS = 'active';
const NavLink = styled(Link)({
    cursor: 'pointer',
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
    [`&.${NAV_LINK_ACTIVE_CLASS}`]: {
        backgroundColor: colors.primary,
    },
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
                    {navItems.map(({ label, id }) => (
                        <li key={id}>
                            <NavLink
                                activeClass={NAV_LINK_ACTIVE_CLASS}
                                to={id}
                                spy={true}
                                smooth={true}
                                onClick={menuState.hide}
                            >
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
