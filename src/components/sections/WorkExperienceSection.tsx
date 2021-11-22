import { SECTION_ID } from 'src/components/navigation/Navigation';
import {
    Section,
    SectionCite,
    SectionQuote,
} from 'src/components/sections/styleComponents';
import {
    TimelineList,
    TimelineListItem,
} from 'src/components/sections/TimelineList';

const jobs: TimelineListItem[] = [
    {
        heading: 'Senior Software Engineer (Frontend/Full-Stack)',
        dateStart: new Date(2019, 1),
        dateEnd: null,
        subheading: 'Textio',
        description: [
            'Migrated the Textio blog from Medium to a self-hosted solution',
            'Core developer in rewriting the Textio web app to support mobile',
            'Lead engineer for the full-stack development of the new Umeo collaboration platform, using React + Typescript + Apollo for the frontend and Python + AppSync/GraphQL for the backend.',
        ],
        location: 'Seattle, WA',
    },
    {
        heading: 'Software Engineer (Frontend)',
        dateStart: new Date(2017, 5),
        dateEnd: new Date(2019, 1),
        subheading: 'Textio',
        description: [
            'Introduced real client-side routing to the single-page Textio web application, including converting legacy portions of the app from jQuery to React',
            'Core developer of Textio for Chrome browser extension (React + Typescript) from early development through ship, including implementing a solution for drawing in-canvas highlights in the rich text editors of third-party websites',
            'Assisted in the migration of the team’s various frontend codebases into a monorepo, and coordinated converting a large portion of the codebase to Typescript',
            'Lead engineer for the development and ship of the Textio for Outlook extension, including collaborating with Product/Design to decide product direction given technical limitations of the platform, designing the plugin architecture, leading a team of engineers to build the plugin, project management, and assisting customers with rollout',
        ],
        location: 'Seattle, WA',
    },
    {
        heading: 'Graphic Artist',
        dateStart: new Date(2011, 0),
        dateEnd: new Date(2017, 5),
        subheading: 'Freelance work for various businesses and individuals',
        description: [
            'Used Adobe Photoshop and Adobe Illustrator to design business logos, tattoos, and posters',
        ],
        location: null,
    },
];

export const WorkExperienceSection = () => {
    return (
        <Section
            id={SECTION_ID.WORK_EXPERIENCE}
            title='Work Experience'
            subtitle={
                <>
                    <SectionQuote>
                        Far and away the best prize that life has to offer is
                        the chance to work hard at work worth doing.
                    </SectionQuote>
                    <SectionCite>Theodore Roosevelt</SectionCite>
                </>
            }
        >
            <TimelineList items={jobs} />
        </Section>
    );
};
