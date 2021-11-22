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

const educationItems: TimelineListItem[] = [
    {
        heading: 'California Polytechnic State University',
        location: 'San Luis Obispo, CA',
        dateStart: new Date(2011, 8),
        dateEnd: new Date(2015, 2),
        subheading: 'Bachelor of Science - Biological Sciences',
        description: [
            'Cumulative GPA: 4.0',
            'Graduated as the top-ranked student in the College of Science and Math',
        ],
    },
];

export const EducationSection = () => {
    return (
        <Section
            id={SECTION_ID.EDUCATION}
            title='Education'
            subtitle={
                <>
                    <SectionQuote>
                        The function of education is to teach one to think
                        intensively and to think critically. Intelligence plus
                        character - that is the goal of true education.
                    </SectionQuote>
                    <SectionCite>Martin Luther King, Jr.</SectionCite>
                </>
            }
        >
            <TimelineList items={educationItems} />
        </Section>
    );
};
