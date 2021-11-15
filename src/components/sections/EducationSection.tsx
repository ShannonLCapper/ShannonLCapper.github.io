import { SECTION_ID } from 'src/components/navigation/Navigation';
import {
    Section,
    SectionCite,
    SectionQuote,
} from 'src/components/sections/styleComponents';

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
        ></Section>
    );
};
