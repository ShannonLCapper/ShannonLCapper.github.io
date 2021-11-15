import { SECTION_ID } from 'src/components/navigation/Navigation';
import {
    Section,
    SectionCite,
    SectionQuote,
} from 'src/components/sections/styleComponents';

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
        ></Section>
    );
};
