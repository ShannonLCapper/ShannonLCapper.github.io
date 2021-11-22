import styled from '@emotion/styled';
import { desaturate, lighten, transparentize } from 'polished';
import React from 'react';

import {
    NAV_RIGHT,
    NAV_WIDTH,
    SECTION_ID,
} from 'src/components/navigation/Navigation';
import { colors } from 'src/styles/colors';
import { font } from 'src/styles/font';
import { mediaQueryTarget } from 'src/styles/scalepoint';

const LAST_SECTION_TEXT_COLOR = colors.white;

const SectionRoot = styled.section(
    ({ isLastSection }: { isLastSection: boolean }) => ({
        paddingTop: 60,
        paddingBottom: 60,
        paddingLeft: 20,
        paddingRight: 20,

        [mediaQueryTarget.medium]: {
            paddingLeft: NAV_WIDTH + NAV_RIGHT * 2,
            paddingRight: NAV_WIDTH + NAV_RIGHT * 2,
        },

        ...(isLastSection
            ? {
                  backgroundColor: desaturate(
                      0.33,
                      lighten(0.15, colors.secondary),
                  ),
                  minHeight: '100vh',
                  color: transparentize(0.3, LAST_SECTION_TEXT_COLOR),
              }
            : {
                  backgroundColor: colors.white,
                  '&:nth-of-type(2n)': {
                      backgroundColor: colors.light,
                  },
              }),
    }),
);

const SectionWrapper = styled.div({
    maxWidth: 940,
    marginLeft: 'auto',
    marginRight: 'auto',
});

const SectionHeader = styled.header({
    textAlign: 'center',
});

const SectionTitle = styled.h2(
    ({ isLastSection }: { isLastSection: boolean }) => ({
        margin: 0,
        fontWeight: 'normal',
        color: isLastSection ? LAST_SECTION_TEXT_COLOR : colors.primary,
        fontFamily: font.family.cursive,
        fontSize: '5.5rem',
        lineHeight: font.lineHeight.heading,
        marginBottom: 10,
    }),
);

const SectionSubtitle = styled.p({
    margin: 0,
    fontWeight: 300,
    lineHeight: 1.4,
    fontSize: 16,
    [mediaQueryTarget.medium]: {
        fontSize: 21,
    },
});

export const SectionQuote = styled.q({
    '::before': {
        content: '"“"',
    },
    '::after': {
        content: '"”"',
    },
});

export const SectionCite = styled.cite({
    fontWeight: 'normal',
    display: 'block',
    fontStyle: 'italic',
    '::before': {
        content: '"—"',
    },
});

export const Separator = styled.hr(
    ({ isLastSection }: { isLastSection: boolean }) => ({
        border: 'none',
        opacity: 0.3,
        marginBottom: 30,
        marginTop: 30,
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: isLastSection
            ? LAST_SECTION_TEXT_COLOR
            : colors.secondary,
    }),
);

export const SectionH3 = styled.h3({
    margin: 0,
    fontWeight: 'normal',
    color: colors.primary,
    fontFamily: font.family.cursive,
    fontSize: '3rem',
    marginBottom: 10,
    lineHeight: font.lineHeight.heading,
});

export const DetailedListH3 = styled(SectionH3)({
    fontSize: '2.2rem',
});

export const DetailedListH4 = styled.h4({
    margin: 0,
    fontWeight: 'bold',
    color: 'inherit',
    fontSize: '1.5rem',
    marginBottom: 10,
    lineHeight: font.lineHeight.heading,
});

export const Section = ({
    id,
    title,
    subtitle,
    children,
    isLastSection = false,
}: {
    id: SECTION_ID;
    title: string;
    subtitle: React.ReactNode;
    children: React.ReactNode;
    isLastSection?: boolean;
}) => {
    return (
        <SectionRoot id={id} isLastSection={isLastSection}>
            <SectionWrapper>
                <SectionHeader>
                    <SectionTitle isLastSection={isLastSection}>
                        {title}
                    </SectionTitle>
                    <SectionSubtitle>{subtitle}</SectionSubtitle>
                    <Separator isLastSection={isLastSection} />
                </SectionHeader>
                {children}
            </SectionWrapper>
        </SectionRoot>
    );
};
