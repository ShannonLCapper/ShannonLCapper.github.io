import { SECTION_ID } from 'src/components/navigation/Navigation';
import { Section } from 'src/components/sections/styleComponents';

export const ProfileSection = () => {
    return (
        <Section
            id={SECTION_ID.PROFILE}
            title='Profile'
            subtitle='I’m a full-stack developer who unites logic with creativity'
        ></Section>
    );
};
