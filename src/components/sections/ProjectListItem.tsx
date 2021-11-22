import styled from '@emotion/styled';
import { darken, transparentize } from 'polished';
import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { FaCaretDown, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

import { border } from 'src/styles/border';
import { colors } from 'src/styles/colors';
import { font } from 'src/styles/font';
import { mediaQueryTarget } from 'src/styles/scalepoint';
import { transition } from 'src/styles/transition';

export interface ProjectListItemConfig {
    name: string;
    url: string;
    image: {
        src: string;
        alt: string;
    };
    summary: string;
    description: string[];
    technologies: string[];
    githubUrl: string;
}

interface ProjectListItemProps {
    project: ProjectListItemConfig;
}

const OVERLAY_ANIMATION_DURATION = '0.5s';
const EXPAND_DURATION_MS = 300;

const Root = styled.li();

const ImageLink = styled.a({
    display: 'block',
    position: 'relative',
    overflow: 'hidden',
    marginBottom: 15,
    borderRadius: border.radius,
});

const Image = styled.img<{ isHovered: boolean }>(({ isHovered }) => ({
    display: 'block',
    width: '100%',
    height: 'auto',
    transition: `all ${OVERLAY_ANIMATION_DURATION}`,
    transform: isHovered ? 'scale(1.1)' : undefined,
}));

const Overlay = styled.div<{ isHovered: boolean }>(({ isHovered }) => ({
    textAlign: 'left',
    display: 'block',
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    padding: '8%',
    color: colors.white,
    opacity: isHovered ? 1 : 0,
    backgroundColor: transparentize(0.3, colors.primary),
    transition: `all ${OVERLAY_ANIMATION_DURATION}`,
}));

const Heading = styled.h3<{ isHovered: boolean }>(({ isHovered }) => ({
    color: colors.white,
    fontFamily: font.family.cursive,
    lineHeight: font.lineHeight.heading,
    margin: 0,
    fontSize: 30,
    [mediaQueryTarget.xsmall]: {
        fontSize: 35,
    },
    [mediaQueryTarget.small]: {
        fontSize: 50,
    },
    [mediaQueryTarget.medium]: {
        fontSize: 35,
    },
    [mediaQueryTarget.xlarge]: {
        fontSize: 50,
    },
    // Animated bottom outline
    '::after': {
        content: "''",
        display: 'block',
        marginTop: '5%',
        marginBottom: '5%',
        height: 2,
        backgroundColor: colors.white,
        width: isHovered ? '100%' : '0%',
        transition: `width ${OVERLAY_ANIMATION_DURATION}`,
    },
}));

const Subheading = styled.p<{ isHovered: boolean }>(({ isHovered }) => ({
    margin: 0,
    transform: isHovered ? 'translateX(0%)' : 'translateX(100%)',
    transition: `all ${OVERLAY_ANIMATION_DURATION}`,
    fontSize: 12,
    [mediaQueryTarget.xsmall]: {
        fontSize: 15,
    },
    [mediaQueryTarget.small]: {
        fontSize: 18,
    },
    [mediaQueryTarget.large]: {
        fontSize: 12,
    },
    [mediaQueryTarget.xlarge]: {
        fontSize: 15,
    },
}));

const DescriptionList = styled.ol({
    padding: 0,
    listStyle: 'circle',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 5,
});

const DescriptionListItem = styled.li({
    margin: 0,
    ':not(:last-of-type)': {
        paddingBottom: 5,
    },
});

const Technologies = styled.p({
    margin: 0,
    marginBottom: 20,
});

const Bold = styled.span({
    fontWeight: 700,
});

const LinksSection = styled.p({
    margin: 0,
    marginBottom: 10,
});

const ProjectLink = styled.a({
    color: colors.primary,
    display: 'inline-block',
    textDecoration: 'none',
    ':hover, :focus': {
        textDecoration: 'underline',
    },
    ':active': {
        color: darken(0.125, colors.primary),
    },
    ':not(:last-of-type)::after': {
        content: '"|"',
        paddingLeft: 10,
        paddingRight: 10,
    },
});

const linkIconStyles = {
    fontSize: '1.8rem',
    verticalAlign: 'middle',
    marginRight: 6,
};

const ExternalLinkIcon = styled(FaExternalLinkAlt)(linkIconStyles);
const GithubIcon = styled(FaGithub)(linkIconStyles);

const ToggleButton = styled.button({
    cursor: 'pointer',
    display: 'block',
    width: '100%',
    border: 'none',
    backgroundColor: 'transparent',
    padding: 0,
    transition: `background-color ${transition.duration}`,
    borderRadius: 10,

    ':hover': {
        backgroundColor: darken(0.05, colors.light),
    },
});

const CaretIcon = styled(FaCaretDown)<{ isExpanded: boolean }>(
    ({ isExpanded }) => ({
        fontSize: 40,
        transition: `transform ${EXPAND_DURATION_MS}ms`,
        transform: isExpanded ? 'rotate(-0.5turn)' : 'rotate(0)',
    }),
);

export const ProjectListItem = ({ project }: ProjectListItemProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleIsExpanded = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <Root
            key={project.name}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <ImageLink
                href={`https://${project.url}`}
                target='_blank'
                rel='noreferrer noopener'
            >
                <Image
                    isHovered={isHovered}
                    src={project.image.src}
                    alt={project.image.alt}
                    width='900'
                    height='600'
                />
                <Overlay isHovered={isHovered}>
                    <Heading isHovered={isHovered}>{project.name}</Heading>
                    <Subheading isHovered={isHovered}>
                        {project.summary}
                    </Subheading>
                </Overlay>
            </ImageLink>
            <AnimateHeight
                aria-expanded={isExpanded}
                height={isExpanded ? 'auto' : 0}
                duration={EXPAND_DURATION_MS}
                easing='ease-in-out'
            >
                <DescriptionList>
                    {project.description.map((descriptor) => (
                        <DescriptionListItem key={descriptor}>
                            {descriptor}
                        </DescriptionListItem>
                    ))}
                </DescriptionList>
                <Technologies>
                    <Bold>Technologies:</Bold> {project.technologies.join(', ')}
                </Technologies>
                <LinksSection>
                    <ProjectLink
                        href={`https://${project.url}`}
                        target='_blank'
                        rel='noreferrer noopener'
                    >
                        <ExternalLinkIcon />
                        {project.url}
                    </ProjectLink>
                    <ProjectLink
                        href={`https://${project.githubUrl}`}
                        target='_blank'
                        rel='noreferrer noopener'
                    >
                        <GithubIcon />
                        {project.githubUrl}
                    </ProjectLink>
                </LinksSection>
            </AnimateHeight>
            <ToggleButton aria-expanded={isExpanded} onClick={toggleIsExpanded}>
                <CaretIcon
                    isExpanded={isExpanded}
                    aria-label='Open job description'
                />
            </ToggleButton>
        </Root>
    );
};
