import { SECTION_ID } from 'src/components/navigation/Navigation';
import { Section } from 'src/components/sections/styleComponents';

export const ContactSection = () => {
    return (
        <Section
            id={SECTION_ID.CONTACT}
            title='Contact Me'
            subtitle='Let’s work together'
            isLastSection={true}
        ></Section>
    );
};
