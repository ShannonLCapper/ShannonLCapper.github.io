import styled from '@emotion/styled';
import React from 'react';

import { SECTION_ID } from 'src/components/navigation/Navigation';
import {
    Section,
    SectionCite,
    SectionH3,
    SectionQuote,
    Separator,
} from 'src/components/sections/styleComponents';
import { mediaQueryTarget } from 'src/styles/scalepoint';

const lists = [
    {
        title: 'Web Technologies',
        items: [
            'React',
            'HTML/CSS',
            'CSS-in-JS',
            'GraphQL/Apollo',
            'Redux',
            'Browser extensions',
            'Prosemirror',
            'DraftJS',
            'Jest',
            'Redux Saga',
            'Sass',
            'AppSync',
            'AWS Lambda',
            'DynamoDB',
            'Cloudformation',
            'Serverless framework',
            'S3',
        ],
    },
    {
        title: 'Programming Languages',
        items: ['TypeScript', 'JavaScript', 'Python', 'Ruby'],
    },
    {
        title: 'Tools',
        items: [
            'Git',
            'Webpack/Rollup',
            'Eslint/Prettier',
            'CircleCI',
            'Sentry',
            'Sumo Logic',
            'Mixpanel',
            'Figma',
            'Adobe Photoshop',
            'Adobe Illustrator',
        ],
    },
];

const ListHeading = styled(SectionH3)({
    textAlign: 'center',
});

const List = styled.ul({
    margin: 0,
    padding: 0,
    listStyle: 'none',
    textAlign: 'center',
    fontSize: '1.8rem',
    display: 'grid',
    gridTemplateColumns: '1fr',
    [mediaQueryTarget.medium]: {
        gridTemplateColumns: '1fr 1fr',
    },
});

export const SkillsSection = () => {
    return (
        <Section
            id={SECTION_ID.SKILLS}
            title='Technical Skills'
            subtitle={
                <>
                    <SectionQuote>
                        It is possible to fly without motors, but not without
                        knowledge and skill.
                    </SectionQuote>
                    <SectionCite>Wilbur Wright</SectionCite>
                </>
            }
        >
            {lists.map(({ title, items }, i) => (
                <React.Fragment key={title}>
                    <ListHeading>{title}</ListHeading>
                    <List>
                        {items.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </List>
                    {i < lists.length - 1 && (
                        <Separator isLastSection={false} />
                    )}
                </React.Fragment>
            ))}
        </Section>
    );
};
