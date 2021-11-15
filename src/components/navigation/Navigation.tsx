import styled from '@emotion/styled';
import { darken } from 'polished';
import { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react';
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
        id: SECTION_ID.WORK_EXPERIENCE,
        label: 'Work',
    },
    {
        id: SECTION_ID.SKILLS,
        label: 'Skills',
    },
    {
        id: SECTION_ID.PROJECTS,
        label: 'Projects',
    },
    {
        id: SECTION_ID.EDUCATION,
        label: 'Education',
    },
    {
        id: SECTION_ID.CONTACT,
        label: 'Contact',
    },
];

const NAV_Z_INDEX = 100;
export const NAV_RIGHT = 40;
export const NAV_WIDTH = 110;
const NAV_TOP = 60;

const MobileNavRoot = styled.nav({
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: NAV_Z_INDEX,
});

const DesktopNavRoot = styled.nav({
    position: 'sticky',
    top: NAV_TOP,
    left: 0,
    right: 0,
    zIndex: NAV_Z_INDEX,
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

const DesktopNavList = styled.ul(({ isStuck }: { isStuck: boolean }) => ({
    position: 'absolute',
    right: NAV_RIGHT,
    width: NAV_WIDTH,
    maxHeight: `calc(100vh - ${NAV_TOP * 2}px)`,
    overflowY: 'auto',
    margin: 0,
    padding: 0,
    listStyle: 'none',
    backgroundColor: colors.secondary,
    borderBottomLeftRadius: border.radius,
    borderBottomRightRadius: border.radius,
    borderTopLeftRadius: isStuck ? border.radius : 0,
    borderTopRightRadius: isStuck ? border.radius : 0,
}));

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
    textAlign: 'center',
    fontSize: '1.8rem',
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

/**
 * Returns whether the given sticky element is "stuck" or not
 * Inspired by https://css-tricks.com/how-to-detect-when-a-sticky-element-gets-pinned/
 */
const useIsStuck = (
    stickyElementRef: MutableRefObject<HTMLElement | null>,
    stickyElementTop: number,
): boolean => {
    const [isStuck, setIsStuck] = useState(false);
    useEffect(() => {
        const stickyElement = stickyElementRef.current;
        if (!stickyElement) {
            return;
        }
        const observer = new IntersectionObserver(
            ([entry]) => setIsStuck(entry.intersectionRatio < 1),
            {
                threshold: [1],
                rootMargin: `-${stickyElementTop + 1}px 0px 0px 0px`,
            },
        );
        observer.observe(stickyElement);

        return () => observer.disconnect();
    }, [stickyElementRef, stickyElementTop]);

    return isStuck;
};

const DesktopNavigation = () => {
    const stickyElementRef = useRef<HTMLElement | null>(null);
    const isStuck = useIsStuck(stickyElementRef, NAV_TOP);

    return (
        <DesktopNavRoot ref={stickyElementRef}>
            <DesktopNavList isStuck={isStuck}>
                {navItems.map(({ label, id }) => (
                    <li key={id}>
                        <NavLink
                            activeClass={NAV_LINK_ACTIVE_CLASS}
                            to={id}
                            spy={true}
                            smooth={true}
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}
            </DesktopNavList>
        </DesktopNavRoot>
    );
};

export const Navigation = () => {
    const isDesktop = useMediaQueryTarget.medium();

    return isDesktop ? <DesktopNavigation /> : <MobileNavigation />;
};
