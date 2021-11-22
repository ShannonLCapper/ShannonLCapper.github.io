import styled from '@emotion/styled';
import { darken } from 'polished';

import SudokuSolverScreenshot from 'src/assets/images/sudoku-solver-screenshot.jpg';
import ZorkdaScreenshot from 'src/assets/images/zorkda-screenshot.jpg';
import { SECTION_ID } from 'src/components/navigation/Navigation';
import {
    ProjectListItem,
    ProjectListItemConfig,
} from 'src/components/sections/ProjectListItem';
import {
    Section,
    SectionCite,
    SectionH3,
    SectionQuote,
    Separator,
} from 'src/components/sections/styleComponents';
import { border } from 'src/styles/border';
import { colors } from 'src/styles/colors';
import { mediaQueryTarget } from 'src/styles/scalepoint';

const ConferenceVideoHeading = styled(SectionH3)({
    textAlign: 'center',
    marginBottom: 20,
});

const VideoOuterWrapper = styled.div({
    maxWidth: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
});

const VideoInnerWrapper = styled.div({
    position: 'relative',
    paddingBottom: '56.25%', // 16:9
});

const Video = styled.iframe({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: border.radius,
});

const ProjectList = styled.ul({
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 40,
    [mediaQueryTarget.large]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 30,
    },
});

const PortfolioDescription = styled.p({
    margin: 0,
    textAlign: 'center',
});

const PortfolioLink = styled.a({
    display: 'block',
    backgroundColor: colors.primary,
    color: colors.white,
    maxWidth: '25rem',
    padding: '1rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    borderRadius: border.radius,
    textDecoration: 'none',
    ':hover, :focus': {
        backgroundColor: darken(0.08, colors.primary),
    },
    ':active': {
        backgroundColor: colors.secondary,
    },
});

const projects: ProjectListItemConfig[] = [
    {
        name: 'The Legend of Zorkda',
        url: 'zorkda.herokuapp.com',
        githubUrl: 'github.com/ShannonLCapper/zorkda',
        image: {
            src: ZorkdaScreenshot,
            alt: 'Screenshot from zorkda project',
        },
        summary:
            'Text-based web game that allows users to play, create accounts, and save games',
        description: [
            'Mobile-first front end built using AngularJS and Bootstrap, with support from Gulp during development',
            'Back end runs on Sinatra/Ruby, with Redis used to cache active game sessions',
            'Game and user data stored in DynamoDB',
        ],
        technologies: [
            'HTML5/CSS3',
            'JavaScript',
            'AngularJS',
            'Bootstrap',
            'Ruby',
            'Sinatra',
            'DynamoDB',
            'Redis',
            'AJAX',
            'Gulp',
        ],
    },
    {
        name: 'Sudoku Solver',
        url: 'sudoku-solver-sc.herokuapp.com',
        githubUrl: 'github.com/ShannonLCapper/sudoku-solver',
        image: {
            src: SudokuSolverScreenshot,
            alt: 'Screenshot from sudoku solver project',
        },
        summary: 'Single-page web app which solves any inputted Sudoku',
        description: [
            'Uses custom algorithm written in Ruby',
            'jQuery library provides page functionality',
            'AJAX calls communicate with backend Sinatra server',
        ],
        technologies: [
            'HTML5/CSS3',
            'JavaScript',
            'jQuery',
            'AJAX',
            'Ruby',
            'Sinatra',
        ],
    },
];

export const ProjectsSection = () => {
    return (
        <Section
            id={SECTION_ID.PROJECTS}
            title='Projects'
            subtitle={
                <>
                    <SectionQuote>
                        Every project is an opportunity to learn, to figure out
                        problems and challenges, to invent and reinvent.
                    </SectionQuote>
                    <SectionCite>David Rockwell</SectionCite>
                </>
            }
        >
            <ConferenceVideoHeading>
                CascadiaJS Conference Talk - 2018
            </ConferenceVideoHeading>
            <VideoOuterWrapper>
                <VideoInnerWrapper>
                    <Video
                        src='https://www.youtube.com/embed/OguVJXIbHdU'
                        title='YouTube video player'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    />
                </VideoInnerWrapper>
            </VideoOuterWrapper>
            <Separator isLastSection={false} />
            <ProjectList>
                {projects.map((project) => (
                    <ProjectListItem key={project.name} project={project} />
                ))}
            </ProjectList>
            <Separator isLastSection={false} />
            <PortfolioDescription>
                This portfolio was created using React, Typescript, and Emotion
                <PortfolioLink
                    href='https://github.com/ShannonLCapper/ShannonLCapper.github.io'
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    See project on GitHub
                </PortfolioLink>
            </PortfolioDescription>
        </Section>
    );
};
