import { SECTION_ID } from 'src/components/navigation/Navigation';
import {
    Section,
    SectionCite,
    SectionQuote,
} from 'src/components/sections/styleComponents';

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
        ></Section>
    );
};
