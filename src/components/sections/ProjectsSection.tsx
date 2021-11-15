import { SECTION_ID } from 'src/components/navigation/Navigation';
import {
    Section,
    SectionCite,
    SectionQuote,
} from 'src/components/sections/styleComponents';

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
        ></Section>
    );
};
