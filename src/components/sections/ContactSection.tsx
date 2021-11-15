import styled from '@emotion/styled';
import { FaEnvelopeSquare, FaLinkedin, FaPhoneSquare } from 'react-icons/fa';

import { SECTION_ID } from 'src/components/navigation/Navigation';
import { Section, Separator } from 'src/components/sections/styleComponents';
import { colors } from 'src/styles/colors';
import { mediaQueryTarget } from 'src/styles/scalepoint';
import { transition } from 'src/styles/transition';

const ICON_SIZE = 42;

const ContactList = styled.ul({
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: '1fr',
    [mediaQueryTarget.large]: {
        gridTemplateColumns: '1fr 1fr',
    },
});

const ContactListLink = styled.a({
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    gap: 12,
    transition: `color ${transition.duration}`,
    color: 'inherit',

    ':hover, :focus': {
        color: colors.white,
    },
});

export const ContactSection = () => {
    return (
        <Section
            id={SECTION_ID.CONTACT}
            title='Contact Me'
            subtitle='Let’s work together'
            isLastSection={true}
        >
            <ContactList>
                <li>
                    <ContactListLink
                        href='mailto:shannonlcapper@gmail.com'
                        target='_top'
                    >
                        <FaEnvelopeSquare
                            aria-label='Email icon'
                            size={ICON_SIZE}
                        />
                        ShannonLCapper@gmail.com
                    </ContactListLink>
                </li>
                <li>
                    <ContactListLink href='tel:+1-805-231-3689'>
                        <FaPhoneSquare
                            aria-label='Phone icon'
                            size={ICON_SIZE}
                        />
                        (805) 231-3689
                    </ContactListLink>
                </li>
                <li>
                    <ContactListLink
                        href='https://www.linkedin.com/in/shannon-capper-81436a130/'
                        target='_blank'
                    >
                        <FaLinkedin
                            aria-label='LinkedIn icon'
                            size={ICON_SIZE}
                        />
                        linkedin.com/in/shannon-capper-81436a130
                    </ContactListLink>
                </li>
            </ContactList>
            <Separator isLastSection={true} />
        </Section>
    );
};
